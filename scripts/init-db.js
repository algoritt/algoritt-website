#!/usr/bin/env node

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const COLLECTIONS = {
  CONTACT_SUBMISSIONS: 'contact_submissions',
  NEWSLETTER_SUBSCRIPTIONS: 'newsletter_subscriptions',
  JOB_APPLICATIONS: 'job_applications'
};

async function initializeDatabase() {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI environment variable is not set');
    process.exit(1);
  }

  let client;
  
  try {
    console.log('🔗 Connecting to MongoDB...');
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    
    const db = client.db('algoritt');
    console.log('✅ Connected to MongoDB successfully - using "algoritt" database');
    
    // Test connection
    await db.admin().ping();
    console.log('🏓 Database ping successful');
    
    // Create indexes for contact_submissions
    console.log('📝 Creating indexes for contact_submissions...');
    await db.collection(COLLECTIONS.CONTACT_SUBMISSIONS).createIndexes([
      { key: { email: 1 } },
      { key: { createdAt: -1 } },
      { key: { subject: 1 } }
    ]);
    
    // Create indexes for newsletter_subscriptions
    console.log('📧 Creating indexes for newsletter_subscriptions...');
    await db.collection(COLLECTIONS.NEWSLETTER_SUBSCRIPTIONS).createIndexes([
      { key: { email: 1 }, unique: true },
      { key: { createdAt: -1 } },
      { key: { status: 1 } }
    ]);
    
    // Create indexes for job_applications
    console.log('💼 Creating indexes for job_applications...');
    await db.collection(COLLECTIONS.JOB_APPLICATIONS).createIndexes([
      { key: { email: 1 } },
      { key: { position_id: 1 } },
      { key: { status: 1 } },
      { key: { created_at: -1 } },
      { key: { position_id: 1, status: 1 } }
    ]);
    
    console.log('🎉 Database initialization completed successfully!');
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔒 Database connection closed');
    }
  }
}

// Run the initialization
initializeDatabase(); 