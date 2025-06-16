import { ObjectId } from 'mongodb'
import { getCollection } from './mongodb'

// MongoDB document interfaces
export interface ContactSubmissionDocument {
  _id?: ObjectId
  full_name: string
  email: string
  subject: string
  message: string
  createdAt: Date
}

export interface NewsletterSubscriptionDocument {
  _id?: ObjectId
  email: string
  status: 'active' | 'unsubscribed'
  createdAt: Date
}

export interface JobApplicationDocument {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  resume_url: string
  cover_letter: string
  portfolio?: string
  position_id: string
  position_title: string
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected'
  created_at: Date
}

// Serializable response interfaces
export interface SerializableContactSubmission {
  id: string
  full_name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

export interface SerializableNewsletterSubscription {
  id: string
  email: string
  status: 'active' | 'unsubscribed'
  createdAt: string
}

export interface SerializableJobApplication {
  id: string
  name: string
  email: string
  phone: string
  resume_url: string
  cover_letter: string
  portfolio?: string
  position_id: string
  position_title: string
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected'
  created_at: string
}

// Collection names
export const COLLECTIONS = {
  CONTACT_SUBMISSIONS: 'contact_submissions',
  NEWSLETTER_SUBSCRIPTIONS: 'newsletter_subscriptions',
  JOB_APPLICATIONS: 'job_applications'
} as const

// Helper function to convert MongoDB document to serializable object
function toSerializable<T extends { _id?: ObjectId; createdAt?: Date; created_at?: Date }>(
  doc: T
): Omit<T, '_id' | 'createdAt' | 'created_at'> & { 
  id: string
  createdAt?: string
  created_at?: string
} {
  const { _id, createdAt, created_at, ...rest } = doc
  return {
    ...rest,
    id: _id?.toString() || '',
    ...(createdAt && { createdAt: createdAt.toISOString() }),
    ...(created_at && { created_at: created_at.toISOString() })
  }
}

// Model classes for database operations
export class ContactSubmissionModel {
  static async create(data: Omit<ContactSubmissionDocument, '_id' | 'createdAt'>): Promise<SerializableContactSubmission> {
    const collection = await getCollection(COLLECTIONS.CONTACT_SUBMISSIONS)
    const document: ContactSubmissionDocument = {
      ...data,
      createdAt: new Date()
    }
    const result = await collection.insertOne(document)
    const savedDoc = { ...document, _id: result.insertedId }
    return toSerializable(savedDoc) as SerializableContactSubmission
  }

  static async findAll(): Promise<SerializableContactSubmission[]> {
    const collection = await getCollection(COLLECTIONS.CONTACT_SUBMISSIONS)
    const docs = await collection.find({}).toArray()
    return docs.map(doc => toSerializable(doc) as SerializableContactSubmission)
  }
}

export class NewsletterSubscriptionModel {
  static async create(email: string): Promise<SerializableNewsletterSubscription> {
    const collection = await getCollection(COLLECTIONS.NEWSLETTER_SUBSCRIPTIONS)
    
    // Check if email already exists
    const existing = await collection.findOne({ email })
    if (existing) {
      throw new Error('Email already subscribed')
    }

    const document: NewsletterSubscriptionDocument = {
      email,
      status: 'active',
      createdAt: new Date()
    }
    const result = await collection.insertOne(document)
    const savedDoc = { ...document, _id: result.insertedId }
    return toSerializable(savedDoc) as SerializableNewsletterSubscription
  }

  static async findByEmail(email: string): Promise<SerializableNewsletterSubscription | null> {
    const collection = await getCollection(COLLECTIONS.NEWSLETTER_SUBSCRIPTIONS)
    const doc = await collection.findOne({ email })
    return doc ? toSerializable(doc) as SerializableNewsletterSubscription : null
  }

  static async findAll(): Promise<SerializableNewsletterSubscription[]> {
    const collection = await getCollection(COLLECTIONS.NEWSLETTER_SUBSCRIPTIONS)
    const docs = await collection.find({}).toArray()
    return docs.map(doc => toSerializable(doc) as SerializableNewsletterSubscription)
  }
}

export class JobApplicationModel {
  static async create(data: Omit<JobApplicationDocument, '_id' | 'created_at' | 'status'>): Promise<SerializableJobApplication> {
    const collection = await getCollection(COLLECTIONS.JOB_APPLICATIONS)
    const document: JobApplicationDocument = {
      ...data,
      status: 'pending',
      created_at: new Date()
    }
    const result = await collection.insertOne(document)
    const savedDoc = { ...document, _id: result.insertedId }
    return toSerializable(savedDoc) as SerializableJobApplication
  }

  static async findAll(): Promise<SerializableJobApplication[]> {
    const collection = await getCollection(COLLECTIONS.JOB_APPLICATIONS)
    const docs = await collection.find({}).toArray()
    return docs.map(doc => toSerializable(doc) as SerializableJobApplication)
  }

  static async findByPositionId(positionId: string): Promise<SerializableJobApplication[]> {
    const collection = await getCollection(COLLECTIONS.JOB_APPLICATIONS)
    const docs = await collection.find({ position_id: positionId }).toArray()
    return docs.map(doc => toSerializable(doc) as SerializableJobApplication)
  }
} 