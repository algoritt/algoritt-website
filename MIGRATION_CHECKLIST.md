# MongoDB to DynamoDB Migration Checklist

## Pre-Migration Steps

- [ ] **Backup MongoDB Data**
  ```bash
  mongodump --uri="your_mongodb_uri" --out=./backup
  ```

- [ ] **Create AWS Account** (if not already done)
  - Sign up at https://aws.amazon.com

- [ ] **Create IAM User**
  - Go to AWS IAM Console
  - Create user with programmatic access
  - Attach `AmazonDynamoDBFullAccess` policy
  - Save Access Key ID and Secret Access Key

- [ ] **Set Up Environment Variables**
  - Copy `.env.local.example` to `.env.local`
  - Fill in AWS credentials
  - Keep MongoDB URI for migration

## Migration Steps

### Step 1: Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

This will install:
- `@aws-sdk/client-dynamodb`
- `@aws-sdk/lib-dynamodb`
- `uuid`
- All other project dependencies

### Step 2: Initialize DynamoDB Tables

```bash
npm run db:init
```

**What this does:**
- Creates `algoritt-contact-submissions` table
- Creates `algoritt-newsletter-subscriptions` table
- Creates `algoritt-job-applications` table
- Sets up Global Secondary Indexes (GSI)
- Configures provisioned throughput

**Expected output:**
```
🚀 Starting DynamoDB initialization...
📍 Region: us-east-1

📝 Creating algoritt-contact-submissions table...
✅ Table algoritt-contact-submissions created successfully
...
🎉 DynamoDB initialization completed successfully!
```

### Step 3: Verify Tables in AWS Console

- [ ] Log in to AWS Console
- [ ] Go to DynamoDB service
- [ ] Verify all three tables exist
- [ ] Check indexes are created

### Step 4: Run Migration Script

```bash
npm run db:migrate
```

**What this does:**
- Connects to MongoDB
- Reads all documents from each collection
- Transforms data to DynamoDB format
- Batch writes to DynamoDB
- Provides migration summary

**Expected output:**
```
🚀 Starting MongoDB to DynamoDB migration...
🔗 Connecting to MongoDB...
✅ Connected to MongoDB

📝 Migrating contact submissions...
   Found X documents
   ✓ Migrated X/X items
   ✅ Successfully migrated X contact submissions
...
🎉 Migration completed successfully!
```

### Step 5: Verify Data Migration

- [ ] Check DynamoDB tables in AWS Console
- [ ] Verify record counts match MongoDB
- [ ] Spot check a few records for data accuracy

### Step 6: Test Application

```bash
npm run dev
```

Test all forms:
- [ ] Submit a contact form
- [ ] Subscribe to newsletter
- [ ] Apply for a job position

Check:
- [ ] Data appears in DynamoDB tables
- [ ] Teams notifications work (if configured)
- [ ] No errors in console

### Step 7: Production Deployment

- [ ] Update production environment variables
  - `AWS_REGION`
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `DYNAMODB_*_TABLE` (if using custom names)
  - `TEAMS_CHANNEL_WEBHOOK`

- [ ] Deploy to production
- [ ] Test forms in production
- [ ] Monitor DynamoDB metrics

### Step 8: Monitor and Optimize

- [ ] Set up CloudWatch alarms
- [ ] Monitor read/write capacity
- [ ] Review costs after 1 week
- [ ] Consider switching to On-Demand if traffic is unpredictable

## Post-Migration

### Optional: Remove MongoDB (After Successful Migration)

Only do this after confirming everything works:

1. **Remove MongoDB dependency** (kept for migration script):
   ```bash
   npm uninstall mongodb
   ```

2. **Remove MongoDB URI from .env.local**

3. **Archive or delete MongoDB database** (after backing up)

4. **Remove migration script** (optional):
   ```bash
   rm scripts/migrate-mongo-to-dynamodb.js
   ```

### Cost Optimization

**Current Setup:**
- Provisioned throughput: 5 RCU / 5 WCU per table
- Estimated cost: $3-5/month for low traffic

**Options:**

1. **Reduce Capacity** (if traffic is very low):
   - Minimum: 1 RCU / 1 WCU
   - Cost: ~$1/month

2. **Switch to On-Demand**:
   - Best for unpredictable traffic
   - Pay per request
   - No capacity planning needed

3. **Use Auto Scaling**:
   - Automatically adjust capacity
   - Better for growing applications

## Rollback Plan

If migration fails or issues arise:

1. **Keep MongoDB running** (don't delete data)
2. **Revert code changes**:
   ```bash
   git checkout HEAD~1 src/lib/mongodb.ts src/lib/models.ts src/actions/forms.ts
   ```
3. **Update environment variables** back to MongoDB
4. **Redeploy previous version**

## Troubleshooting

### "Cannot find module '@aws-sdk/client-dynamodb'"

**Solution:** Run `npm install`

### "Invalid/Missing environment variable"

**Solution:** Check `.env.local` has all required AWS variables

### "ResourceNotFoundException" 

**Solution:** Run `npm run db:init` to create tables

### "AccessDeniedException"

**Solution:** Check IAM user has DynamoDB permissions

### "ProvisionedThroughputExceededException"

**Solution:** Increase RCU/WCU or switch to On-Demand

### Migration script fails

**Solution:** 
- Check MongoDB connection string
- Verify MongoDB collections exist
- Check data format matches expected schema

## Support Resources

- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [DynamoDB Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/)

## Notes

- **MongoDB package** is kept in dependencies for migration script
- After successful migration and testing, you can remove it
- Keep MongoDB backup for at least 30 days
- Monitor costs in AWS Billing Dashboard
- Set up budget alerts in AWS

