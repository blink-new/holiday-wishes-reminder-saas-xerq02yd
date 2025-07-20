import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Send,
  MessageSquare,
  Heart,
  Calendar,
  Mail,
  Linkedin,
  Clock,
  Target,
  Eye,
  MousePointer,
  Reply,
  Download
} from 'lucide-react'

export function Analytics() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('all')

  const [overviewStats] = useState({
    totalSent: 2547,
    totalOpened: 1732,
    totalReplied: 867,
    avgSentiment: 0.74,
    openRate: 68,
    replyRate: 34,
    sentimentTrend: 5.2,
    engagementTrend: 12.3
  })

  const [campaignPerformance] = useState([
    {
      id: '1',
      name: 'Christmas 2023',
      sent: 450,
      opened: 312,
      replied: 156,
      openRate: 69.3,
      replyRate: 34.7,
      sentiment: 0.82,
      channel: 'email'
    },
    {
      id: '2',
      name: 'New Year 2024',
      sent: 380,
      opened: 247,
      replied: 98,
      openRate: 65.0,
      replyRate: 25.8,
      sentiment: 0.76,
      channel: 'email'
    },
    {
      id: '3',
      name: 'Valentine\'s Day 2024',
      sent: 290,
      opened: 203,
      replied: 89,
      openRate: 70.0,
      replyRate: 30.7,
      sentiment: 0.79,
      channel: 'linkedin'
    },
    {
      id: '4',
      name: 'Women\'s Day 2024',
      sent: 520,
      opened: 364,
      replied: 187,
      openRate: 70.0,
      replyRate: 36.0,
      sentiment: 0.85,
      channel: 'email'
    }
  ])

  const [sentimentAnalysis] = useState([
    { label: 'Very Positive', value: 45, color: 'bg-green-500' },
    { label: 'Positive', value: 32, color: 'bg-green-300' },
    { label: 'Neutral', value: 18, color: 'bg-gray-300' },
    { label: 'Negative', value: 4, color: 'bg-red-300' },
    { label: 'Very Negative', value: 1, color: 'bg-red-500' }
  ])

  const [topPerformingHolidays] = useState([
    { name: 'Christmas', openRate: 78, replyRate: 42, sentiment: 0.89 },
    { name: 'New Year', openRate: 72, replyRate: 38, sentiment: 0.81 },
    { name: 'Mother\'s Day', openRate: 75, replyRate: 45, sentiment: 0.87 },
    { name: 'Valentine\'s Day', openRate: 70, replyRate: 35, sentiment: 0.79 },
    { name: 'Easter', openRate: 68, replyRate: 32, sentiment: 0.76 }
  ])

  const [channelPerformance] = useState([
    {
      channel: 'Email',
      icon: Mail,
      sent: 1847,
      opened: 1254,
      replied: 623,
      openRate: 67.9,
      replyRate: 33.7,
      avgSentiment: 0.76
    },
    {
      channel: 'LinkedIn',
      icon: Linkedin,
      sent: 700,
      opened: 478,
      replied: 244,
      openRate: 68.3,
      replyRate: 34.9,
      avgSentiment: 0.71
    }
  ])

  const [responseTimeAnalysis] = useState([
    { timeRange: '< 1 hour', percentage: 23, count: 198 },
    { timeRange: '1-4 hours', percentage: 34, count: 295 },
    { timeRange: '4-24 hours', percentage: 28, count: 243 },
    { timeRange: '1-3 days', percentage: 12, count: 104 },
    { timeRange: '> 3 days', percentage: 3, count: 27 }
  ])

  const getSentimentColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600'
    if (score >= 0.6) return 'text-green-500'
    if (score >= 0.4) return 'text-yellow-500'
    if (score >= 0.2) return 'text-orange-500'
    return 'text-red-500'
  }

  const getSentimentLabel = (score: number) => {
    if (score >= 0.8) return 'Very Positive'
    if (score >= 0.6) return 'Positive'
    if (score >= 0.4) return 'Neutral'
    if (score >= 0.2) return 'Negative'
    return 'Very Negative'
  }

  const getTrendIcon = (trend: number) => {
    return trend > 0 ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track performance and insights across all your campaigns</p>
        </div>
        <div className="flex space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Messages Sent</p>
                <p className="text-2xl font-bold">{overviewStats.totalSent.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  {getTrendIcon(overviewStats.engagementTrend)}
                  <span className="text-sm text-green-600 ml-1">+{overviewStats.engagementTrend}%</span>
                </div>
              </div>
              <Send className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Open Rate</p>
                <p className="text-2xl font-bold">{overviewStats.openRate}%</p>
                <div className="flex items-center mt-1">
                  {getTrendIcon(8.5)}
                  <span className="text-sm text-green-600 ml-1">+8.5%</span>
                </div>
              </div>
              <Eye className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reply Rate</p>
                <p className="text-2xl font-bold">{overviewStats.replyRate}%</p>
                <div className="flex items-center mt-1">
                  {getTrendIcon(12.3)}
                  <span className="text-sm text-green-600 ml-1">+12.3%</span>
                </div>
              </div>
              <Reply className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Sentiment</p>
                <p className="text-2xl font-bold">{(overviewStats.avgSentiment * 100).toFixed(0)}%</p>
                <div className="flex items-center mt-1">
                  {getTrendIcon(overviewStats.sentimentTrend)}
                  <span className="text-sm text-green-600 ml-1">+{overviewStats.sentimentTrend}%</span>
                </div>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="channels">Channel Performance</TabsTrigger>
          <TabsTrigger value="timing">Response Timing</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Performance Table */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Detailed metrics for each campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaignPerformance.map((campaign) => (
                    <div key={campaign.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {campaign.channel}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              {campaign.sent} sent
                            </span>
                          </div>
                        </div>
                        <div className={`text-right ${getSentimentColor(campaign.sentiment)}`}>
                          <p className="text-sm font-medium">
                            {getSentimentLabel(campaign.sentiment)}
                          </p>
                          <p className="text-xs">
                            {(campaign.sentiment * 100).toFixed(0)}% sentiment
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Open Rate</span>
                            <span className="text-sm font-medium">{campaign.openRate}%</span>
                          </div>
                          <Progress value={campaign.openRate} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Reply Rate</span>
                            <span className="text-sm font-medium">{campaign.replyRate}%</span>
                          </div>
                          <Progress value={campaign.replyRate} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sentiment Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Distribution</CardTitle>
                <CardDescription>Breakdown of message sentiment scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sentimentAnalysis.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Holidays */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Holidays</CardTitle>
                <CardDescription>Holidays with highest engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingHolidays.map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{holiday.name}</p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span>Open: {holiday.openRate}%</span>
                          <span>Reply: {holiday.replyRate}%</span>
                        </div>
                      </div>
                      <div className={`text-right ${getSentimentColor(holiday.sentiment)}`}>
                        <p className="text-sm font-medium">
                          {(holiday.sentiment * 100).toFixed(0)}%
                        </p>
                        <p className="text-xs">sentiment</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {channelPerformance.map((channel, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <channel.icon className="h-5 w-5 text-gray-600" />
                    <CardTitle>{channel.channel} Performance</CardTitle>
                  </div>
                  <CardDescription>
                    {channel.sent.toLocaleString()} messages sent
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{channel.openRate}%</p>
                        <p className="text-sm text-gray-600">Open Rate</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{channel.replyRate}%</p>
                        <p className="text-sm text-gray-600">Reply Rate</p>
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className={`text-2xl font-bold ${getSentimentColor(channel.avgSentiment)}`}>
                        {(channel.avgSentiment * 100).toFixed(0)}%
                      </p>
                      <p className="text-sm text-gray-600">Avg Sentiment</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Opened: {channel.opened.toLocaleString()}</span>
                        <span>Replied: {channel.replied.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Response Time Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time Analysis</CardTitle>
                <CardDescription>How quickly people respond to your messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {responseTimeAnalysis.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{item.timeRange}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{item.percentage}%</span>
                        <span className="text-sm text-gray-500">({item.count})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Best Sending Times */}
            <Card>
              <CardHeader>
                <CardTitle>Best Sending Times</CardTitle>
                <CardDescription>Optimal times for maximum engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-green-800">Best Day</p>
                        <p className="text-sm text-green-600">Tuesday</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">72%</p>
                        <p className="text-sm text-green-600">open rate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-800">Best Time</p>
                        <p className="text-sm text-blue-600">9:00 AM</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">68%</p>
                        <p className="text-sm text-blue-600">open rate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-purple-800">Fastest Response</p>
                        <p className="text-sm text-purple-600">Wednesday 2:00 PM</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-600">45min</p>
                        <p className="text-sm text-purple-600">avg response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}