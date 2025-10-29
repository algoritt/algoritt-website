# Algoritt Website

Professional consulting website built with Next.js 15, React 19, and AWS DynamoDB.

## Overview

Algoritt is a consulting company specializing in:
- Risk Management
- Compliance & Governance
- Data Analytics & AI
- Sustainability & ESG

This website serves as the company's primary digital presence, featuring service information, career opportunities, and lead generation forms.

## Tech Stack

- **Framework:** Next.js 15.1.2 (App Router)
- **UI Library:** React 19.1.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** AWS DynamoDB
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Prerequisites

- Node.js 18+ or 20+
- pnpm (package manager)
- AWS Account with DynamoDB access
- AWS IAM credentials

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd algoritt-website
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# AWS Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key

# DynamoDB Tables (optional - defaults provided)
DYNAMODB_CONTACT_SUBMISSIONS_TABLE=algoritt-contact-submissions
DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE=algoritt-newsletter-subscriptions
DYNAMODB_JOB_APPLICATIONS_TABLE=algoritt-job-applications

# Teams Webhook (optional)
TEAMS_CHANNEL_WEBHOOK=your_teams_webhook_url
```

### 4. Initialize Database

```bash
pnpm run db:init
```

This creates the required DynamoDB tables with proper indexes.

### 5. Run Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run db:init` - Initialize DynamoDB tables
- `pnpm run db:migrate` - Migrate data from MongoDB to DynamoDB

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── careers/             # Career listings
│   ├── contact/             # Contact form
│   ├── services/            # Service pages
│   └── layout.tsx           # Root layout
├── src/
│   ├── actions/             # Server actions
│   │   └── forms.ts         # Form submission handlers
│   ├── components/
│   │   ├── shared/          # Shared components
│   │   └── ui/              # UI components
│   ├── constants/           # Static data
│   │   ├── about.ts
│   │   ├── careers.ts
│   │   └── services.ts
│   ├── lib/
│   │   ├── dynamodb.ts      # DynamoDB client
│   │   ├── dynamodb-models.ts # Database models
│   │   └── notifications.ts  # Teams notifications
│   ├── types/               # TypeScript types
│   └── utils/               # Utility functions
├── public/
│   └── assets/              # Images, videos, icons
└── scripts/
    ├── init-dynamodb.js     # Database initialization
    └── migrate-mongo-to-dynamodb.js # Migration script
```

## Features

### Pages

- **Homepage** - Hero, services overview, testimonials, stats
- **About** - Company mission, values, and approach
- **Services** - Detailed service descriptions with sub-services
- **Careers** - Job listings with application forms
- **Contact** - Contact form and company information

### Forms

All forms are integrated with DynamoDB:

1. **Contact Form** - Lead generation
2. **Newsletter Subscription** - Email collection
3. **Job Applications** - Career applications with resume upload

Forms automatically send notifications to Microsoft Teams (when configured).

### Dynamic Content

- Service pages generated from `src/constants/services.ts`
- Career pages generated from `src/constants/careers.ts`
- Sitemap automatically generated from available pages

## Database Migration

If migrating from MongoDB to DynamoDB, see [DYNAMODB_SETUP.md](./DYNAMODB_SETUP.md) for detailed instructions.

Quick migration:

```bash
# Ensure MongoDB URI is in .env.local
pnpm run db:init    # Create DynamoDB tables
pnpm run db:migrate # Migrate data
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:

- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DYNAMODB_CONTACT_SUBMISSIONS_TABLE`
- `DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE`
- `DYNAMODB_JOB_APPLICATIONS_TABLE`
- `TEAMS_CHANNEL_WEBHOOK`

## Configuration

### Tailwind Theme

Colors and typography are defined in `tailwind.config.ts` and `app/globals.css`.

Primary colors:
- Purple: `hsl(265 89% 56%)`
- Background: Dark theme
- Accent: Red for CTAs

### Content Updates

To update content:

1. **Services:** Edit `src/constants/services.ts`
2. **Careers:** Edit `src/constants/careers.ts`
3. **About:** Edit `src/constants/about.ts`

## Development Guidelines

### Commit Convention

Follow semantic commit format:

```
<type>(<scope>): <description>

Example: feat(careers): add new job posting
```

Types: `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `chore`

### Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Use Work Sans font family
- Escape special characters in commit messages

## Performance

- Images optimized with Next.js Image component
- Code splitting with dynamic imports
- Video lazy loading
- Responsive design (mobile-first)

## Security

- Server-side form validation
- AWS IAM for database access
- Environment variables for sensitive data
- HTTPS only in production

## Monitoring

Monitor DynamoDB usage in AWS Console:
- Check read/write capacity utilization
- Review CloudWatch metrics
- Set up billing alerts

## Support

For issues or questions:
1. Check documentation
2. Review CloudWatch logs
3. Check DynamoDB console
4. Review application logs

## License

Private - All rights reserved
