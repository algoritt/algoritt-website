import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { 
  DynamoDBDocumentClient, 
  PutCommand, 
  GetCommand, 
  QueryCommand, 
  ScanCommand,
  UpdateCommand
} from '@aws-sdk/lib-dynamodb'

// Use DYNAMODB_REGION to avoid AWS_ prefix conflicts
const region = process.env.DYNAMODB_REGION || process.env.AWS_REGION

if (!region) {
  throw new Error('Invalid/Missing environment variable: "DYNAMODB_REGION" or "AWS_REGION"')
}

// Create DynamoDB client configuration
const clientConfig: DynamoDBClientConfig = {
  region: region,
}

// Only use explicit credentials in local development
// In AWS Amplify/Lambda, IAM roles provide credentials automatically
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
  clientConfig.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
}

// Create DynamoDB client
const client = new DynamoDBClient(clientConfig)

// Create DynamoDB Document client for simplified operations
const dynamoDb = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false,
  },
  unmarshallOptions: {
    wrapNumbers: false,
  },
})

export { dynamoDb }

// Table names
export const TABLES = {
  CONTACT_SUBMISSIONS: process.env.DYNAMODB_CONTACT_SUBMISSIONS_TABLE || 'algoritt-contact-submissions',
  NEWSLETTER_SUBSCRIPTIONS: process.env.DYNAMODB_NEWSLETTER_SUBSCRIPTIONS_TABLE || 'algoritt-newsletter-subscriptions',
  JOB_APPLICATIONS: process.env.DYNAMODB_JOB_APPLICATIONS_TABLE || 'algoritt-job-applications',
} as const

// Helper functions
export async function putItem<T extends Record<string, unknown>>(tableName: string, item: T) {
  const command = new PutCommand({
    TableName: tableName,
    Item: item as Record<string, unknown>,
  })
  return await dynamoDb.send(command)
}

export async function getItem<T extends Record<string, unknown>>(tableName: string, key: T) {
  const command = new GetCommand({
    TableName: tableName,
    Key: key as Record<string, unknown>,
  })
  const response = await dynamoDb.send(command)
  return response.Item
}

export async function queryItems(
  tableName: string,
  keyConditionExpression: string,
  expressionAttributeValues: Record<string, unknown>,
  expressionAttributeNames?: Record<string, string>
) {
  const command = new QueryCommand({
    TableName: tableName,
    KeyConditionExpression: keyConditionExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ...(expressionAttributeNames && { ExpressionAttributeNames: expressionAttributeNames }),
  })
  const response = await dynamoDb.send(command)
  return response.Items || []
}

export async function scanItems(tableName: string, limit?: number) {
  const command = new ScanCommand({
    TableName: tableName,
    ...(limit && { Limit: limit }),
  })
  const response = await dynamoDb.send(command)
  return response.Items || []
}

export async function updateItem<T extends Record<string, unknown>, V extends Record<string, unknown>>(
  tableName: string,
  key: T,
  updateExpression: string,
  expressionAttributeValues: V,
  expressionAttributeNames?: Record<string, string>
) {
  const command = new UpdateCommand({
    TableName: tableName,
    Key: key as Record<string, unknown>,
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues as Record<string, unknown>,
    ...(expressionAttributeNames && { ExpressionAttributeNames: expressionAttributeNames }),
    ReturnValues: 'ALL_NEW',
  })
  const response = await dynamoDb.send(command)
  return response.Attributes
}

