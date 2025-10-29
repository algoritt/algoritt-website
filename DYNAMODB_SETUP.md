# DynamoDB Migration Guide

This guide explains how to set up and migrate from MongoDB to AWS DynamoDB.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# AWS Configuration for DynamoDB
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key

# DynamoDB Table Names (optional - defaults will be used if not specified)
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications

# Microsoft Teams Webhook for Notifications
TEAMS_CHANNEL_WEBHOOK=your_teams_webhook_url

# Legacy MongoDB Configuration (only needed for migration)
MONGODB_URI=your_mongodb_connection_string
```

## AWS Setup

### 1. Create IAM User

1. Go to AWS IAM Console
2. Create a new user with programmatic access
3. Attach the following policies:
   - `AmazonDynamoDBFullAccess` (or create a custom policy with limited permissions)

### 2. Get AWS Credentials

After creating the IAM user, save the:
- Access Key ID
- Secret Access Key

Add these to your `.env.local` file.

## Installation

Install the required dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

## Database Setup

### Step 1: Initialize DynamoDB Tables

Run the initialization script to create the required DynamoDB tables:

```bash
npm run db:init
```

This will create three tables:
- `algoritt-contact-submissions`
- `algoritt-newsletter-subscriptions`
- `algoritt-job-applications`

Each table includes:
- Primary key: `id` (String)
- Global Secondary Indexes (GSI) for efficient querying
- Provisioned throughput: 5 read/write capacity units (adjust as needed)

### Step 2: Migrate Data from MongoDB (Optional)

If you have existing data in MongoDB, run the migration script:

```bash
npm run db:migrate
```

This script will:
1. Connect to your MongoDB database
2. Read all documents from each collection
3. Transform and write them to DynamoDB
4. Provide a summary of migrated records

**Note:** Keep your MongoDB connection string in `.env.local` during migration.

## Table Schemas

### Contact Submissions Table

```typescript
{
  id: string (Primary Key)
  full_name: string
  email: string
  subject: string
  message: string
  createdAt: string (ISO 8601)
  timestamp: number (Unix timestamp)
}
```

**GSI:** EmailIndex (email + timestamp)

### Newsletter Subscriptions Table

```typescript
{
  id: string (Primary Key)
  email: string
  status: 'active' | 'unsubscribed'
  createdAt: string (ISO 8601)
  timestamp: number (Unix timestamp)
}
```

**GSI:** EmailIndex (email)

### Job Applications Table

```typescript
{
  id: string (Primary Key)
  name: string
  email: string
  phone: string
  resume_url: string
  cover_letter: string
  portfolio?: string
  position_id: string
  position_title: string
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected'
  created_at: string (ISO 8601)
  timestamp: number (Unix timestamp)
}
```

**GSI:** 
- EmailIndex (email + timestamp)
- PositionIndex (position_id + timestamp)

## Cost Considerations

### Provisioned Throughput

The default configuration uses:
- 5 Read Capacity Units (RCU) per table
- 5 Write Capacity Units (WCU) per table
- 2 GSIs per table (some tables)

**Estimated Cost:** ~$3-5/month for low traffic

### On-Demand Option

To switch to on-demand billing (pay per request):

1. Modify `scripts/init-dynamodb.js`
2. Change `BillingMode` to `PAY_PER_REQUEST`
3. Remove `ProvisionedThroughput` configurations

This is better for unpredictable traffic patterns.

## Testing

After setup, test the integration:

1. Start the development server: `npm run dev`
2. Submit a contact form
3. Subscribe to newsletter
4. Apply for a job

Check the DynamoDB console to verify data is being stored correctly.

## Monitoring

Monitor your DynamoDB usage:

1. Go to AWS DynamoDB Console
2. Select your tables
3. View metrics in CloudWatch
4. Set up alarms for capacity utilization

## Troubleshooting

### Authentication Errors

- Verify AWS credentials are correct
- Check IAM user has DynamoDB permissions
- Ensure AWS_REGION is set correctly

### Table Creation Fails

- Check if tables already exist
- Verify table names don't conflict
- Check AWS service quotas

### Migration Issues

- Ensure MongoDB connection string is correct
- Check MongoDB collections exist
- Verify data format matches expected schema

## Cleanup (Optional)

After successful migration and testing, you can:

1. Remove MongoDB dependencies from `package.json`
2. Delete MongoDB-related files
3. Remove `MONGODB_URI` from environment variables
4. Archive or delete MongoDB database

## Support

For issues or questions:
1. Check AWS DynamoDB documentation
2. Review CloudWatch logs
3. Check application logs in the console

