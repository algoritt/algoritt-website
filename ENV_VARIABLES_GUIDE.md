# Environment Variables Quick Reference

## 📋 Complete .env.local Template

Copy and paste this into your `.env.local` file:

```env
# =============================================================================
# REQUIRED - AWS Configuration
# =============================================================================
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_HERE
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY_HERE

# =============================================================================
# OPTIONAL - DynamoDB Table Names (defaults work fine)
# =============================================================================
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications

# =============================================================================
# OPTIONAL - Teams Notifications
# =============================================================================
TEAMS_CHANNEL_WEBHOOK=

# =============================================================================
# OPTIONAL - Only for Migration from MongoDB
# =============================================================================
# MONGODB_URI=
```

---

## 🔍 Variable Breakdown

### 1. AWS_REGION

**What it is:** The geographic location where your data will be stored.

**Where to get it:** Choose based on your location

**Common values:**
| If you're in... | Use this region |
|----------------|-----------------|
| 🇮🇳 India | `ap-south-1` (Mumbai) |
| 🇺🇸 USA East Coast | `us-east-1` (N. Virginia) |
| 🇺🇸 USA West Coast | `us-west-2` (Oregon) |
| 🇪🇺 Europe | `eu-west-1` (Ireland) |
| 🇸🇬 Singapore | `ap-southeast-1` |

**Example:**
```env
AWS_REGION=ap-south-1
```

**Tips:**
- ✅ Choose closest to your users for best performance
- ✅ Consider data residency laws
- ✅ Algoritt (Gurugram) → Use `ap-south-1`

---

### 2. AWS_ACCESS_KEY_ID

**What it is:** Your AWS user identifier (like a username).

**Where to get it:** 
1. AWS Console → IAM → Users → Your User
2. Security credentials tab
3. Create access key
4. Copy the Access Key ID

**Format:** 
- 20 alphanumeric characters
- Always starts with `AKIA`
- Example: `AKIAIOSFODNN7EXAMPLE`

**Example:**
```env
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
```

**⚠️ Important:**
- Don't add quotes around it
- Don't add spaces
- This is public-ish (like a username), but still keep it secure

---

### 3. AWS_SECRET_ACCESS_KEY

**What it is:** Your AWS user password.

**Where to get it:** 
1. Same place as Access Key ID
2. Shown ONLY ONCE when you create the key
3. Download the CSV file to save it

**Format:** 
- 40 alphanumeric characters
- Example: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`

**Example:**
```env
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

**🚨 Critical:**
- This is shown ONLY ONCE
- Download the CSV when creating
- Never share or commit this
- Treat like a password

---

### 4. DYNAMODB_*_TABLE (Optional)

**What they are:** Custom names for your database tables.

**Where to get them:** You choose these names yourself!

**Default values (if not set):**
```env
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
```

**When to customize:**
- Multiple environments (dev/staging/prod)
- Company naming conventions
- Avoid name conflicts

**Examples:**
```env
# Production
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=prod-algoritt-contact-submissions

# Development
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=dev-algoritt-contact-submissions

# Your company name
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=mycompany-contact-submissions
```

**Tips:**
- ✅ Use defaults for simplicity
- ✅ Add prefix for environments (dev/prod)
- ❌ Don't use spaces or special characters

---

### 5. TEAMS_CHANNEL_WEBHOOK (Optional)

**What it is:** URL to send notifications to Microsoft Teams.

**Where to get it:**
1. Open Microsoft Teams
2. Go to your channel
3. Click ⋯ (three dots) → Connectors
4. Add "Incoming Webhook"
5. Name it and copy the URL

**Format:**
- Starts with `https://outlook.office.com/webhook/`
- Very long URL

**Example:**
```env
TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/a1b2c3d4@e5f6g7h8/IncomingWebhook/i9j0k1l2/m3n4o5p6
```

**What happens:**
- ✅ Set → Get Teams notification on every form submission
- ⛔ Empty → No notifications (forms still work)

**Tips:**
- Leave empty if you don't use Teams
- Test with a dummy submission
- Can set up multiple webhooks for different channels

---

### 6. MONGODB_URI (Optional - Migration Only)

**What it is:** Connection string for your old MongoDB database.

**Where to get it:**
- MongoDB Atlas → Database → Connect → Copy connection string
- Self-hosted → Your MongoDB server URL

**Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/database
```

**Example:**
```env
MONGODB_URI=mongodb+srv://admin:mypassword@cluster0.abc123.mongodb.net/algoritt
```

**When to use:**
- ✅ Only if migrating from MongoDB
- ✅ Remove after migration is complete

**Tips:**
- Comment out after migration
- Or remove entirely once done

---

## 🎯 Example Configurations

### Minimal Setup (Required Only)
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### Recommended Setup
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/your-url
```

### Development Environment
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=dev-algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=dev-algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=dev-algoritt-job-applications
```

### Production Environment
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=prod-algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=prod-algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=prod-algoritt-job-applications
TEAMS_CHANNEL_WEBHOOK=https://outlook.office.com/webhook/prod-channel
```

### Migration Setup (MongoDB → DynamoDB)
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/algoritt
```

---

## ✅ Validation Checklist

Before running the app, verify:

- [ ] `.env.local` file exists in root directory
- [ ] `AWS_REGION` is set (e.g., `ap-south-1`)
- [ ] `AWS_ACCESS_KEY_ID` is ~20 characters, starts with `AKIA`
- [ ] `AWS_SECRET_ACCESS_KEY` is ~40 characters
- [ ] No quotes around values (`AWS_REGION=us-east-1` not `AWS_REGION="us-east-1"`)
- [ ] No spaces around `=` sign (`AWS_REGION=us-east-1` not `AWS_REGION = us-east-1`)
- [ ] No commented values for required variables
- [ ] File is named `.env.local` not `.env` or `env.local`

---

## 🐛 Common Mistakes

### ❌ Wrong: Quotes around values
```env
AWS_REGION="ap-south-1"  # DON'T DO THIS
```

### ✅ Correct: No quotes
```env
AWS_REGION=ap-south-1
```

---

### ❌ Wrong: Spaces around equals
```env
AWS_REGION = ap-south-1  # DON'T DO THIS
```

### ✅ Correct: No spaces
```env
AWS_REGION=ap-south-1
```

---

### ❌ Wrong: Missing variables
```env
# AWS_ACCESS_KEY_ID=  # DON'T LEAVE EMPTY
```

### ✅ Correct: Filled in
```env
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
```

---

### ❌ Wrong: Committed to Git
```bash
git add .env.local  # DON'T DO THIS!
```

### ✅ Correct: Never commit
`.env.local` is already in `.gitignore`

---

## 🔒 Security Best Practices

### DO ✅
- ✅ Use `.env.local` (automatically gitignored)
- ✅ Keep credentials in password manager
- ✅ Use different credentials for dev/prod
- ✅ Rotate keys every 90 days
- ✅ Use IAM users (not root)

### DON'T ❌
- ❌ Commit `.env.local` to Git
- ❌ Share credentials via email/Slack
- ❌ Hardcode credentials in source code
- ❌ Use root AWS account credentials
- ❌ Reuse same credentials everywhere

---

## 🧪 Testing Your Configuration

### 1. Check file exists
```bash
ls -la .env.local
```

Should show: `-rw-r--r-- ... .env.local`

### 2. View file (be careful not to screenshot/share)
```bash
cat .env.local
```

### 3. Test connection
```bash
npm run db:init
```

Should see:
```
✅ Table algoritt-contact-submissions created successfully
```

### 4. Start app
```bash
npm run dev
```

No errors = configuration is correct! 🎉

---

## 📞 Need Help?

### Can't find AWS credentials?
→ See **[AWS_CREDENTIALS_SETUP.md](./AWS_CREDENTIALS_SETUP.md)** (detailed walkthrough)

### Getting errors?
→ Check [Troubleshooting section](#-common-mistakes) above

### Ready to deploy?
→ See **[README.md](./README.md)** for deployment guide

---

## 🎓 Pro Tips

1. **Use AWS CLI for testing:**
   ```bash
   aws dynamodb list-tables --region ap-south-1
   ```

2. **Verify credentials are valid:**
   ```bash
   aws sts get-caller-identity
   ```

3. **Export for terminal use:**
   ```bash
   export $(cat .env.local | xargs)
   ```

4. **Create separate files for each environment:**
   - `.env.local` - Development
   - `.env.production` - Production
   - `.env.staging` - Staging

---

## 📝 Quick Copy-Paste Template

```env
# Copy this entire block to your .env.local file

# AWS Configuration (REQUIRED)
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Table Names (OPTIONAL - defaults work)
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications

# Teams Webhook (OPTIONAL)
TEAMS_CHANNEL_WEBHOOK=

# MongoDB (OPTIONAL - only for migration)
# MONGODB_URI=
```

Fill in the empty values and you're ready to go! 🚀

