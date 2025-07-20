import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Users,
  Bell,
  MessageSquare,
  TrendingUp,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const [stats] = useState({
    totalContacts: 1247,
    activeReminders: 23,
    messagesSent: 156,
    replyRate: 68,
    upcomingHolidays: 5,
    campaignsActive: 3
  })

  const [upcomingReminders] = useState([
    {
      id: '1',
      title: 'Valentine\'s Day Wishes',
      date: '2024-02-14',
      contactCount: 45,
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'International Women\'s Day',
      date: '2024-03-08',
      contactCount: 78,
      status: 'draft'
    },
    {
      id: '3',
      title: 'Easter Greetings',
      date: '2024-03-31',
      contactCount: 120,
      status: 'scheduled'
    }
  ])

  const [recentMessages] = useState([
    {
      id: '1',
      contact: 'Sarah Johnson',
      subject: 'Re: Happy New Year!',
      preview: 'Thank you so much for the lovely wishes...',
      time: '2 hours ago',
      sentiment: 'positive'
    },
    {
      id: '2',
      contact: 'Michael Chen',
      subject: 'Re: Holiday Greetings',
      preview: 'Wishing you and your family the same...',
      time: '5 hours ago',
      sentiment: 'positive'
    },
    {
      id: '3',
      contact: 'Emma Davis',
      subject: 'Re: Season\'s Greetings',
      preview: 'Thanks for remembering! Hope you had...',
      time: '1 day ago',
      sentiment: 'neutral'
    }
  ])

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50'
      case 'negative': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your reminders.</p>
        </div>
        <div className="flex space-x-3">
          <Button asChild>
            <Link to="/reminders/new">
              <Plus className="h-4 w-4 mr-2" />
              New Reminder
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/ai-content">
              <Sparkles className="h-4 w-4 mr-2" />
              Generate Content
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContacts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Reminders</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeReminders}</div>
            <p className="text-xs text-muted-foreground">
              {stats.upcomingHolidays} upcoming holidays
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.messagesSent}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reply Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.replyRate}%</div>
            <Progress value={stats.replyRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Reminders */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Reminders</CardTitle>
                <CardDescription>Scheduled holiday wishes and reminders</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/reminders">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReminders.map((reminder) => (
                <div key={reminder.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {reminder.status === 'scheduled' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{reminder.title}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(reminder.date).toLocaleDateString()} • {reminder.contactCount} contacts
                      </p>
                    </div>
                  </div>
                  <Badge variant={reminder.status === 'scheduled' ? 'default' : 'secondary'}>
                    {reminder.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest replies and interactions</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/messages">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.length > 0 ? (
                recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900 truncate">{message.contactId}</p>
                        <Badge className="text-xs bg-green-50 text-green-800">
                          replied
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mt-1">{message.subject || 'No subject'}</p>
                      <p className="text-sm text-gray-600 truncate">{message.replyContent || message.content}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.repliedAt ? new Date(message.repliedAt).toLocaleString() : new Date(message.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">No recent messages</p>
                  <p className="text-sm text-gray-400">Messages and replies will appear here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to get you started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link to="/contacts">
                <Users className="h-6 w-6" />
                <span>Manage Contacts</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link to="/contacts">
                <Upload className="h-6 w-6" />
                <span>Import CSV</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link to="/integrations">
                <Calendar className="h-6 w-6" />
                <span>Setup Integrations</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link to="/ai-content">
                <MessageSquare className="h-6 w-6" />
                <span>Generate Messages</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}