import { v4 as uuidv4 } from 'uuid'
import { dynamoDb, TABLES, putItem, queryItems, scanItems } from './dynamodb'
import { GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb'

// DynamoDB document interfaces
export interface ContactSubmissionDocument {
  id: string
  full_name: string
  email: string
  subject: string
  message: string
  createdAt: string
  timestamp: number // For sorting
}

export interface NewsletterSubscriptionDocument {
  id: string
  email: string
  status: 'active' | 'unsubscribed'
  createdAt: string
  timestamp: number
}

export interface JobApplicationDocument {
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
  timestamp: number
}

// Model classes for database operations
export class ContactSubmissionModel {
  static async create(data: Omit<ContactSubmissionDocument, 'id' | 'createdAt' | 'timestamp'>): Promise<ContactSubmissionDocument> {
    const now = new Date()
    const document: ContactSubmissionDocument = {
      id: uuidv4(),
      ...data,
      createdAt: now.toISOString(),
      timestamp: now.getTime(),
    }
    
    await putItem(TABLES.CONTACT_SUBMISSIONS, document)
    return document
  }

  static async findAll(): Promise<ContactSubmissionDocument[]> {
    const items = await scanItems(TABLES.CONTACT_SUBMISSIONS)
    return items as ContactSubmissionDocument[]
  }

  static async findById(id: string): Promise<ContactSubmissionDocument | null> {
    const command = new GetCommand({
      TableName: TABLES.CONTACT_SUBMISSIONS,
      Key: { id },
    })
    const response = await dynamoDb.send(command)
    return (response.Item as ContactSubmissionDocument) || null
  }

  static async findByEmail(email: string): Promise<ContactSubmissionDocument[]> {
    const command = new QueryCommand({
      TableName: TABLES.CONTACT_SUBMISSIONS,
      IndexName: 'EmailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    })
    const response = await dynamoDb.send(command)
    return (response.Items as ContactSubmissionDocument[]) || []
  }
}

export class NewsletterSubscriptionModel {
  static async create(email: string): Promise<NewsletterSubscriptionDocument> {
    // Check if email already exists using GSI
    const existing = await this.findByEmail(email)
    if (existing) {
      throw new Error('Email already subscribed')
    }

    const now = new Date()
    const document: NewsletterSubscriptionDocument = {
      id: uuidv4(),
      email,
      status: 'active',
      createdAt: now.toISOString(),
      timestamp: now.getTime(),
    }
    
    await putItem(TABLES.NEWSLETTER_SUBSCRIPTIONS, document)
    return document
  }

  static async findByEmail(email: string): Promise<NewsletterSubscriptionDocument | null> {
    const command = new QueryCommand({
      TableName: TABLES.NEWSLETTER_SUBSCRIPTIONS,
      IndexName: 'EmailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    })
    const response = await dynamoDb.send(command)
    const items = response.Items as NewsletterSubscriptionDocument[]
    return items && items.length > 0 ? items[0] : null
  }

  static async findAll(): Promise<NewsletterSubscriptionDocument[]> {
    const items = await scanItems(TABLES.NEWSLETTER_SUBSCRIPTIONS)
    return items as NewsletterSubscriptionDocument[]
  }

  static async findById(id: string): Promise<NewsletterSubscriptionDocument | null> {
    const command = new GetCommand({
      TableName: TABLES.NEWSLETTER_SUBSCRIPTIONS,
      Key: { id },
    })
    const response = await dynamoDb.send(command)
    return (response.Item as NewsletterSubscriptionDocument) || null
  }
}

export class JobApplicationModel {
  static async create(data: Omit<JobApplicationDocument, 'id' | 'created_at' | 'status' | 'timestamp'>): Promise<JobApplicationDocument> {
    const now = new Date()
    const document: JobApplicationDocument = {
      id: uuidv4(),
      ...data,
      status: 'pending',
      created_at: now.toISOString(),
      timestamp: now.getTime(),
    }
    
    await putItem(TABLES.JOB_APPLICATIONS, document)
    return document
  }

  static async findAll(): Promise<JobApplicationDocument[]> {
    const items = await scanItems(TABLES.JOB_APPLICATIONS)
    return items as JobApplicationDocument[]
  }

  static async findByPositionId(positionId: string): Promise<JobApplicationDocument[]> {
    const command = new QueryCommand({
      TableName: TABLES.JOB_APPLICATIONS,
      IndexName: 'PositionIndex',
      KeyConditionExpression: 'position_id = :position_id',
      ExpressionAttributeValues: {
        ':position_id': positionId,
      },
    })
    const response = await dynamoDb.send(command)
    return (response.Items as JobApplicationDocument[]) || []
  }

  static async findById(id: string): Promise<JobApplicationDocument | null> {
    const command = new GetCommand({
      TableName: TABLES.JOB_APPLICATIONS,
      Key: { id },
    })
    const response = await dynamoDb.send(command)
    return (response.Item as JobApplicationDocument) || null
  }

  static async findByEmail(email: string): Promise<JobApplicationDocument[]> {
    const command = new QueryCommand({
      TableName: TABLES.JOB_APPLICATIONS,
      IndexName: 'EmailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    })
    const response = await dynamoDb.send(command)
    return (response.Items as JobApplicationDocument[]) || []
  }
}

