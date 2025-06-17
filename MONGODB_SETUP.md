# MongoDB Setup Guide

This project has been migrated from Supabase to MongoDB. This document explains the setup and usage.

## Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
MONGODB_URI=your_mongodb_connection_string_here
```

The MongoDB URI should include:
- Username and password
- Cluster/host information
- Database name
- Any additional connection options

Example format:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

## Database Collections

The application uses the following MongoDB collections:

### 1. `contact_submissions`
Stores contact form submissions with the following fields:
- `_id`: MongoDB ObjectId (auto-generated)
- `full_name`: String
- `email`: String
- `subject`: String
- `message`: String
- `createdAt`: Date

### 2. `newsletter_subscriptions`
Stores newsletter subscriptions with the following fields:
- `_id`: MongoDB ObjectId (auto-generated)
- `email`: String (unique index)
- `status`: String ("active" | "unsubscribed")
- `createdAt`: Date

### 3. `job_applications`
Stores job applications with the following fields:
- `_id`: MongoDB ObjectId (auto-generated)
- `name`: String
- `email`: String
- `phone`: String
- `resume_url`: String
- `cover_letter`: String
- `portfolio`: String (optional)
- `position_id`: String
- `position_title`: String
- `status`: String ("pending" | "reviewed" | "contacted" | "rejected")
- `created_at`: Date

## Database Initialization

To initialize the database with proper indexes, run:

```bash
npm run db:init
```

This script will:
1. Connect to your MongoDB database
2. Create necessary indexes for optimal performance
3. Set up unique constraints (e.g., unique email for newsletter subscriptions)

## Database Indexes

The following indexes are automatically created:

### Contact Submissions
- `email` (ascending)
- `createdAt` (descending)
- `subject` (ascending)

### Newsletter Subscriptions
- `email` (ascending, unique)
- `createdAt` (descending)
- `status` (ascending)

### Job Applications
- `email` (ascending)
- `position_id` (ascending)
- `status` (ascending)
- `created_at` (descending)
- `position_id + status` (compound index)

## Development

For development, make sure to:

1. Set up your MongoDB cluster (MongoDB Atlas recommended)
2. Add the `MONGODB_URI` to your `.env.local` file
3. Run `npm run db:init` to set up indexes
4. Start the development server with `npm run dev`

## Production

For production deployment:

1. Ensure your MongoDB cluster is properly configured for production
2. Set the `MONGODB_URI` environment variable in your hosting platform
3. Run `npm run db:init` on the server to create database indexes before starting the application

## Migration Notes

This project was migrated from Supabase to MongoDB. The following changes were made:

1. **Database Client**: Replaced `@supabase/supabase-js` with `mongodb`
2. **Data Structure**: MongoDB uses `_id` (ObjectId) instead of `id` (UUID)
3. **Error Handling**: Updated error handling for MongoDB-specific errors
4. **Indexes**: Created appropriate indexes for performance optimization
5. **Types**: Updated TypeScript types to be compatible with MongoDB

## Troubleshooting

### Connection Issues
- Verify your `MONGODB_URI` is correct
- Check network access and IP whitelist in MongoDB Atlas
- Ensure your MongoDB cluster is running

### Duplicate Email Error
Newsletter subscriptions have a unique email constraint. If you see duplicate email errors, it means the email is already subscribed.

### Performance Issues
Run `npm run db:init` to ensure all indexes are properly created. 