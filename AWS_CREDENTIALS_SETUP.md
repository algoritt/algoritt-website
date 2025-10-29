# AWS Credentials Setup Guide

Complete step-by-step guide to set up AWS credentials for DynamoDB access.

## 📋 Overview

You need three main pieces of information:
1. **AWS Region** - Geographic location for your data
2. **AWS Access Key ID** - Your AWS user identifier
3. **AWS Secret Access Key** - Your AWS user password

---

## 🚀 Step 1: Create AWS Account

### If You Don't Have an AWS Account

1. Go to [https://aws.amazon.com](https://aws.amazon.com)
2. Click **"Create an AWS Account"**
3. Fill in:
   - Email address
   - Password
   - AWS account name
4. Provide contact information
5. Enter payment information (credit/debit card)
   - **Note:** Free tier available for 12 months
   - DynamoDB free tier: 25 GB storage, 25 WCU, 25 RCU
6. Verify your identity (phone verification)
7. Choose **Basic Support - Free**
8. Wait for account activation (can take a few minutes)

### If You Already Have an AWS Account

1. Sign in to [AWS Console](https://console.aws.amazon.com)
2. Proceed to Step 2

---

## 🔐 Step 2: Create IAM User for DynamoDB

### Why Create an IAM User?

- Root account credentials are too powerful and risky
- IAM users have limited, specific permissions
- Better security practice
- Can be rotated/revoked easily

### Create IAM User

1. **Sign in to AWS Console**
   - Go to [https://console.aws.amazon.com](https://console.aws.amazon.com)
   - Sign in with your root account

2. **Navigate to IAM**
   - In the search bar, type "IAM"
   - Click on **IAM** (Identity and Access Management)

3. **Create New User**
   - Click **Users** in the left sidebar
   - Click **Create user** button (or "Add users")

4. **Set User Details**
   - **User name:** `algoritt-dynamodb-user` (or any name you prefer)
   - Click **Next**

5. **Set Permissions**
   
   **Option A: Use Managed Policy (Easier, More Permissive)**
   - Select **Attach policies directly**
   - Search for: `AmazonDynamoDBFullAccess`
   - Check the box next to it
   - Click **Next**

   **Option B: Create Custom Policy (Better Security, Recommended)**
   - Select **Attach policies directly**
   - Click **Create policy**
   - Choose **JSON** tab
   - Paste this policy:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "dynamodb:CreateTable",
           "dynamodb:DescribeTable",
           "dynamodb:PutItem",
           "dynamodb:GetItem",
           "dynamodb:Query",
           "dynamodb:Scan",
           "dynamodb:UpdateItem",
           "dynamodb:DeleteItem",
           "dynamodb:BatchWriteItem",
           "dynamodb:BatchGetItem"
         ],
         "Resource": [
           "arn:aws:dynamodb:*:*:table/algoritt-*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": [
           "dynamodb:ListTables"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

   - Click **Next**
   - **Policy name:** `AlgorittDynamoDBPolicy`
   - Click **Create policy**
   - Go back to the user creation tab
   - Refresh policies and search for `AlgorittDynamoDBPolicy`
   - Select it and click **Next**

6. **Review and Create**
   - Review the user details
   - Click **Create user**

---

## 🔑 Step 3: Create Access Keys

1. **After user is created, you'll be on the Users page**
   - Click on the user you just created (`algoritt-dynamodb-user`)

2. **Go to Security Credentials Tab**
   - Click on **Security credentials** tab

3. **Create Access Key**
   - Scroll down to **Access keys** section
   - Click **Create access key**

4. **Select Use Case**
   - Choose **Application running outside AWS**
   - Check the confirmation box at the bottom
   - Click **Next**

5. **Set Description (Optional)**
   - Description tag: `Algoritt website DynamoDB access`
   - Click **Create access key**

6. **⚠️ IMPORTANT: Save Your Credentials**
   
   You'll see a screen with:
   - **Access key ID** (looks like: `AKIAIOSFODNN7EXAMPLE`)
   - **Secret access key** (looks like: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`)

   **🚨 THIS IS YOUR ONLY CHANCE TO SEE THE SECRET ACCESS KEY!**

   Options to save:
   - Click **Download .csv file** (recommended)
   - Copy both values to a secure password manager
   - Keep them in a secure location

   **⚠️ Never commit these to Git or share publicly!**

7. **Click Done**

---

## 🌍 Step 4: Choose AWS Region

### What is an AWS Region?

An AWS Region is a physical location where AWS has data centers. Choose the region closest to:
- Your users (for lower latency)
- Your location (for compliance/legal requirements)

### Popular Regions

| Region Code | Location | Name |
|------------|----------|------|
| `us-east-1` | N. Virginia, USA | US East (N. Virginia) |
| `us-east-2` | Ohio, USA | US East (Ohio) |
| `us-west-1` | California, USA | US West (N. California) |
| `us-west-2` | Oregon, USA | US West (Oregon) |
| `eu-west-1` | Ireland | Europe (Ireland) |
| `eu-central-1` | Frankfurt, Germany | Europe (Frankfurt) |
| `ap-south-1` | Mumbai, India | Asia Pacific (Mumbai) |
| `ap-southeast-1` | Singapore | Asia Pacific (Singapore) |

### How to Choose

**If your users are primarily in:**
- **North America** → `us-east-1` or `us-west-2`
- **Europe** → `eu-west-1` or `eu-central-1`
- **India** → `ap-south-1`
- **Southeast Asia** → `ap-southeast-1`

**For Algoritt (based in Gurugram, India):**
- Recommended: `ap-south-1` (Mumbai) - closest to your location

---

## 📝 Step 5: Create .env.local File

1. **Copy the example file**
   ```bash
   cp env.example .env.local
   ```

2. **Open .env.local in your editor**
   ```bash
   code .env.local
   # or
   nano .env.local
   # or
   vim .env.local
   ```

3. **Fill in the values**

   ```env
   # AWS Configuration
   AWS_REGION=ap-south-1
   AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
   AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
   
   # DynamoDB Tables (use defaults or customize)
   DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
   DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
   DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
   
   # Teams Webhook (if you have one)
   TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/your-webhook-url
   
   # MongoDB (only for migration)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/algoritt
   ```

4. **Save the file**

---

## 🎯 Step 6: Get Microsoft Teams Webhook (Optional)

If you want form submissions to send notifications to Teams:

1. **Open Microsoft Teams**
2. **Go to your desired channel**
3. **Click the three dots (⋯) next to the channel name**
4. **Select "Connectors" or "Workflows"**
5. **Search for "Incoming Webhook"**
6. **Click "Add" or "Configure"**
7. **Provide a name:** "Algoritt Form Submissions"
8. **Optional: Upload an image**
9. **Click "Create"**
10. **Copy the webhook URL** (starts with `https://outlook.office.com/webhook/...`)
11. **Paste it in your .env.local file**

---

## ✅ Step 7: Verify Your Setup

1. **Check your .env.local file has all required variables:**
   ```bash
   cat .env.local
   ```

2. **Verify format:**
   - AWS_REGION is set (e.g., `ap-south-1`)
   - AWS_ACCESS_KEY_ID is ~20 characters
   - AWS_SECRET_ACCESS_KEY is ~40 characters
   - No quotes around values
   - No spaces around the `=` sign

3. **Test connection:**
   ```bash
   npm run db:init
   ```

   If successful, you'll see:
   ```
   🚀 Starting DynamoDB initialization...
   📍 Region: ap-south-1
   ✅ Table algoritt-contact-submissions created successfully
   ...
   ```

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Use IAM users (not root account)
- ✅ Use minimal permissions (principle of least privilege)
- ✅ Keep credentials in `.env.local` (gitignored)
- ✅ Rotate access keys periodically (every 90 days)
- ✅ Use different credentials for development/production
- ✅ Enable MFA on your AWS account

### ❌ DON'T:
- ❌ Never commit `.env.local` to Git
- ❌ Never share credentials publicly
- ❌ Never hardcode credentials in source code
- ❌ Never use root account credentials
- ❌ Never reuse credentials across projects

---

## 🚨 If Credentials Are Compromised

If you accidentally expose your credentials:

1. **Immediately go to AWS IAM Console**
2. **Click on your user**
3. **Go to Security credentials tab**
4. **Find the compromised access key**
5. **Click "Make inactive" or "Delete"**
6. **Create a new access key**
7. **Update your .env.local file**
8. **Check AWS CloudTrail for any unauthorized activity**

---

## 🧪 Testing Your Configuration

After setting up, test each component:

### Test 1: Initialize Tables
```bash
npm run db:init
```

**Expected output:**
```
✅ Table algoritt-contact-submissions created successfully
✅ Table algoritt-newsletter-subscriptions created successfully
✅ Table algoritt-job-applications created successfully
```

### Test 2: Run Application
```bash
npm run dev
```

Open http://localhost:3000 and test:
- Submit a contact form
- Subscribe to newsletter
- Apply for a job

### Test 3: Verify Data in AWS Console
1. Go to AWS Console
2. Navigate to DynamoDB
3. Click "Tables"
4. Select each table
5. Click "Explore table items"
6. Verify data is there

---

## 📊 Environment Variables Summary

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `AWS_REGION` | ✅ Yes | AWS data center location | `ap-south-1` |
| `AWS_ACCESS_KEY_ID` | ✅ Yes | AWS user identifier | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | ✅ Yes | AWS user secret | `wJalrXUtnFEMI/K7MDENG...` |
| `DYNAMODB_*_TABLE` | ⚠️ Optional | Custom table names | `algoritt-contact-submissions` |
| `TEAMS_CHANNEL_WEBHOOK` | ⚠️ Optional | Teams notifications | `https://outlook.office.com/...` |
| `MONGODB_URI` | ⚠️ Optional | Only for migration | `mongodb+srv://...` |

---

## 💡 Tips

1. **Free Tier:** AWS offers a generous free tier for DynamoDB:
   - 25 GB of storage
   - 25 WCU (Write Capacity Units)
   - 25 RCU (Read Capacity Units)
   - Good for ~200M requests/month

2. **Cost Monitoring:** Set up billing alerts:
   - Go to AWS Billing Dashboard
   - Create a budget alert for $5
   - Get notified if costs exceed expectations

3. **Multiple Environments:** Use different prefixes for different environments:
   - Development: `dev-algoritt-contact-submissions`
   - Staging: `staging-algoritt-contact-submissions`
   - Production: `prod-algoritt-contact-submissions`

4. **Backup:** Enable Point-in-Time Recovery (PITR) for production tables:
   - Go to DynamoDB table
   - Click "Backups" tab
   - Enable "Point-in-time recovery"

---

## 🆘 Troubleshooting

### Error: "Invalid/Missing environment variable: AWS_REGION"

**Solution:** Check `.env.local` exists and has AWS_REGION set

### Error: "The security token included in the request is invalid"

**Solution:** Check your Access Key ID and Secret Access Key are correct

### Error: "User is not authorized to perform: dynamodb:CreateTable"

**Solution:** Attach DynamoDB permissions to your IAM user

### Error: "Cannot find module '@aws-sdk/client-dynamodb'"

**Solution:** Run `npm install`

### Tables not appearing in AWS Console

**Solution:** 
- Check you're viewing the correct region in AWS Console
- Look at the region dropdown in top-right corner

---

## 📞 Support Resources

- **AWS Documentation:** [https://docs.aws.amazon.com/dynamodb/](https://docs.aws.amazon.com/dynamodb/)
- **AWS Free Tier:** [https://aws.amazon.com/free/](https://aws.amazon.com/free/)
- **IAM Best Practices:** [https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

---

## ✨ Quick Start Checklist

- [ ] Create AWS account
- [ ] Create IAM user with DynamoDB permissions
- [ ] Create access keys
- [ ] Choose AWS region
- [ ] Copy `env.example` to `.env.local`
- [ ] Fill in AWS credentials
- [ ] (Optional) Set up Teams webhook
- [ ] Run `npm install`
- [ ] Run `npm run db:init`
- [ ] Test the application
- [ ] Verify data in AWS Console

Once all steps are complete, you're ready to deploy! 🚀

