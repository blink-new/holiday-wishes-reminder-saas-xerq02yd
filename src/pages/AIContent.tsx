import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Sparkles,
  Wand2,
  Copy,
  Save,
  RefreshCw,
  User,
  Calendar,
  Globe,
  Heart,
  Briefcase,
  MessageSquare,
  Star,
  Download,
  Upload,
  Settings,
  Zap,
  Target,
  Clock,
  CheckCircle,
  Trash2
} from 'lucide-react'
import blink from '@/blink/client'
import { useToast } from '@/hooks/use-toast'

interface Contact {
  id: string
  first_name: string
  last_name?: string
  company?: string
  position?: string
  relationship_type: string
  cultural_background?: string
  country?: string
  linkedin_profile_data?: string
}

interface Holiday {
  id: string
  name: string
  date: string
  country_code: string
  type: string
  description: string
  cultural_context: string
  greeting_suggestions: string
}

interface MessageTemplate {
  id: string
  name: string
  category: string
  template_content: string
  tone: string
  language: string
  is_ai_generated: boolean
  usage_count: number
}

export function AIContent() {
  const [user, setUser] = useState<any>(null)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [holidays, setHolidays] = useState<Holiday[]>([])
  const [templates, setTemplates] = useState<MessageTemplate[]>([])
  const [loading, setLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [selectedContact, setSelectedContact] = useState('')
  const [selectedHoliday, setSelectedHoliday] = useState('')
  const [messageType, setMessageType] = useState('holiday')
  const [tone, setTone] = useState('professional')
  const [language, setLanguage] = useState('en')
  const [customPrompt, setCustomPrompt] = useState('')
  const [templateName, setTemplateName] = useState('')
  const { toast } = useToast()

  const loadData = useCallback(async () => {
    try {
      // Load contacts
      const contactsResult = await blink.db.contacts.list({
        where: { user_id: user?.id },
        orderBy: { first_name: 'asc' }
      })
      setContacts(contactsResult)

      // Load holidays
      const holidaysResult = await blink.db.holidays.list({
        orderBy: { date: 'asc' }
      })
      setHolidays(holidaysResult)

      // Load templates
      const templatesResult = await blink.db.message_templates.list({
        where: { user_id: user?.id },
        orderBy: { created_at: 'desc' }
      })
      setTemplates(templatesResult)
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }, [user?.id])

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      if (state.user) {
        loadData()
      }
    })
    return unsubscribe
  }, [loadData])

  const generateContent = async () => {
    try {
      setLoading(true)
      setGeneratedContent('')

      if (!selectedContact && messageType !== 'custom') {
        toast({
          title: 'Error',
          description: 'Please select a contact',
          variant: 'destructive'
        })
        return
      }

      const contact = contacts.find(c => c.id === selectedContact)
      const holiday = holidays.find(h => h.id === selectedHoliday)

      let prompt = ''
      
      if (messageType === 'holiday' && holiday) {
        const greetingSuggestions = holiday.greeting_suggestions ? JSON.parse(holiday.greeting_suggestions) : []
        prompt = `Generate a ${tone} ${holiday.name} message for ${contact?.first_name} ${contact?.last_name || ''}. 
        
Contact details:
- Name: ${contact?.first_name} ${contact?.last_name || ''}
- Company: ${contact?.company || 'Unknown'}
- Position: ${contact?.position || 'Unknown'}
- Relationship: ${contact?.relationship_type || 'professional'}
- Cultural background: ${contact?.cultural_background || 'Unknown'}
- Country: ${contact?.country || 'Unknown'}

Holiday context:
- Holiday: ${holiday.name}
- Description: ${holiday.description}
- Cultural context: ${holiday.cultural_context}
- Traditional greetings: ${greetingSuggestions.join(', ')}

Please create a personalized message that:
1. Is appropriate for their cultural background and relationship type
2. Mentions specific details about the holiday
3. Feels genuine and personal, not generic
4. Uses a ${tone} tone
5. Is 2-3 sentences long
6. Includes their name naturally

Make it feel like it was written by someone who genuinely cares about maintaining the relationship.`
      } else if (messageType === 'birthday' && contact) {
        prompt = `Generate a ${tone} birthday message for ${contact.first_name} ${contact.last_name || ''}.
        
Contact details:
- Name: ${contact.first_name} ${contact.last_name || ''}
- Company: ${contact.company || 'Unknown'}
- Position: ${contact.position || 'Unknown'}
- Relationship: ${contact.relationship_type || 'professional'}
- Cultural background: ${contact.cultural_background || 'Unknown'}

Please create a personalized birthday message that:
1. Is appropriate for their relationship type (${contact.relationship_type})
2. Uses a ${tone} tone
3. Feels genuine and personal
4. Is 2-3 sentences long
5. Includes their name naturally
6. Considers their professional context if it's a business relationship

Make it warm but appropriate for the relationship level.`
      } else if (messageType === 'custom') {
        prompt = `${customPrompt}

Please generate a ${tone} message with the following requirements:
1. Use a ${tone} tone
2. Make it 2-3 sentences long
3. Ensure it's appropriate for professional communication
4. Make it feel genuine and personal`
      }

      // Generate content using Blink AI
      const { text } = await blink.ai.generateText({
        prompt: prompt,
        model: 'gpt-4o-mini',
        maxTokens: 200
      })

      setGeneratedContent(text)
      
      toast({
        title: 'Success',
        description: 'Content generated successfully!'
      })
    } catch (error) {
      console.error('Error generating content:', error)
      toast({
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const saveAsTemplate = async () => {
    try {
      if (!generatedContent || !templateName.trim()) {
        toast({
          title: 'Error',
          description: 'Please provide a template name and generate content first',
          variant: 'destructive'
        })
        return
      }

      const templateData = {
        id: `template_${Date.now()}`,
        user_id: user.id,
        name: templateName,
        category: messageType,
        template_content: generatedContent,
        tone: tone,
        language: language,
        is_ai_generated: true,
        usage_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      await blink.db.message_templates.create(templateData)
      await loadData() // Refresh templates
      
      setTemplateName('')
      toast({
        title: 'Success',
        description: 'Template saved successfully!'
      })
    } catch (error) {
      console.error('Error saving template:', error)
      toast({
        title: 'Error',
        description: 'Failed to save template',
        variant: 'destructive'
      })
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent)
      toast({
        title: 'Copied!',
        description: 'Content copied to clipboard'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy to clipboard',
        variant: 'destructive'
      })
    }
  }

  const applyTemplate = (template: MessageTemplate) => {
    setGeneratedContent(template.template_content)
    setTone(template.tone)
    setMessageType(template.category)
  }

  const deleteTemplate = async (templateId: string) => {
    try {
      await blink.db.message_templates.delete(templateId)
      await loadData()
      toast({
        title: 'Success',
        description: 'Template deleted successfully'
      })
    } catch (error) {
      console.error('Error deleting template:', error)
      toast({
        title: 'Error',
        description: 'Failed to delete template',
        variant: 'destructive'
      })
    }
  }

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Please sign in to access AI content generation.</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Content Studio</h1>
          <p className="text-gray-600 mt-1">Generate personalized messages with AI that understands context and culture</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import Templates
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Templates
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Templates Created</p>
                <p className="text-2xl font-bold">{templates.length}</p>
              </div>
              <Sparkles className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Generated</p>
                <p className="text-2xl font-bold text-blue-600">
                  {templates.filter(t => t.is_ai_generated).length}
                </p>
              </div>
              <Wand2 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Usage</p>
                <p className="text-2xl font-bold text-green-600">
                  {templates.reduce((sum, t) => sum + t.usage_count, 0)}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available Holidays</p>
                <p className="text-2xl font-bold text-orange-600">{holidays.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Generator */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wand2 className="h-5 w-5 text-purple-600" />
                <span>AI Content Generator</span>
              </CardTitle>
              <CardDescription>
                Generate personalized messages using AI that understands cultural context and relationships
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Message Type Selection */}
              <div>
                <Label>Message Type</Label>
                <Select value={messageType} onValueChange={setMessageType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="holiday">Holiday Wishes</SelectItem>
                    <SelectItem value="birthday">Birthday Messages</SelectItem>
                    <SelectItem value="anniversary">Anniversary Greetings</SelectItem>
                    <SelectItem value="custom">Custom Message</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Selection */}
              {messageType !== 'custom' && (
                <div>
                  <Label>Select Contact</Label>
                  <Select value={selectedContact} onValueChange={setSelectedContact}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a contact..." />
                    </SelectTrigger>
                    <SelectContent>
                      {contacts.map((contact) => (
                        <SelectItem key={contact.id} value={contact.id}>
                          {contact.first_name} {contact.last_name} 
                          {contact.company && ` - ${contact.company}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Holiday Selection */}
              {messageType === 'holiday' && (
                <div>
                  <Label>Select Holiday</Label>
                  <Select value={selectedHoliday} onValueChange={setSelectedHoliday}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a holiday..." />
                    </SelectTrigger>
                    <SelectContent>
                      {holidays.map((holiday) => (
                        <SelectItem key={holiday.id} value={holiday.id}>
                          {holiday.name} ({holiday.date}) - {holiday.country_code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Custom Prompt */}
              {messageType === 'custom' && (
                <div>
                  <Label>Custom Prompt</Label>
                  <Textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Describe what kind of message you want to generate..."
                    rows={3}
                  />
                </div>
              )}

              {/* Tone and Language */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="warm">Warm</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={generateContent} 
                disabled={loading || (!selectedContact && messageType !== 'custom') || (messageType === 'custom' && !customPrompt.trim())}
                className="w-full"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>

              {/* Generated Content */}
              {generatedContent && (
                <div className="space-y-4">
                  <Separator />
                  <div>
                    <Label>Generated Content</Label>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border">
                      <p className="text-gray-900 leading-relaxed">{generatedContent}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" onClick={generateContent}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Regenerate
                    </Button>
                    <div className="flex-1" />
                    <Input
                      placeholder="Template name..."
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      className="max-w-48"
                    />
                    <Button onClick={saveAsTemplate}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Template
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Templates Library */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span>Template Library</span>
              </CardTitle>
              <CardDescription>
                Your saved message templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              {templates.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">No templates yet</p>
                  <p className="text-sm text-gray-400">Generate and save your first template</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {templates.map((template) => (
                    <Card key={template.id} className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-sm">{template.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {template.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {template.tone}
                            </Badge>
                            {template.is_ai_generated && (
                              <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700">
                                AI
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTemplate(template.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {template.template_content}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Used {template.usage_count} times
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => applyTemplate(template)}
                        >
                          Use
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-600" />
                <span>Pro Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Cultural Context</p>
                  <p className="text-xs text-gray-600">Add cultural background to contacts for more appropriate messages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Relationship Types</p>
                  <p className="text-xs text-gray-600">Set correct relationship types for appropriate tone</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">LinkedIn Data</p>
                  <p className="text-xs text-gray-600">Import LinkedIn profiles for richer context</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Save Templates</p>
                  <p className="text-xs text-gray-600">Save successful messages as templates for reuse</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}