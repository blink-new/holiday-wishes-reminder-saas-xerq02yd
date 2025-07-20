import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import {
  Mail,
  Linkedin,
  FileSpreadsheet,
  Send,
  Target,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Clock,
  Users,
  BarChart3,
  RefreshCw,
  ExternalLink,
  Plus,
  Trash2
} from 'lucide-react'

export function Integrations() {
  const [integrations] = useState([
    {
      id: 'gmail',
      name: 'Gmail',
      description: 'Send emails directly through your Gmail account',
      icon: Mail,
      category: 'Email Clients',
      status: 'connected',
      lastSync: '2024-01-15T10:30:00Z',
      features: ['Send emails', 'Track opens', 'Auto-replies'],
      plan: 'all'
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook',
      description: 'Integrate with Outlook for seamless email sending',
      icon: Mail,
      category: 'Email Clients',
      status: 'disconnected',
      lastSync: null,
      features: ['Send emails', 'Calendar sync', 'Contact sync'],
      plan: 'all'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Import contacts and send LinkedIn messages',
      icon: Linkedin,
      category: 'Social Networks',
      status: 'connected',
      lastSync: '2024-01-14T15:45:00Z',
      features: ['Contact import', 'Profile scanning', 'Message sending'],
      plan: 'pro'
    },
    {
      id: 'sheets',
      name: 'Google Sheets',
      description: 'Sync contacts and data with Google Sheets',
      icon: FileSpreadsheet,
      category: 'Data & Sync',
      status: 'connected',
      lastSync: '2024-01-15T09:15:00Z',
      features: ['Real-time sync', 'Data export', 'Bulk import'],
      plan: 'all'
    },
    {
      id: 'lemlist',
      name: 'Lemlist',
      description: 'Advanced email automation and sequences',
      icon: Send,
      category: 'Automation Tools',
      status: 'error',
      lastSync: '2024-01-10T12:00:00Z',
      features: ['Email sequences', 'A/B testing', 'Analytics'],
      plan: 'pro'
    },
    {
      id: 'outreach',
      name: 'Outreach.io',
      description: 'Sales engagement platform integration',
      icon: Target,
      category: 'Automation Tools',
      status: 'disconnected',
      lastSync: null,
      features: ['Sales sequences', 'CRM sync', 'Performance tracking'],
      plan: 'pro'
    }
  ])

  const [stats] = useState({
    connectedIntegrations: 3,
    totalSyncs: 1247,
    lastSyncTime: '2 minutes ago',
    errorCount: 1
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge variant="default" className="bg-green-100 text-green-800">Connected</Badge>
      case 'error':
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="secondary">Disconnected</Badge>
    }
  }

  const getPlanBadge = (plan: string) => {
    return plan === 'pro' 
      ? <Badge variant="outline" className="text-purple-600 border-purple-200">Pro</Badge>
      : null
  }

  const groupedIntegrations = integrations.reduce((acc, integration) => {
    if (!acc[integration.category]) {
      acc[integration.category] = []
    }
    acc[integration.category].push(integration)
    return acc
  }, {} as Record<string, typeof integrations>)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-1">Connect your favorite tools and automate your workflow</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Browse Integrations
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Connected</p>
                <p className="text-2xl font-bold text-green-600">{stats.connectedIntegrations}</p>
              </div>
              <Zap className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Syncs</p>
                <p className="text-2xl font-bold">{stats.totalSyncs.toLocaleString()}</p>
              </div>
              <RefreshCw className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last Sync</p>
                <p className="text-2xl font-bold text-purple-600">{stats.lastSyncTime}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Errors</p>
                <p className="text-2xl font-bold text-red-600">{stats.errorCount}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration Categories */}
      <div className="space-y-8">
        {Object.entries(groupedIntegrations).map(([category, categoryIntegrations]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryIntegrations.map((integration) => (
                <Card key={integration.id} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <integration.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            {getStatusBadge(integration.status)}
                            {getPlanBadge(integration.plan)}
                          </div>
                        </div>
                      </div>
                      {getStatusIcon(integration.status)}
                    </div>
                    <CardDescription>{integration.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {integration.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Last Sync */}
                      {integration.lastSync && (
                        <div className="text-sm text-gray-600">
                          Last sync: {new Date(integration.lastSync).toLocaleString()}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        {integration.status === 'connected' ? (
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4 mr-2" />
                              Configure
                            </Button>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Sync Now
                            </Button>
                          </div>
                        ) : integration.status === 'error' ? (
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <AlertCircle className="h-4 w-4 mr-2" />
                              Fix Error
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Disconnect
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Integration Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Setup Guide</CardTitle>
          <CardDescription>Step-by-step instructions for setting up your integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="gmail" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="gmail">Gmail</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
              <TabsTrigger value="sheets">Google Sheets</TabsTrigger>
              <TabsTrigger value="outreach">Outreach.io</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gmail" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Gmail Integration Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">1</div>
                    <div>
                      <p className="font-medium">Enable Gmail API</p>
                      <p className="text-sm text-gray-600">Go to Google Cloud Console and enable the Gmail API for your project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">2</div>
                    <div>
                      <p className="font-medium">Authorize Access</p>
                      <p className="text-sm text-gray-600">Click the "Connect Gmail" button and authorize WishReminder to access your Gmail account</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">3</div>
                    <div>
                      <p className="font-medium">Test Connection</p>
                      <p className="text-sm text-gray-600">Send a test email to verify the integration is working correctly</p>
                    </div>
                  </div>
                </div>
                <Button>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Documentation
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="linkedin" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">LinkedIn Integration Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">1</div>
                    <div>
                      <p className="font-medium">LinkedIn Sales Navigator</p>
                      <p className="text-sm text-gray-600">Ensure you have LinkedIn Sales Navigator access for advanced features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">2</div>
                    <div>
                      <p className="font-medium">Export Connections</p>
                      <p className="text-sm text-gray-600">Export your LinkedIn connections as CSV or use our automated scraping tool</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">3</div>
                    <div>
                      <p className="font-medium">Profile Scanning</p>
                      <p className="text-sm text-gray-600">Enable profile scanning to automatically gather contact information</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Pro Feature:</strong> LinkedIn integration requires a Pro plan subscription
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sheets" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Google Sheets Integration Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">1</div>
                    <div>
                      <p className="font-medium">Create Spreadsheet</p>
                      <p className="text-sm text-gray-600">Create a new Google Sheets document or use an existing one</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">2</div>
                    <div>
                      <p className="font-medium">Share Access</p>
                      <p className="text-sm text-gray-600">Share the spreadsheet with our service account for read/write access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">3</div>
                    <div>
                      <p className="font-medium">Configure Sync</p>
                      <p className="text-sm text-gray-600">Set up real-time sync preferences and field mapping</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outreach" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Outreach.io Integration Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">1</div>
                    <div>
                      <p className="font-medium">API Access</p>
                      <p className="text-sm text-gray-600">Generate an API key from your Outreach.io account settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">2</div>
                    <div>
                      <p className="font-medium">Configure Sequences</p>
                      <p className="text-sm text-gray-600">Set up email sequences and automation rules in Outreach.io</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">3</div>
                    <div>
                      <p className="font-medium">Sync Contacts</p>
                      <p className="text-sm text-gray-600">Enable contact synchronization between WishReminder and Outreach.io</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Pro Feature:</strong> Outreach.io integration requires a Pro plan subscription
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}