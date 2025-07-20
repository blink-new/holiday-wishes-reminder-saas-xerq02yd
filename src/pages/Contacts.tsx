import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Users,
  Plus,
  Search,
  Filter,
  Upload,
  Download,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Building,
  MapPin,
  Heart,
  Star,
  Edit,
  Trash2,
  FileSpreadsheet,
  UserPlus,
  Gift,
  Clock
} from 'lucide-react'
import blink from '@/blink/client'
import { useToast } from '@/hooks/use-toast'

interface Contact {
  id: string
  user_id: string
  first_name: string
  last_name?: string
  email?: string
  phone?: string
  company?: string
  position?: string
  linkedin_url?: string
  birthday?: string
  anniversary?: string
  timezone?: string
  country?: string
  cultural_background?: string
  relationship_type: string
  importance_level: number
  notes?: string
  tags?: string
  linkedin_profile_data?: string
  created_at: string
  updated_at: string
}

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [user, setUser] = useState<any>(null)
  const { toast } = useToast()

  // Form state for adding/editing contacts
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    linkedin_url: '',
    birthday: '',
    anniversary: '',
    timezone: '',
    country: '',
    cultural_background: '',
    relationship_type: 'professional',
    importance_level: 3,
    notes: '',
    tags: ''
  })

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true)
      const result = await blink.db.contacts.list({
        where: { user_id: user?.id },
        orderBy: { created_at: 'desc' }
      })
      setContacts(result)
    } catch (error) {
      console.error('Error loading contacts:', error)
      toast({
        title: 'Error',
        description: 'Failed to load contacts',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }, [user?.id, toast])

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      if (state.user) {
        loadContacts()
      }
    })
    return unsubscribe
  }, [loadContacts])

  const handleAddContact = async () => {
    try {
      if (!formData.first_name.trim()) {
        toast({
          title: 'Error',
          description: 'First name is required',
          variant: 'destructive'
        })
        return
      }

      const contactData = {
        id: `contact_${Date.now()}`,
        user_id: user.id,
        ...formData,
        tags: formData.tags ? JSON.stringify(formData.tags.split(',').map(t => t.trim())) : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      await blink.db.contacts.create(contactData)
      
      // Refresh contacts list
      await loadContacts()
      
      // Reset form and close dialog
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        linkedin_url: '',
        birthday: '',
        anniversary: '',
        timezone: '',
        country: '',
        cultural_background: '',
        relationship_type: 'professional',
        importance_level: 3,
        notes: '',
        tags: ''
      })
      setShowAddDialog(false)
      
      toast({
        title: 'Success',
        description: 'Contact added successfully'
      })
    } catch (error) {
      console.error('Error adding contact:', error)
      toast({
        title: 'Error',
        description: 'Failed to add contact',
        variant: 'destructive'
      })
    }
  }

  const handleEditContact = async () => {
    try {
      if (!editingContact || !formData.first_name.trim()) {
        toast({
          title: 'Error',
          description: 'First name is required',
          variant: 'destructive'
        })
        return
      }

      const updateData = {
        ...formData,
        tags: formData.tags ? JSON.stringify(formData.tags.split(',').map(t => t.trim())) : null,
        updated_at: new Date().toISOString()
      }

      await blink.db.contacts.update(editingContact.id, updateData)
      
      // Refresh contacts list
      await loadContacts()
      
      // Reset form and close dialog
      setEditingContact(null)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        linkedin_url: '',
        birthday: '',
        anniversary: '',
        timezone: '',
        country: '',
        cultural_background: '',
        relationship_type: 'professional',
        importance_level: 3,
        notes: '',
        tags: ''
      })
      
      toast({
        title: 'Success',
        description: 'Contact updated successfully'
      })
    } catch (error) {
      console.error('Error updating contact:', error)
      toast({
        title: 'Error',
        description: 'Failed to update contact',
        variant: 'destructive'
      })
    }
  }

  const handleDeleteContact = async (contactId: string) => {
    try {
      await blink.db.contacts.delete(contactId)
      await loadContacts()
      toast({
        title: 'Success',
        description: 'Contact deleted successfully'
      })
    } catch (error) {
      console.error('Error deleting contact:', error)
      toast({
        title: 'Error',
        description: 'Failed to delete contact',
        variant: 'destructive'
      })
    }
  }

  const openEditDialog = (contact: Contact) => {
    setEditingContact(contact)
    setFormData({
      first_name: contact.first_name,
      last_name: contact.last_name || '',
      email: contact.email || '',
      phone: contact.phone || '',
      company: contact.company || '',
      position: contact.position || '',
      linkedin_url: contact.linkedin_url || '',
      birthday: contact.birthday || '',
      anniversary: contact.anniversary || '',
      timezone: contact.timezone || '',
      country: contact.country || '',
      cultural_background: contact.cultural_background || '',
      relationship_type: contact.relationship_type,
      importance_level: contact.importance_level,
      notes: contact.notes || '',
      tags: contact.tags ? JSON.parse(contact.tags).join(', ') : ''
    })
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === 'all' || contact.relationship_type === filterType

    return matchesSearch && matchesFilter
  })

  const getInitials = (contact: Contact) => {
    return `${contact.first_name[0]}${contact.last_name?.[0] || ''}`.toUpperCase()
  }

  const getImportanceColor = (level: number) => {
    switch (level) {
      case 5: return 'text-red-600 bg-red-50'
      case 4: return 'text-orange-600 bg-orange-50'
      case 3: return 'text-yellow-600 bg-yellow-50'
      case 2: return 'text-blue-600 bg-blue-50'
      case 1: return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getUpcomingEvents = (contact: Contact) => {
    const events = []
    const now = new Date()
    const currentYear = now.getFullYear()

    if (contact.birthday) {
      const birthday = new Date(`${currentYear}-${contact.birthday.slice(5)}`)
      if (birthday < now) {
        birthday.setFullYear(currentYear + 1)
      }
      events.push({ type: 'birthday', date: birthday, label: 'Birthday' })
    }

    if (contact.anniversary) {
      const anniversary = new Date(`${currentYear}-${contact.anniversary.slice(5)}`)
      if (anniversary < now) {
        anniversary.setFullYear(currentYear + 1)
      }
      events.push({ type: 'anniversary', date: anniversary, label: 'Anniversary' })
    }

    return events.sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Please sign in to manage your contacts.</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your relationships and never miss important moments</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import CSV
          </Button>
          <Button variant="outline">
            <Linkedin className="h-4 w-4 mr-2" />
            Import LinkedIn
          </Button>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Contact</DialogTitle>
                <DialogDescription>
                  Add a new contact to your relationship management system
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input
                      id="first_name"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input
                      id="last_name"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Software Engineer"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                  <Input
                    id="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input
                      id="birthday"
                      type="date"
                      value={formData.birthday}
                      onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="anniversary">Anniversary</Label>
                    <Input
                      id="anniversary"
                      type="date"
                      value={formData.anniversary}
                      onChange={(e) => setFormData({ ...formData, anniversary: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="relationship_type">Relationship</Label>
                    <Select value={formData.relationship_type} onValueChange={(value) => setFormData({ ...formData, relationship_type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                        <SelectItem value="vendor">Vendor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="importance_level">Importance (1-5)</Label>
                    <Select value={formData.importance_level.toString()} onValueChange={(value) => setFormData({ ...formData, importance_level: parseInt(value) })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Low</SelectItem>
                        <SelectItem value="2">2 - Below Average</SelectItem>
                        <SelectItem value="3">3 - Average</SelectItem>
                        <SelectItem value="4">4 - High</SelectItem>
                        <SelectItem value="5">5 - Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="colleague, tech, startup"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Additional notes about this contact..."
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddContact}>
                    Add Contact
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Contacts</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="client">Client</SelectItem>
            <SelectItem value="vendor">Vendor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold">{contacts.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Birthdays</p>
                <p className="text-2xl font-bold text-green-600">
                  {contacts.filter(c => {
                    if (!c.birthday) return false
                    const birthday = new Date(`2024-${c.birthday.slice(5)}`)
                    const now = new Date()
                    const diff = birthday.getTime() - now.getTime()
                    return diff > 0 && diff <= 30 * 24 * 60 * 60 * 1000 // Next 30 days
                  }).length}
                </p>
              </div>
              <Gift className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-red-600">
                  {contacts.filter(c => c.importance_level >= 4).length}
                </p>
              </div>
              <Star className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Recent Additions</p>
                <p className="text-2xl font-bold text-purple-600">
                  {contacts.filter(c => {
                    const created = new Date(c.created_at)
                    const now = new Date()
                    const diff = now.getTime() - created.getTime()
                    return diff <= 7 * 24 * 60 * 60 * 1000 // Last 7 days
                  }).length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Contacts</CardTitle>
          <CardDescription>
            {filteredContacts.length} of {contacts.length} contacts
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading contacts...</p>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No contacts found</p>
              <p className="text-sm text-gray-400">Add your first contact to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredContacts.map((contact) => {
                const upcomingEvents = getUpcomingEvents(contact)
                const nextEvent = upcomingEvents[0]
                
                return (
                  <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-br from-orange-400 to-blue-600 text-white">
                              {getInitials(contact)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {contact.first_name} {contact.last_name}
                            </h3>
                            <p className="text-sm text-gray-600">{contact.position}</p>
                            {contact.company && (
                              <p className="text-xs text-gray-500">{contact.company}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Badge className={getImportanceColor(contact.importance_level)}>
                            {contact.importance_level}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditDialog(contact)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteContact(contact.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {contact.email && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            <span>{contact.email}</span>
                          </div>
                        )}
                        {contact.phone && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4" />
                            <span>{contact.phone}</span>
                          </div>
                        )}
                        {contact.linkedin_url && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn Profile</span>
                          </div>
                        )}
                      </div>

                      {nextEvent && (
                        <div className="mt-3 p-2 bg-orange-50 rounded-lg">
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="h-4 w-4 text-orange-600" />
                            <span className="text-orange-700">
                              {nextEvent.label}: {nextEvent.date.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      )}

                      {contact.tags && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {JSON.parse(contact.tags).map((tag: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="mt-3 flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {contact.relationship_type}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Contact Dialog */}
      <Dialog open={!!editingContact} onOpenChange={(open) => !open && setEditingContact(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
            <DialogDescription>
              Update contact information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit_first_name">First Name *</Label>
                <Input
                  id="edit_first_name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="edit_last_name">Last Name</Label>
                <Input
                  id="edit_last_name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit_email">Email</Label>
                <Input
                  id="edit_email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="edit_phone">Phone</Label>
                <Input
                  id="edit_phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit_company">Company</Label>
                <Input
                  id="edit_company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <Label htmlFor="edit_position">Position</Label>
                <Input
                  id="edit_position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="Software Engineer"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="edit_linkedin_url">LinkedIn URL</Label>
              <Input
                id="edit_linkedin_url"
                value={formData.linkedin_url}
                onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit_birthday">Birthday</Label>
                <Input
                  id="edit_birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit_anniversary">Anniversary</Label>
                <Input
                  id="edit_anniversary"
                  type="date"
                  value={formData.anniversary}
                  onChange={(e) => setFormData({ ...formData, anniversary: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="edit_relationship_type">Relationship</Label>
                <Select value={formData.relationship_type} onValueChange={(value) => setFormData({ ...formData, relationship_type: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit_importance_level">Importance (1-5)</Label>
                <Select value={formData.importance_level.toString()} onValueChange={(value) => setFormData({ ...formData, importance_level: parseInt(value) })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Low</SelectItem>
                    <SelectItem value="2">2 - Below Average</SelectItem>
                    <SelectItem value="3">3 - Average</SelectItem>
                    <SelectItem value="4">4 - High</SelectItem>
                    <SelectItem value="5">5 - Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit_country">Country</Label>
                <Input
                  id="edit_country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="United States"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="edit_tags">Tags (comma-separated)</Label>
              <Input
                id="edit_tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="colleague, tech, startup"
              />
            </div>

            <div>
              <Label htmlFor="edit_notes">Notes</Label>
              <Textarea
                id="edit_notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Additional notes about this contact..."
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setEditingContact(null)}>
                Cancel
              </Button>
              <Button onClick={handleEditContact}>
                Update Contact
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}