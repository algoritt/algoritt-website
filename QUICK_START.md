# 🚀 Quick Start Guide

Get your Algoritt website running with DynamoDB in minutes!

## ⚡ Prerequisites

- Node.js 18+ installed
- AWS Account
- Git

---

## 📝 Step-by-Step Setup

### 1️⃣ Get AWS Credentials

Follow the detailed guide: **[AWS_CREDENTIALS_SETUP.md](./AWS_CREDENTIALS_SETUP.md)**

**Quick summary:**
1. Sign up for AWS → [aws.amazon.com](https://aws.amazon.com)
2. Create IAM user with DynamoDB access
3. Generate access keys
4. Choose region (e.g., `ap-south-1` for India)

---

### 2️⃣ Configure Environment

```bash
# Copy the example file
cp env.example .env.local

# Edit with your credentials
nano .env.local
```

**Required values:**
```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Initialize Database

```bash
npm run db:init
```

**Expected output:**
```
✅ Table algoritt-contact-submissions created
✅ Table algoritt-newsletter-subscriptions created
✅ Table algoritt-job-applications created
```

---

### 5️⃣ (Optional) Migrate Existing Data

If you have data in MongoDB:

```bash
# Add MongoDB URI to .env.local
# Then run:
npm run db:migrate
```

---

### 6️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🧪 Test Everything

1. **Submit Contact Form** → Check DynamoDB table
2. **Subscribe to Newsletter** → Check DynamoDB table
3. **Apply for Job** → Check DynamoDB table

Verify in AWS Console:
- Go to [console.aws.amazon.com](https://console.aws.amazon.com)
- Navigate to DynamoDB
- View your tables
- Check items exist

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[AWS_CREDENTIALS_SETUP.md](./AWS_CREDENTIALS_SETUP.md)** | Detailed AWS setup walkthrough |
| **[DYNAMODB_SETUP.md](./DYNAMODB_SETUP.md)** | DynamoDB configuration guide |
| **[MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md)** | Step-by-step migration checklist |
| **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** | What was changed in migration |
| **[README.md](./README.md)** | Complete project documentation |

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:init      # Create DynamoDB tables
npm run db:migrate   # Migrate from MongoDB

# Quality
npm run lint         # Run linter
```

---

## 💰 AWS Costs

**Free Tier (First 12 months):**
- 25 GB storage
- 25 WCU + 25 RCU
- ~200M requests/month
- **$0/month** for typical usage

**After Free Tier:**
- Current setup: **$3-5/month**
- Optimized: **$1/month**

---

## ❓ Need Help?

### Getting AWS credentials?
→ See **[AWS_CREDENTIALS_SETUP.md](./AWS_CREDENTIALS_SETUP.md)**

### Migration not working?
→ See **[MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md)**

### General questions?
→ See **[README.md](./README.md)**

---

## ⚠️ Important Files

### ✅ Safe to commit:
- `src/**/*.ts`
- `src/**/*.tsx`
- `package.json`
- `README.md`

### ⛔ Never commit:
- `.env.local` (contains secrets)
- `.env`
- `node_modules/`

---

## 🎯 What's Next?

After successful setup:

1. **Test all forms** thoroughly
2. **Set up CloudWatch alarms** for monitoring
3. **Enable backups** for production tables
4. **Set billing alerts** in AWS
5. **Deploy to production** (Vercel/AWS/etc.)

---

## 🔒 Security Reminder

- ✅ Use IAM users, not root account
- ✅ Keep `.env.local` secure
- ✅ Never commit credentials
- ✅ Rotate keys every 90 days
- ✅ Enable MFA on AWS account

---

## 📊 Project Structure

```
algoritt-website/
├── app/                    # Next.js pages
├── src/
│   ├── actions/           # Server actions (forms)
│   ├── components/        # React components
│   ├── lib/              
│   │   ├── dynamodb.ts           # DynamoDB client
│   │   └── dynamodb-models.ts    # Database models
│   └── constants/         # Static data
├── scripts/
│   ├── init-dynamodb.js          # DB initialization
│   └── migrate-mongo-to-dynamodb.js  # Migration
├── .env.local            # Your secrets (DO NOT COMMIT)
└── env.example           # Template for .env.local
```

---

## ✨ Features

- ✅ Contact form with DynamoDB storage
- ✅ Newsletter subscription
- ✅ Job application system
- ✅ Teams notifications
- ✅ Responsive design
- ✅ SEO optimized
- ✅ TypeScript
- ✅ Dark theme

---

## 🎉 You're All Set!

Your Algoritt website is now running on AWS DynamoDB.

**Happy coding! 🚀**

