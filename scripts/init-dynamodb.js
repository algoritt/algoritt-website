#!/usr/bin/env node

const { 
  DynamoDBClient, 
  CreateTableCommand, 
  DescribeTableCommand,
  waitUntilTableExists 
} = require('@aws-sdk/client-dynamodb');
require('dotenv').config({ path: '.env.local' });

// Validate environment variables
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

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const TABLES = {
  CONTACT_SUBMISSIONS: process.env.DYNAMODB_CONTACT_SUBMISSIONS_TABLE || 'algoritt-contact-submissions',
  NEWSLETTER_SUBSCRIPTIONS: process.env.DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE || 'algoritt-newsletter-subscriptions',
  JOB_APPLICATIONS: process.env.DYNAMODB_JOB_APPLICATIONS_TABLE || 'algoritt-job-applications',
};

async function tableExists(tableName) {
  try {
    const command = new DescribeTableCommand({ TableName: tableName });
    await client.send(command);
    return true;
  } catch (error) {
    if (error.name === 'ResourceNotFoundException') {
      return false;
    }
    throw error;
  }
}

async function createContactSubmissionsTable() {
  const tableName = TABLES.CONTACT_SUBMISSIONS;
  
  if (await tableExists(tableName)) {
    console.log(`✅ Table ${tableName} already exists`);
    return;
  }

  console.log(`📝 Creating ${tableName} table...`);
  
  const command = new CreateTableCommand({
    TableName: tableName,
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'email', AttributeType: 'S' },
      { AttributeName: 'timestamp', AttributeType: 'N' },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'EmailIndex',
        KeySchema: [
          { AttributeName: 'email', KeyType: 'HASH' },
          { AttributeName: 'timestamp', KeyType: 'RANGE' },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  });

  await client.send(command);
  await waitUntilTableExists(
    { client, maxWaitTime: 60 },
    { TableName: tableName }
  );
  console.log(`✅ Table ${tableName} created successfully`);
}

async function createNewsletterSubscriptionsTable() {
  const tableName = TABLES.NEWSLETTER_SUBSCRIPTIONS;
  
  if (await tableExists(tableName)) {
    console.log(`✅ Table ${tableName} already exists`);
    return;
  }

  console.log(`📧 Creating ${tableName} table...`);
  
  const command = new CreateTableCommand({
    TableName: tableName,
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'email', AttributeType: 'S' },
      { AttributeName: 'timestamp', AttributeType: 'N' },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'EmailIndex',
        KeySchema: [
          { AttributeName: 'email', KeyType: 'HASH' },
          { AttributeName: 'timestamp', KeyType: 'RANGE' },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  });

  await client.send(command);
  await waitUntilTableExists(
    { client, maxWaitTime: 60 },
    { TableName: tableName }
  );
  console.log(`✅ Table ${tableName} created successfully`);
}

async function createJobApplicationsTable() {
  const tableName = TABLES.JOB_APPLICATIONS;
  
  if (await tableExists(tableName)) {
    console.log(`✅ Table ${tableName} already exists`);
    return;
  }

  console.log(`💼 Creating ${tableName} table...`);
  
  const command = new CreateTableCommand({
    TableName: tableName,
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'email', AttributeType: 'S' },
      { AttributeName: 'position_id', AttributeType: 'S' },
      { AttributeName: 'timestamp', AttributeType: 'N' },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'EmailIndex',
        KeySchema: [
          { AttributeName: 'email', KeyType: 'HASH' },
          { AttributeName: 'timestamp', KeyType: 'RANGE' },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
      {
        IndexName: 'PositionIndex',
        KeySchema: [
          { AttributeName: 'position_id', KeyType: 'HASH' },
          { AttributeName: 'timestamp', KeyType: 'RANGE' },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  });

  await client.send(command);
  await waitUntilTableExists(
    { client, maxWaitTime: 60 },
    { TableName: tableName }
  );
  console.log(`✅ Table ${tableName} created successfully`);
}

async function initializeDynamoDB() {
  try {
    console.log('🚀 Starting DynamoDB initialization...\n');
    console.log(`📍 Region: ${process.env.AWS_REGION}\n`);
    
    await createContactSubmissionsTable();
    await createNewsletterSubscriptionsTable();
    await createJobApplicationsTable();
    
    console.log('\n🎉 DynamoDB initialization completed successfully!');
    console.log('\n📋 Tables created:');
    console.log(`   - ${TABLES.CONTACT_SUBMISSIONS}`);
    console.log(`   - ${TABLES.NEWSLETTER_SUBSCRIPTIONS}`);
    console.log(`   - ${TABLES.JOB_APPLICATIONS}`);
    
  } catch (error) {
    console.error('❌ Error initializing DynamoDB:', error.message);
    if (error.$metadata) {
      console.error('Error details:', {
        httpStatusCode: error.$metadata.httpStatusCode,
        requestId: error.$metadata.requestId,
      });
    }
    process.exit(1);
  }
}

// Run the initialization
initializeDynamoDB();

