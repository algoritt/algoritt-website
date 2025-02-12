interface TeamsNotificationOptions {
  title: string
  formData: Record<string, any>
}

export async function sendTeamsNotification({ title, formData }: TeamsNotificationOptions) {
  const webhookUrl = process.env.TEAMS_CHANNEL_WEBHOOK

  if (!webhookUrl) {
    console.error('Teams webhook URL not configured')
    return
  }

  const now = new Date()
  const timestamp = now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  })
  
  const formattedData = Object.entries(formData)
    .map(([key, value]) => `**${key}**: ${value}`)
    .join('\n\n')

  const message = {
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.adaptive',
      content: {
        type: 'AdaptiveCard',
        body: [
          {
            type: 'TextBlock',
            size: 'Large',
            weight: 'Bolder',
            text: title,
            wrap: true
          },
          {
            type: 'TextBlock',
            text: `Submitted at: ${timestamp}`,
            wrap: true,
            isSubtle: true
          },
          {
            type: 'TextBlock',
            text: formattedData,
            wrap: true
          }
        ],
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        version: '1.2'
      }
    }]
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })

    if (!response.ok) {
      throw new Error(`Failed to send Teams notification: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error sending Teams notification:', error)
  }
} 