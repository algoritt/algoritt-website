# AWS Amplify Deployment Guide

Complete guide to deploy your Algoritt website to AWS Amplify with DynamoDB.

---

## 🎯 Overview

AWS Amplify is the **recommended** deployment platform because:
- ✅ Native AWS integration (no need for access keys)
- ✅ Automatic deployments from Git
- ✅ Built-in CI/CD
- ✅ Free SSL certificates
- ✅ CDN included
- ✅ Easy environment variable management

---

## 📋 Prerequisites

- [x] AWS Account
- [x] DynamoDB tables created (`npm run db:init`)
- [x] Code pushed to GitHub/GitLab/Bitbucket
- [x] Data migrated (if applicable)

---

## 🚀 Step 1: Deploy to Amplify

### Option A: Via AWS Console (Easier)

1. **Go to AWS Amplify Console**
   - Navigate to: [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
   - Make sure you're in the **same region** as your DynamoDB tables

2. **Create New App**
   - Click **"New app"** → **"Host web app"**

3. **Connect Repository**
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize AWS Amplify
   - Select your repository
   - Select the branch (`main` or `aws`)

4. **Configure Build Settings**
   - App name: `algoritt-website`
   - Environment: `production`
   - Amplify will auto-detect Next.js settings
   - Build settings should look like this:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
         - .next/cache/**/*
   ```

5. **Click "Save and deploy"**

---

## ⚙️ Step 2: Configure Environment Variables

1. **In Amplify Console, go to your app**
2. **Click "Environment variables"** (left sidebar)
3. **Add these variables:**

### Required Variables

| Variable | Value | Example |
|----------|-------|---------|
| `AWS_REGION` | Your DynamoDB region | `us-east-1` |
| `DYNAMODB_CONTACT_SUBMISSIONS_TABLE` | Table name | `algoritt-contact-submissions` |
| `DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE` | Table name | `algoritt-newsletter-subscriptions` |
| `DYNAMODB_JOB_APPLICATIONS_TABLE` | Table name | `algoritt-job-applications` |

### Optional Variables

| Variable | Value | When to Use |
|----------|-------|-------------|
| `TEAMS_CHANNEL_WEBHOOK` | Your Teams webhook URL | If using Teams notifications |
| `NEXT_PUBLIC_SITE_URL` | `https://algoritt.com` | For SEO/sitemap |

### ❌ Do NOT Add These

- `AWS_ACCESS_KEY_ID` - Not needed (uses IAM role)
- `AWS_SECRET_ACCESS_KEY` - Not needed (uses IAM role)

4. **Click "Save"**

---

## 🔐 Step 3: Configure IAM Permissions

Amplify needs permission to access your DynamoDB tables.

### Option A: Via Console (Recommended)

1. **Go to Amplify Console → Your App**
2. **Click "App settings"** → **"General"**
3. **Under "App role"**, click **"Edit"**
4. **Create a new service role** or select existing one

5. **Add DynamoDB permissions to the role:**
   - Go to [IAM Console](https://console.aws.amazon.com/iam)
   - Click **"Roles"**
   - Find your Amplify role (e.g., `amplifyconsole-backend-role`)
   - Click **"Add permissions"** → **"Create inline policy"**
   - Choose **JSON** tab
   - Paste this policy:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
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
           "arn:aws:dynamodb:us-east-1:*:table/algoritt-*",
           "arn:aws:dynamodb:us-east-1:*:table/algoritt-*/index/*"
         ]
       }
     ]
   }
   ```

   **Note:** Replace `us-east-1` with your actual region!

6. **Name the policy:** `AlgorittDynamoDBAccess`
7. **Click "Create policy"**

---

## ✅ Step 4: Verify Deployment

1. **Wait for build to complete** (~5 minutes)
2. **Click on the generated URL** (e.g., `https://main.d1a2b3c4d5e6f7.amplifyapp.com`)
3. **Test all forms:**
   - Contact form
   - Newsletter subscription
   - Job application

4. **Check DynamoDB:**
   - Go to DynamoDB Console
   - Select your tables
   - Verify items are being created

---

## 🌐 Step 5: Add Custom Domain (Optional)

1. **In Amplify Console, click "Domain management"**
2. **Click "Add domain"**
3. **Enter your domain:** `algoritt.com`
4. **Amplify will:**
   - Configure SSL certificate
   - Set up DNS records
   - Enable CDN

5. **Update your DNS provider:**
   - Add the CNAME records Amplify provides
   - Wait for DNS propagation (can take up to 48 hours)

---

## 📊 Environment Comparison

### Local Development (.env.local)
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG...
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/...
```

### AWS Amplify (Production)
```env
AWS_REGION=us-east-1
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/...
```

**Key Difference:** No AWS credentials needed in Amplify!

---

## 🔧 Troubleshooting

### Build Fails: "Cannot find module '@aws-sdk/client-dynamodb'"

**Solution:** Ensure `package.json` includes the dependencies
```bash
npm install
git add package-lock.json
git commit -m "chore: update package-lock"
git push
```

### Runtime Error: "Missing environment variable: AWS_REGION"

**Solution:** Add `AWS_REGION` in Amplify environment variables

### Forms Submit But No Data in DynamoDB

**Solutions:**
1. Check IAM role has DynamoDB permissions
2. Verify table names match in environment variables
3. Check CloudWatch logs in Amplify Console

### Error: "User is not authorized to perform: dynamodb:PutItem"

**Solution:** Add DynamoDB permissions to Amplify IAM role (Step 3)

---

## 📈 Monitoring

### View Logs

1. **Amplify Console → Your App**
2. **Click "Monitoring"**
3. **View:**
   - Access logs
   - Function logs (for server actions)
   - Error rates

### CloudWatch Logs

- Go to [CloudWatch Console](https://console.aws.amazon.com/cloudwatch)
- Navigate to **Log groups**
- Find logs for your Amplify app

---

## 💰 Cost Estimate

### AWS Amplify
- **Build minutes:** 1,000 free/month, then $0.01/minute
- **Hosting:** $0.15/GB stored, $0.15/GB transferred
- **Typical cost:** $5-15/month for low-medium traffic

### DynamoDB
- **Storage:** $0.25/GB/month
- **Reads/Writes:** Based on provisioned capacity
- **With free tier:** $0-5/month
- **After free tier:** $3-10/month

### Total Estimated Cost
- **First year:** $5-20/month (with free tier)
- **After free tier:** $10-30/month

---

## 🔄 CI/CD Pipeline

Amplify automatically deploys on every push:

```bash
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin main

# Amplify automatically:
# 1. Detects push
# 2. Pulls code
# 3. Runs npm install
# 4. Runs npm run build
# 5. Deploys to production
# 6. Updates URL
```

---

## 🌍 Multi-Environment Setup

### Development Environment

1. Create a new branch: `develop`
2. In Amplify, connect the `develop` branch
3. Set environment variables with `dev-` prefix:
   ```env
   DYNAMODB_CONTACT_SUBMISSIONS_TABLE=dev-algoritt-contact-submissions
   ```

### Staging Environment

1. Create a new branch: `staging`
2. Connect in Amplify
3. Use `staging-` prefix for tables

### Production Environment

- Use `main` branch
- Production table names (no prefix)

---

## 🔒 Security Best Practices

### ✅ Do:
- ✅ Use IAM roles (not access keys)
- ✅ Set minimal permissions on IAM role
- ✅ Use different tables for dev/staging/prod
- ✅ Enable CloudWatch logging
- ✅ Use HTTPS (automatic with Amplify)
- ✅ Keep dependencies updated

### ❌ Don't:
- ❌ Don't add AWS access keys to environment variables
- ❌ Don't use overly permissive IAM policies
- ❌ Don't share environment variables
- ❌ Don't use production credentials in development

---

## 📚 Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Next.js on Amplify](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)
- [DynamoDB Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)

---

## ✨ Summary

### Local Development
- Uses `.env.local`
- Requires AWS access keys
- Direct connection to DynamoDB

### AWS Amplify Production
- Uses Amplify environment variables
- Uses IAM roles (no access keys needed)
- Automatic deployments
- Built-in CDN
- Free SSL

**Your app is now production-ready! 🚀**

