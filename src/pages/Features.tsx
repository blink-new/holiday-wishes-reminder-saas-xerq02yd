import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Bell,
  Users,
  Sparkles,
  Calendar,
  MessageSquare,
  Zap,
  ArrowRight,
  Play,
  Globe,
  Clock,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Mail,
  Linkedin,
  FileSpreadsheet,
  BarChart3,
  Brain,
  Workflow,
  Palette,
  Database
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Features() {
  const coreFeatures = [
    {
      icon: Bell,
      title: 'Holiday Reminder Wizard',
      description: 'We remember 200+ holidays so you can stop pretending you knew Diwali was coming up.',
      link: '/features/holiday-reminders',
      gradient: 'from-orange-400 to-red-500',
      benefits: ['200+ holidays (yes, even the obscure ones)', 'Cultural context (no more awkward mistakes)', 'Perfect timing (not 3 AM messages)']
    },
    {
      icon: Users,
      title: 'LinkedIn Ninja Mode',
      description: 'Stalk your contacts professionally. Import profiles without the creepy factor.',
      link: '/features/linkedin-integration',
      gradient: 'from-blue-500 to-indigo-600',
      benefits: ['Profile scanning (legally)', 'Bulk import (save your fingers)', 'Relationship mapping (like a detective)']
    },
    {
      icon: Sparkles,
      title: 'AI That Gets You',
      description: 'Generate messages that sound human, not like a robot learned English from a dictionary.',
      link: '/features/ai-content',
      gradient: 'from-purple-500 to-pink-600',
      benefits: ['Actually personal messages', 'Cultural awareness (no faux pas)', 'Your tone, not robot tone']
    },
    {
      icon: Zap,
      title: 'Send-It-Everywhere Magic',
      description: 'One click, six platforms. Because copying and pasting is for peasants.',
      link: '/features/automation',
      gradient: 'from-green-500 to-teal-600',
      benefits: ['6+ platforms (and counting)', 'Auto-scheduling (while you sleep)', 'One workflow to rule them all']
    },
    {
      icon: MessageSquare,
      title: 'Reply Tracker Supreme',
      description: 'See who actually responds and who just ghosts you. We keep receipts.',
      link: '/features/message-center',
      gradient: 'from-cyan-500 to-blue-600',
      benefits: ['All replies in one place', 'Ghost detection enabled', 'Sentiment analysis (are they mad?)']
    },
    {
      icon: FileSpreadsheet,
      title: 'Spreadsheet Whisperer',
      description: 'Syncs with Google Sheets because everything must live in a spreadsheet, apparently.',
      link: '/features/google-sheets',
      gradient: 'from-emerald-500 to-green-600',
      benefits: ['Real-time sync (like magic)', 'Data management (organized chaos)', 'Custom reports (for the data nerds)']
    }
  ]

  const advancedFeatures = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into message performance, response rates, and relationship health.',
      link: '/features/analytics',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'AI Lab (Pro)',
      description: 'Experimental AI features including personality-based messaging and psychological profiling.',
      link: '/features/ai-lab',
      gradient: 'from-pink-500 to-rose-600',
      badge: 'Pro Only'
    },
    {
      icon: Heart,
      title: 'Sentiment Analysis',
      description: 'Real-time mood detection from replies with intelligent response recommendations.',
      link: '/features/sentiment-analysis',
      gradient: 'from-red-500 to-pink-600',
      badge: 'Pro Only'
    },
    {
      icon: Workflow,
      title: 'Campaign Builder',
      description: 'Visual campaign builder with drag-drop interface and advanced automation rules.',
      link: '/features/campaigns',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ]

  const integrationFeatures = [
    {
      icon: Mail,
      title: 'Email Platforms',
      description: 'Native integration with Gmail, Outlook, and other major email providers.',
      link: '/integrations/email',
      platforms: ['Gmail', 'Outlook', 'Apple Mail']
    },
    {
      icon: Linkedin,
      title: 'Social Networks',
      description: 'Connect with LinkedIn, Twitter, and other social platforms for comprehensive outreach.',
      link: '/integrations/social',
      platforms: ['LinkedIn', 'Twitter', 'Facebook']
    },
    {
      icon: Target,
      title: 'Sales Tools',
      description: 'Seamless integration with Lemlist, Outreach.io, and other sales automation tools.',
      link: '/integrations/sales',
      platforms: ['Lemlist', 'Outreach.io', 'HubSpot']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Sync with Google Sheets, Airtable, and CRM systems for unified data management.',
      link: '/integrations/data',
      platforms: ['Google Sheets', 'Airtable', 'Salesforce']
    }
  ]

  const stats = [
    { label: 'Messages Sent', value: '2.5M+', icon: MessageSquare },
    { label: 'Happy Users', value: '15K+', icon: Users },
    { label: 'Response Rate', value: '68%', icon: TrendingUp },
    { label: 'Time Saved', value: '10K+ hrs', icon: Clock }
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
              <Link to="/features" className="text-gray-900 hover:text-orange-600 font-medium">Features</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
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
              🚀 Powered by AI That Actually Works
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Features That Make You Look Like
              <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent"> A Thoughtful Human </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              All the tools you need to fake being organized and culturally aware. Your friends will think you've really got your life together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 w-12 bg-gradient-to-r from-orange-400/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tools that form the foundation of your relationship management strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className={`h-14 w-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-gray-50" asChild>
                    <Link to={feature.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge capabilities for power users and growing businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative">
                {feature.badge && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                      {feature.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className={`h-14 w-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </CardDescription>
                  
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-gray-50" asChild>
                    <Link to={feature.link}>
                      Explore
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with your favorite tools and platforms for a unified workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationFeatures.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="h-14 w-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1">
                    {feature.platforms.map((platform, platformIndex) => (
                      <Badge key={platformIndex} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-gray-50" asChild>
                    <Link to={feature.link}>
                      View Integration
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Relationships?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who never miss important moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            14-day free trial • No credit card required • Cancel anytime
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
              <h3 className="font-semibold mb-4">Features</h3>
              <div className="space-y-2">
                <Link to="/features/holiday-reminders" className="block text-gray-400 hover:text-white text-sm">Holiday Reminders</Link>
                <Link to="/features/linkedin-integration" className="block text-gray-400 hover:text-white text-sm">LinkedIn Integration</Link>
                <Link to="/features/ai-content" className="block text-gray-400 hover:text-white text-sm">AI Content</Link>
                <Link to="/features/automation" className="block text-gray-400 hover:text-white text-sm">Automation</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Integrations</h3>
              <div className="space-y-2">
                <Link to="/integrations/email" className="block text-gray-400 hover:text-white text-sm">Email Platforms</Link>
                <Link to="/integrations/social" className="block text-gray-400 hover:text-white text-sm">Social Networks</Link>
                <Link to="/integrations/sales" className="block text-gray-400 hover:text-white text-sm">Sales Tools</Link>
                <Link to="/integrations/data" className="block text-gray-400 hover:text-white text-sm">Data Management</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white text-sm">Help Center</Link>
                <Link to="/docs" className="block text-gray-400 hover:text-white text-sm">Documentation</Link>
                <Link to="/status" className="block text-gray-400 hover:text-white text-sm">Status</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact</Link>
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