#!/usr/bin/env node

const { MongoClient } = require('mongodb');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, BatchWriteCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: '.env.local' });

// Validate MongoDB environment variables
if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not set');
  process.exit(1);
}

// Validate AWS environment variables
if (!process.env.AWS_REGION) {
  console.error('❌ AWS_REGION environment variable is not set');
  process.exit(1);
}

if (!process.env.AWS_ACCESS_KEY_ID) {
  console.error('❌ AWS_ACCESS_KEY_ID environment variable is not set');
  process.exit(1);
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
  console.error('❌ AWS_SECRET_ACCESS_KEY environment variable is not set');
  process.exit(1);
}

const MONGO_COLLECTIONS = {
  CONTACT_SUBMISSIONS: 'contact_submissions',
  NEWSLETTER_SUBSCRIPTIONS: 'newsletter_subscriptions',
  JOB_APPLICATIONS: 'job_applications'
};

const DYNAMODB_TABLES = {
  CONTACT_SUBMISSIONS: process.env.DYNAMODB_CONTACT_SUBMISSIONS_TABLE || 'algoritt-contact-submissions',
  NEWSLETTER_SUBSCRIPTIONS: process.env.DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE || 'algoritt-newsletter-subscriptions',
  JOB_APPLICATIONS: process.env.DYNAMODB_JOB_APPLICATIONS_TABLE || 'algoritt-job-applications',
};

// Setup DynamoDB client
const dynamoDbClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const dynamoDb = DynamoDBDocumentClient.from(dynamoDbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false,
  },
});

/**
 * Batch write items to DynamoDB (max 25 items at a time)
 */
async function batchWriteToDynamoDB(tableName, items) {
  const BATCH_SIZE = 25;
  let processedCount = 0;

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);
    const putRequests = batch.map(item => ({
      PutRequest: { Item: item }
    }));

    const command = new BatchWriteCommand({
      RequestItems: {
        [tableName]: putRequests
      }
    });

    try {
      await dynamoDb.send(command);
      processedCount += batch.length;
      console.log(`   ✓ Migrated ${processedCount}/${items.length} items`);
    } catch (error) {
      console.error(`   ✗ Error in batch write:`, error.message);
      throw error;
    }
  }
}

/**
 * Migrate contact submissions
 */
async function migrateContactSubmissions(mongoDb) {
  console.log('\n📝 Migrating contact submissions...');
  
  const collection = mongoDb.collection(MONGO_COLLECTIONS.CONTACT_SUBMISSIONS);
  const documents = await collection.find({}).toArray();
  
  console.log(`   Found ${documents.length} documents`);
  
  if (documents.length === 0) {
    console.log('   ℹ️  No documents to migrate');
    return 0;
  }

  const dynamoItems = documents.map(doc => ({
    id: doc._id.toString(),
    full_name: doc.full_name,
    email: doc.email,
    subject: doc.subject,
    message: doc.message,
    createdAt: doc.createdAt ? doc.createdAt.toISOString() : new Date().toISOString(),
    timestamp: doc.createdAt ? doc.createdAt.getTime() : Date.now(),
  }));

  await batchWriteToDynamoDB(DYNAMODB_TABLES.CONTACT_SUBMISSIONS, dynamoItems);
  console.log(`   ✅ Successfully migrated ${documents.length} contact submissions`);
  return documents.length;
}

/**
 * Migrate newsletter subscriptions
 */
async function migrateNewsletterSubscriptions(mongoDb) {
  console.log('\n📧 Migrating newsletter subscriptions...');
  
  const collection = mongoDb.collection(MONGO_COLLECTIONS.NEWSLETTER_SUBSCRIPTIONS);
  const documents = await collection.find({}).toArray();
  
  console.log(`   Found ${documents.length} documents`);
  
  if (documents.length === 0) {
    console.log('   ℹ️  No documents to migrate');
    return 0;
  }

  const dynamoItems = documents.map(doc => ({
    id: doc._id.toString(),
    email: doc.email,
    status: doc.status || 'active',
    createdAt: doc.createdAt ? doc.createdAt.toISOString() : new Date().toISOString(),
    timestamp: doc.createdAt ? doc.createdAt.getTime() : Date.now(),
  }));

  await batchWriteToDynamoDB(DYNAMODB_TABLES.NEWSLETTER_SUBSCRIPTIONS, dynamoItems);
  console.log(`   ✅ Successfully migrated ${documents.length} newsletter subscriptions`);
  return documents.length;
}

/**
 * Migrate job applications
 */
async function migrateJobApplications(mongoDb) {
  console.log('\n💼 Migrating job applications...');
  
  const collection = mongoDb.collection(MONGO_COLLECTIONS.JOB_APPLICATIONS);
  const documents = await collection.find({}).toArray();
  
  console.log(`   Found ${documents.length} documents`);
  
  if (documents.length === 0) {
    console.log('   ℹ️  No documents to migrate');
    return 0;
  }

  const dynamoItems = documents.map(doc => ({
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    phone: doc.phone,
    resume_url: doc.resume_url,
    cover_letter: doc.cover_letter,
    ...(doc.portfolio && { portfolio: doc.portfolio }),
    position_id: doc.position_id,
    position_title: doc.position_title,
    status: doc.status || 'pending',
    created_at: doc.created_at ? doc.created_at.toISOString() : new Date().toISOString(),
    timestamp: doc.created_at ? doc.created_at.getTime() : Date.now(),
  }));

  await batchWriteToDynamoDB(DYNAMODB_TABLES.JOB_APPLICATIONS, dynamoItems);
  console.log(`   ✅ Successfully migrated ${documents.length} job applications`);
  return documents.length;
}

async function runMigration() {
  let mongoClient;
  
  try {
    console.log('🚀 Starting MongoDB to DynamoDB migration...\n');
    
    // Connect to MongoDB
    console.log('🔗 Connecting to MongoDB...');
    mongoClient = new MongoClient(process.env.MONGODB_URI);
    await mongoClient.connect();
    const mongoDb = mongoClient.db('algoritt');
    console.log('✅ Connected to MongoDB\n');

    // Run migrations
    const contactCount = await migrateContactSubmissions(mongoDb);
    const newsletterCount = await migrateNewsletterSubscriptions(mongoDb);
    const jobsCount = await migrateJobApplications(mongoDb);

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Migration completed successfully!');
    console.log('='.repeat(50));
    console.log(`\n📊 Summary:`);
    console.log(`   Contact Submissions:      ${contactCount} migrated`);
    console.log(`   Newsletter Subscriptions: ${newsletterCount} migrated`);
    console.log(`   Job Applications:         ${jobsCount} migrated`);
    console.log(`   Total:                    ${contactCount + newsletterCount + jobsCount} records\n`);
    
    console.log(`📋 DynamoDB Tables:`);
    console.log(`   - ${DYNAMODB_TABLES.CONTACT_SUBMISSIONS}`);
    console.log(`   - ${DYNAMODB_TABLES.NEWSLETTER_SUBSCRIPTIONS}`);
    console.log(`   - ${DYNAMODB_TABLES.JOB_APPLICATIONS}\n`);

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    if (error.stack) {
      console.error('\nStack trace:', error.stack);
    }
    process.exit(1);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
      console.log('🔒 MongoDB connection closed');
    }
  }
}

// Run the migration
runMigration();

