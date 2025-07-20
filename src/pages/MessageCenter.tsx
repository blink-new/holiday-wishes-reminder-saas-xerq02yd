import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Search,
  Filter,
  Reply,
  Forward,
  Archive,
  Star,
  MoreHorizontal,
  Send,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
  Frown,
  Meh
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function MessageCenter() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>('1')
  const [replyText, setReplyText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const [messages] = useState([
    {
      id: '1',
      contact: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      subject: 'Re: Happy New Year Wishes!',
      preview: 'Thank you so much for the lovely New Year wishes! It really made my day...',
      content: 'Thank you so much for the lovely New Year wishes! It really made my day. I hope 2024 brings you lots of success and happiness. Looking forward to working together this year.',
      direction: 'inbound' as const,
      status: 'unread' as const,
      sentiment: 'positive' as const,
      sentimentScore: 0.8,
      timestamp: '2024-01-15T10:30:00Z',
      channel: 'email' as const,
      campaign: 'New Year 2024',
      threadId: 'thread-1'
    },
    {
      id: '2',
      contact: 'Michael Chen',
      email: 'michael.chen@techcorp.com',
      subject: 'Holiday Greetings',
      preview: 'Wishing you and your family the same! Thanks for thinking of us...',
      content: 'Wishing you and your family the same! Thanks for thinking of us during the holidays. Hope we can catch up soon.',
      direction: 'inbound' as const,
      status: 'read' as const,
      sentiment: 'positive' as const,
      sentimentScore: 0.7,
      timestamp: '2024-01-14T15:45:00Z',
      channel: 'email' as const,
      campaign: 'Christmas 2023',
      threadId: 'thread-2'
    },
    {
      id: '3',
      contact: 'Emma Davis',
      email: 'emma.davis@startup.io',
      subject: 'Re: Season\'s Greetings',
      preview: 'Thanks for remembering! Hope you had a great holiday season too...',
      content: 'Thanks for remembering! Hope you had a great holiday season too. Let\'s definitely connect in the new year.',
      direction: 'inbound' as const,
      status: 'replied' as const,
      sentiment: 'neutral' as const,
      sentimentScore: 0.5,
      timestamp: '2024-01-13T09:20:00Z',
      channel: 'email' as const,
      campaign: 'Christmas 2023',
      threadId: 'thread-3'
    },
    {
      id: '4',
      contact: 'David Wilson',
      email: 'david.wilson@enterprise.com',
      subject: 'Valentine\'s Day Wishes',
      preview: 'Happy Valentine\'s Day! Wishing you love and happiness...',
      content: 'Happy Valentine\'s Day! Wishing you love and happiness today and always.',
      direction: 'outbound' as const,
      status: 'sent' as const,
      sentiment: 'positive' as const,
      sentimentScore: 0.9,
      timestamp: '2024-02-14T08:00:00Z',
      channel: 'email' as const,
      campaign: 'Valentine\'s Day 2024',
      threadId: 'thread-4'
    }
  ])

  const [stats] = useState({
    totalMessages: 156,
    unreadCount: 12,
    replyRate: 68,
    avgSentiment: 0.72,
    responseTime: '2.4 hours'
  })

  const selectedMessageData = messages.find(m => m.id === selectedMessage)

  const getSentimentIcon = (sentiment: string, score: number) => {
    if (sentiment === 'positive' || score > 0.6) {
      return <Heart className="h-4 w-4 text-green-500" />
    } else if (sentiment === 'negative' || score < 0.4) {
      return <Frown className="h-4 w-4 text-red-500" />
    }
    return <Meh className="h-4 w-4 text-yellow-500" />
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <Badge variant="destructive">Unread</Badge>
      case 'read':
        return <Badge variant="secondary">Read</Badge>
      case 'replied':
        return <Badge variant="default">Replied</Badge>
      case 'sent':
        return <Badge variant="outline">Sent</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleReply = () => {
    if (!replyText.trim()) return
    
    // Here you would integrate with your email automation tool
    console.log('Sending reply:', replyText)
    setReplyText('')
    
    // Update message status to replied
    // This would be handled by your backend
  }

  const generateAIReply = async () => {
    if (!selectedMessageData) return
    
    // Here you would call your AI service to generate a reply
    const aiReply = `Thank you for your message, ${selectedMessageData.contact.split(' ')[0]}! I appreciate your kind words and look forward to staying in touch.`
    setReplyText(aiReply)
  }

  const filteredMessages = messages.filter(message =>
    message.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Message Center</h1>
          <p className="text-gray-600 mt-1">Manage all your conversations and replies in one place</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Archive Selected
          </Button>
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold">{stats.totalMessages}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-red-600">{stats.unreadCount}</p>
              </div>
              <Mail className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reply Rate</p>
                <p className="text-2xl font-bold text-green-600">{stats.replyRate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Sentiment</p>
                <p className="text-2xl font-bold text-purple-600">{(stats.avgSentiment * 100).toFixed(0)}%</p>
              </div>
              <Heart className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-2xl font-bold text-orange-600">{stats.responseTime}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Messages</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-96 overflow-y-auto">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedMessage === message.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                    onClick={() => setSelectedMessage(message.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-gray-900 truncate">{message.contact}</p>
                          {getSentimentIcon(message.sentiment, message.sentimentScore)}
                        </div>
                        <p className="text-sm font-medium text-gray-700 truncate mt-1">{message.subject}</p>
                        <p className="text-sm text-gray-600 truncate">{message.preview}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-500">
                            {new Date(message.timestamp).toLocaleDateString()}
                          </p>
                          {getStatusBadge(message.status)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Detail & Reply */}
        <div className="lg:col-span-2">
          {selectedMessageData ? (
            <div className="space-y-6">
              {/* Message Detail */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedMessageData.subject}</CardTitle>
                      <CardDescription>
                        From: {selectedMessageData.contact} ({selectedMessageData.email})
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getSentimentIcon(selectedMessageData.sentiment, selectedMessageData.sentimentScore)}
                      {getStatusBadge(selectedMessageData.status)}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Star className="h-4 w-4 mr-2" />
                            Star
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Forward className="h-4 w-4 mr-2" />
                            Forward
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Campaign: {selectedMessageData.campaign}</span>
                      <span>Channel: {selectedMessageData.channel}</span>
                      <span>{new Date(selectedMessageData.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="prose max-w-none">
                      <p className="text-gray-900 leading-relaxed">{selectedMessageData.content}</p>
                    </div>
                    {selectedMessageData.sentimentScore && (
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Sentiment Analysis:</span>
                        <Badge variant="outline" className="capitalize">
                          {selectedMessageData.sentiment}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          Score: {(selectedMessageData.sentimentScore * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Reply Section */}
              {selectedMessageData.direction === 'inbound' && selectedMessageData.status !== 'replied' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Reply</CardTitle>
                    <CardDescription>Respond to this message</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Select defaultValue="email">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" onClick={generateAIReply}>
                          <Sparkles className="h-4 w-4 mr-2" />
                          AI Suggest
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Type your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={6}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Archive className="h-4 w-4 mr-2" />
                            Save Draft
                          </Button>
                        </div>
                        <Button onClick={handleReply} disabled={!replyText.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Select a message to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}