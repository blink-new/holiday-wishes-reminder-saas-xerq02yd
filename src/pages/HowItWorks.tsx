import { useState } from 'react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Bell,
  Users,
  Calendar,
  Sparkles,
  MessageSquare,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  Upload,
  Settings,
  Send,
  BarChart3,
  Globe,
  Clock,
  Target,
  Mail,
  Linkedin,
  FileSpreadsheet
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 'setup',
      title: 'Connect Your Stuff',
      description: 'Link your accounts (don\'t worry, we won\'t judge your contact list)',
      icon: Upload,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'configure',
      title: 'Pick Your Holidays',
      description: 'Choose which holidays matter (yes, National Pizza Day counts)',
      icon: Settings,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'generate',
      title: 'Let AI Do the Work',
      description: 'Our AI writes messages that don\'t sound like a robot',
      icon: Sparkles,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'send',
      title: 'Send & Chill',
      description: 'Hit send and watch your reputation as a thoughtful person soar',
      icon: Send,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'analyze',
      title: 'See Who Loves You',
      description: 'Check who responded and who left you on read (we see you, Karen)',
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  const useCases = [
    {
      title: 'Sales Professional',
      description: 'Maintain relationships with international clients',
      icon: Target,
      scenario: 'Sarah manages 200+ clients across 15 countries',
      steps: [
        'Import LinkedIn contacts and CRM data',
        'AI identifies relevant holidays for each region',
        'Generate culturally appropriate messages',
        'Schedule and send via preferred channels',
        'Track responses and follow-up opportunities'
      ],
      result: '40% increase in client engagement and 25% more referrals'
    },
    {
      title: 'Marketing Manager',
      description: 'Build stronger relationships with partners and vendors',
      icon: Users,
      scenario: 'Mike needs to maintain relationships with global partners',
      steps: [
        'Connect email accounts and import partner contacts',
        'Set up custom holidays and company milestones',
        'Create branded message templates',
        'Automate sending through multiple channels',
        'Monitor engagement and relationship health'
      ],
      result: 'Improved partner satisfaction scores by 35%'
    },
    {
      title: 'Business Owner',
      description: 'Never miss important customer celebrations',
      icon: Bell,
      scenario: 'Emma runs a consulting firm with diverse clientele',
      steps: [
        'Upload customer database from Google Sheets',
        'AI analyzes customer profiles for cultural context',
        'Generate personalized holiday wishes',
        'Send via email and LinkedIn automatically',
        'Track which messages drive the most engagement'
      ],
      result: 'Increased customer retention by 30% and referrals by 50%'
    }
  ]

  const features = [
    {
      category: 'Contact Management',
      items: [
        { name: 'LinkedIn Profile Import', description: 'Bulk import with profile analysis' },
        { name: 'CSV Upload', description: 'Import from any spreadsheet or CRM' },
        { name: 'Email Integration', description: 'Sync with Gmail, Outlook, Apple Mail' },
        { name: 'Duplicate Detection', description: 'Automatic contact deduplication' }
      ]
    },
    {
      category: 'Holiday Intelligence',
      items: [
        { name: '200+ International Holidays', description: 'Comprehensive global coverage' },
        { name: 'Cultural Context', description: 'Understand significance and customs' },
        { name: 'Custom Celebrations', description: 'Add personal and company milestones' },
        { name: 'Smart Timing', description: 'Optimal send times by timezone' }
      ]
    },
    {
      category: 'AI Content Generation',
      items: [
        { name: 'Personalized Messages', description: 'Tailored to each relationship' },
        { name: 'Cultural Awareness', description: 'Appropriate tone and content' },
        { name: 'Multiple Variations', description: 'Generate different message options' },
        { name: 'Brand Voice', description: 'Maintain consistent brand tone' }
      ]
    },
    {
      category: 'Multi-Channel Sending',
      items: [
        { name: 'Email Platforms', description: 'Gmail, Outlook, Apple Mail' },
        { name: 'Social Networks', description: 'LinkedIn, Twitter, Facebook' },
        { name: 'Sales Tools', description: 'Lemlist, Outreach.io, HubSpot' },
        { name: 'Messaging Apps', description: 'WhatsApp, Telegram, Slack' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">WishReminder</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link to="/how-it-works" className="text-gray-900 hover:text-orange-600 font-medium">How It Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-400/20 to-purple-600/20 text-orange-300 border-orange-400/30">
              📚 Idiot-Proof Instructions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How to Stop Being
              <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent"> That Friend </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A step-by-step guide to finally getting your act together. So simple, even your technophobic uncle could figure it out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Video Tutorial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5-Step Process to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our proven methodology to build stronger relationships and never miss important moments.
            </p>
          </div>
          
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
            {steps.map((step, index) => (
              <Button
                key={step.id}
                variant={activeStep === index ? "default" : "outline"}
                className={`${activeStep === index ? 'bg-gradient-to-r from-orange-500 to-purple-600' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <step.icon className="mr-2 h-4 w-4" />
                {step.title}
              </Button>
            ))}
          </div>

          {/* Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className={`inline-flex h-16 w-16 bg-gradient-to-r ${steps[activeStep].color} rounded-xl items-center justify-center mb-4`}>
                  {React.createElement(steps[activeStep].icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Step {activeStep + 1}: {steps[activeStep].title}
                </h3>
                <p className="text-lg text-gray-600">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Step Details */}
              {activeStep === 0 && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Connect Your Accounts</h4>
                      <p className="text-gray-600">Link Gmail, Outlook, LinkedIn, and other platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Import Contacts</h4>
                      <p className="text-gray-600">Bulk import from CSV, LinkedIn, or email contacts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Profile Analysis</h4>
                      <p className="text-gray-600">AI analyzes contact profiles for cultural context</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Select Holidays</h4>
                      <p className="text-gray-600">Choose from 200+ international holidays or add custom ones</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Set Timing Preferences</h4>
                      <p className="text-gray-600">Configure when and how often to send reminders</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Message Templates</h4>
                      <p className="text-gray-600">Create or customize message templates for different occasions</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">AI Message Generation</h4>
                      <p className="text-gray-600">Generate personalized messages for each contact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Cultural Adaptation</h4>
                      <p className="text-gray-600">Messages adapted for cultural context and relationship level</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Review & Edit</h4>
                      <p className="text-gray-600">Review and customize messages before sending</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Multi-Channel Sending</h4>
                      <p className="text-gray-600">Send via email, LinkedIn, or other connected platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Automated Scheduling</h4>
                      <p className="text-gray-600">Schedule messages for optimal timing across time zones</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Real-time Tracking</h4>
                      <p className="text-gray-600">Monitor delivery status and response rates</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Performance Analytics</h4>
                      <p className="text-gray-600">Detailed insights on message performance and engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Response Management</h4>
                      <p className="text-gray-600">Track and manage responses in unified inbox</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Optimization Recommendations</h4>
                      <p className="text-gray-600">AI-powered suggestions to improve future campaigns</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                {/* Mockup content changes based on active step */}
                {activeStep === 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Import Contacts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <span className="text-sm">LinkedIn: 1,247 contacts imported</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Mail className="h-5 w-5 text-green-600" />
                        <span className="text-sm">Gmail: 856 contacts imported</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                        <FileSpreadsheet className="h-5 w-5 text-orange-600" />
                        <span className="text-sm">CSV Upload: 342 contacts imported</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Holiday Configuration</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Christmas</span>
                        <Badge variant="outline">Global</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Diwali</span>
                        <Badge variant="outline">India, Nepal</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Chinese New Year</span>
                        <Badge variant="outline">China, Singapore</Badge>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">AI Message Generation</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm italic">"Wishing you and your family a very Happy Diwali! May this festival of lights bring joy, prosperity, and happiness to your home."</p>
                        <div className="mt-2 text-xs text-gray-500">Generated for: Raj Patel (India)</div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Generate Alternative
                      </Button>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Send Campaign</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">Email</span>
                        <span className="text-sm text-green-600">156 sent</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">LinkedIn</span>
                        <span className="text-sm text-blue-600">89 sent</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <span className="text-sm">Scheduled</span>
                        <span className="text-sm text-orange-600">23 pending</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Campaign Analytics</h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">68%</div>
                          <div className="text-xs text-gray-600">Open Rate</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">24%</div>
                          <div className="text-xs text-gray-600">Response Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how professionals in different roles use WishReminder to achieve their goals.
            </p>
          </div>
          
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="sales">Sales Pro</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="business">Business Owner</TabsTrigger>
            </TabsList>
            
            {useCases.map((useCase, index) => (
              <TabsContent key={index} value={index === 0 ? 'sales' : index === 1 ? 'marketing' : 'business'}>
                <Card className="max-w-4xl mx-auto">
                  <CardHeader className="text-center">
                    <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-lg">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Scenario:</h4>
                      <p className="text-gray-600">{useCase.scenario}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Step-by-Step Process:</h4>
                      <div className="space-y-3">
                        {useCase.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="h-6 w-6 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <p className="text-gray-600">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Result:</h4>
                      <p className="text-green-700">{useCase.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Feature Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore every feature and capability that makes WishReminder the most comprehensive relationship management platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch step-by-step video guides to master every aspect of WishReminder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Getting Started', duration: '5:32', thumbnail: 'setup' },
              { title: 'LinkedIn Integration', duration: '3:45', thumbnail: 'linkedin' },
              { title: 'AI Content Generation', duration: '4:18', thumbnail: 'ai' },
              { title: 'Multi-Channel Sending', duration: '6:22', thumbnail: 'sending' },
              { title: 'Analytics & Optimization', duration: '4:55', thumbnail: 'analytics' },
              { title: 'Advanced Features', duration: '7:12', thumbnail: 'advanced' }
            ].map((video, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center">
                    <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-gray-700 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow our step-by-step guide and transform your relationship management today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Contact Support
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            14-day free trial • Complete setup in under 10 minutes • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">WishReminder</span>
              </div>
              <p className="text-gray-400 mb-4">
                The AI-powered platform for automated holiday and birthday reminders.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <Link to="/features" className="block text-gray-400 hover:text-white text-sm">Features</Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white text-sm">Pricing</Link>
                <Link to="/how-it-works" className="block text-gray-400 hover:text-white text-sm">How It Works</Link>
                <Link to="/integrations" className="block text-gray-400 hover:text-white text-sm">Integrations</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white text-sm">Help Center</Link>
                <Link to="/docs" className="block text-gray-400 hover:text-white text-sm">Documentation</Link>
                <Link to="/tutorials" className="block text-gray-400 hover:text-white text-sm">Video Tutorials</Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white text-sm">Blog</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact</Link>
                <Link to="/status" className="block text-gray-400 hover:text-white text-sm">Status</Link>
                <Link to="/privacy" className="block text-gray-400 hover:text-white text-sm">Privacy</Link>
                <Link to="/terms" className="block text-gray-400 hover:text-white text-sm">Terms</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 WishReminder. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}