import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Bell,
  Plus,
  Calendar as CalendarIcon,
  Clock,
  Users,
  Send,
  Edit,
  Trash2,
  Play,
  Pause,
  MoreHorizontal,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Reminders() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const [reminders] = useState([
    {
      id: '1',
      title: 'Valentine\'s Day Wishes',
      holiday: 'Valentine\'s Day',
      date: '2024-02-14',
      time: '09:00',
      contactCount: 45,
      status: 'scheduled',
      channel: 'email',
      automationTool: 'gmail',
      message: 'Wishing you a wonderful Valentine\'s Day filled with love and happiness!',
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      title: 'International Women\'s Day',
      holiday: 'International Women\'s Day',
      date: '2024-03-08',
      time: '10:00',
      contactCount: 78,
      status: 'draft',
      channel: 'email',
      automationTool: 'outlook',
      message: 'Happy International Women\'s Day! Celebrating the amazing women in our lives.',
      createdAt: '2024-01-14T15:45:00Z'
    },
    {
      id: '3',
      title: 'Easter Greetings',
      holiday: 'Easter Sunday',
      date: '2024-03-31',
      time: '08:00',
      contactCount: 120,
      status: 'scheduled',
      channel: 'email',
      automationTool: 'lemlist',
      message: 'Wishing you a blessed Easter filled with joy, hope, and new beginnings.',
      createdAt: '2024-01-13T09:20:00Z'
    },
    {
      id: '4',
      title: 'Mother\'s Day Appreciation',
      holiday: 'Mother\'s Day',
      date: '2024-05-12',
      time: '09:30',
      contactCount: 89,
      status: 'paused',
      channel: 'linkedin',
      automationTool: 'linkedin',
      message: 'Happy Mother\'s Day to all the incredible mothers out there!',
      createdAt: '2024-01-12T14:15:00Z'
    },
    {
      id: '5',
      title: 'Christmas Wishes 2024',
      holiday: 'Christmas Day',
      date: '2024-12-25',
      time: '07:00',
      contactCount: 200,
      status: 'sent',
      channel: 'email',
      automationTool: 'outreach',
      message: 'Merry Christmas! May your holidays be filled with warmth, joy, and cherished moments.',
      createdAt: '2023-12-20T16:00:00Z'
    }
  ])

  const [stats] = useState({
    totalReminders: 23,
    scheduledReminders: 15,
    sentReminders: 156,
    draftReminders: 8
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'sent':
        return <Send className="h-4 w-4 text-blue-500" />
      case 'draft':
        return <Edit className="h-4 w-4 text-yellow-500" />
      case 'paused':
        return <Pause className="h-4 w-4 text-orange-500" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="default" className="bg-green-100 text-green-800">Scheduled</Badge>
      case 'sent':
        return <Badge variant="default" className="bg-blue-100 text-blue-800">Sent</Badge>
      case 'draft':
        return <Badge variant="secondary">Draft</Badge>
      case 'paused':
        return <Badge variant="outline" className="text-orange-600 border-orange-200">Paused</Badge>
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getChannelBadge = (channel: string) => {
    const channelColors = {
      email: 'bg-blue-50 text-blue-700',
      linkedin: 'bg-purple-50 text-purple-700',
      sms: 'bg-green-50 text-green-700'
    }
    return (
      <Badge variant="outline" className={channelColors[channel as keyof typeof channelColors] || 'bg-gray-50 text-gray-700'}>
        {channel}
      </Badge>
    )
  }

  const filteredReminders = reminders.filter(reminder => {
    const matchesSearch = reminder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reminder.holiday.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || reminder.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reminders</h1>
          <p className="text-gray-600 mt-1">Manage your holiday and birthday reminders</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Holiday Calendar
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Reminder
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Reminder</DialogTitle>
                <DialogDescription>
                  Set up a new holiday or birthday reminder
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Reminder Title</Label>
                  <Input id="title" placeholder="Valentine's Day Wishes" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="holiday">Holiday/Event</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select holiday" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="valentine">Valentine's Day</SelectItem>
                      <SelectItem value="womens-day">International Women's Day</SelectItem>
                      <SelectItem value="easter">Easter Sunday</SelectItem>
                      <SelectItem value="mothers-day">Mother's Day</SelectItem>
                      <SelectItem value="fathers-day">Father's Day</SelectItem>
                      <SelectItem value="christmas">Christmas Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Send Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Send Time</Label>
                  <Input id="time" type="time" defaultValue="09:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="channel">Channel</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select channel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tool">Automation Tool</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tool" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gmail">Gmail</SelectItem>
                      <SelectItem value="outlook">Outlook</SelectItem>
                      <SelectItem value="lemlist">Lemlist</SelectItem>
                      <SelectItem value="outreach">Outreach.io</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="contacts">Target Contacts</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select contact group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Contacts</SelectItem>
                      <SelectItem value="clients">Clients Only</SelectItem>
                      <SelectItem value="prospects">Prospects Only</SelectItem>
                      <SelectItem value="custom">Custom Selection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="message">Message Template</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your holiday message or use AI to generate one..."
                    rows={4}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="outline">
                  Save as Draft
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>
                  Schedule Reminder
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Reminders</p>
                <p className="text-2xl font-bold">{stats.totalReminders}</p>
              </div>
              <Bell className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scheduled</p>
                <p className="text-2xl font-bold text-green-600">{stats.scheduledReminders}</p>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sent</p>
                <p className="text-2xl font-bold text-purple-600">{stats.sentReminders}</p>
              </div>
              <Send className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-orange-600">{stats.draftReminders}</p>
              </div>
              <Edit className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>View upcoming reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Reminders List */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Reminders</CardTitle>
                  <CardDescription>Manage your scheduled and draft reminders</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search reminders..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="sent">Sent</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredReminders.map((reminder) => (
                  <div key={reminder.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(reminder.status)}
                        <div>
                          <h3 className="font-medium text-gray-900">{reminder.title}</h3>
                          <p className="text-sm text-gray-600">{reminder.holiday}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getStatusBadge(reminder.status)}
                        {getChannelBadge(reminder.channel)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Play className="h-4 w-4 mr-2" />
                              Send Now
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pause className="h-4 w-4 mr-2" />
                              Pause
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(reminder.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{reminder.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{reminder.contactCount} contacts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>{reminder.automationTool}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700 line-clamp-2">{reminder.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}