export interface Contact {
  id: string
  userId: string
  name: string
  email?: string
  phone?: string
  company?: string
  position?: string
  linkedinUrl?: string
  birthday?: string
  location?: string
  timezone?: string
  tags: string[]
  notes?: string
  profileData?: any
  createdAt: string
  updatedAt: string
}

export interface Holiday {
  id: string
  name: string
  date: string
  country?: string
  region?: string
  type: 'national' | 'religious' | 'cultural' | 'birthday'
  description?: string
  isActive: boolean
  createdAt: string
}

export interface Reminder {
  id: string
  userId: string
  contactId?: string
  holidayId?: string
  title: string
  message?: string
  sendDate: string
  status: 'pending' | 'sent' | 'failed' | 'cancelled'
  channel: 'email' | 'linkedin' | 'sms'
  automationTool?: 'gmail' | 'outlook' | 'lemlist' | 'outreach'
  campaignId?: string
  createdAt: string
  sentAt?: string
}

export interface Template {
  id: string
  userId: string
  name: string
  subject?: string
  content: string
  type: 'holiday' | 'birthday' | 'custom'
  category?: string
  variables: string[]
  isPublic: boolean
  usageCount: number
  createdAt: string
}

export interface Integration {
  id: string
  userId: string
  service: 'gmail' | 'outlook' | 'linkedin' | 'lemlist' | 'outreach' | 'sheets'
  status: 'connected' | 'disconnected' | 'error'
  config: any
  lastSync?: string
  createdAt: string
  updatedAt: string
}

export interface Campaign {
  id: string
  userId: string
  name: string
  description?: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  templateId?: string
  targetContacts: string[]
  scheduleType: 'immediate' | 'scheduled' | 'recurring'
  scheduleDate?: string
  sentCount: number
  openedCount: number
  repliedCount: number
  createdAt: string
}

export interface Message {
  id: string
  userId: string
  contactId?: string
  campaignId?: string
  reminderId?: string
  subject?: string
  content: string
  direction: 'outbound' | 'inbound'
  channel: 'email' | 'linkedin' | 'sms'
  status: 'sent' | 'delivered' | 'opened' | 'replied' | 'bounced'
  threadId?: string
  replyToId?: string
  sentimentScore?: number
  sentimentLabel?: 'positive' | 'negative' | 'neutral'
  metadata?: any
  sentAt: string
  openedAt?: string
  repliedAt?: string
}

export interface UserSettings {
  id: string
  userId: string
  timezone: string
  defaultSendTime: string
  notificationPreferences: any
  aiPreferences: any
  subscriptionPlan: 'free' | 'starter' | 'pro'
  subscriptionStatus: 'active' | 'cancelled' | 'past_due'
  trialEndsAt?: string
  createdAt: string
  updatedAt: string
}