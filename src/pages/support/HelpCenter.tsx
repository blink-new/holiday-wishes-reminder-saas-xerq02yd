import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Bell,
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  HelpCircle,
  ArrowRight,
  Clock,
  CheckCircle,
  Users,
  Zap,
  Settings,
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Baby steps for tech beginners',
      articles: 12,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Wrangle your messy contact list',
      articles: 8,
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Bell,
      title: 'Holiday Reminders',
      description: 'Stop forgetting important dates',
      articles: 15,
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Integrations',
      description: 'Make your apps play nice together',
      articles: 10,
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: 'Account & Billing',
      description: 'Money stuff and account things',
      articles: 6,
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: MessageCircle,
      title: 'Troubleshooting',
      description: 'When things go wrong (they will)',
      articles: 9,
      color: 'from-red-500 to-pink-600'
    }
  ]

  const popularArticles = [
    {
      title: 'How to import contacts from LinkedIn',
      category: 'Contact Management',
      readTime: '3 min read',
      views: '2.1k views'
    },
    {
      title: 'Setting up your first holiday reminder campaign',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '1.8k views'
    },
    {
      title: 'Connecting Gmail for automated sending',
      category: 'Integrations',
      readTime: '4 min read',
      views: '1.5k views'
    },
    {
      title: 'Understanding AI content generation',
      category: 'Getting Started',
      readTime: '6 min read',
      views: '1.3k views'
    },
    {
      title: 'Troubleshooting message delivery issues',
      category: 'Troubleshooting',
      readTime: '4 min read',
      views: '1.1k views'
    }
  ]

  const quickActions = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Detailed technical guides',
      link: '/docs'
    },
    {
      icon: MessageCircle,
      title: 'Contact Support',
      description: 'Get help from our team',
      link: '/contact'
    },
    {
      icon: Globe,
      title: 'System Status',
      description: 'Check service availability',
      link: '/status'
    }
  ]

  const faqs = [
    {
      question: 'How do I import my LinkedIn contacts?',
      answer: 'You can import LinkedIn contacts by connecting your LinkedIn account in the Integrations section. Our system will automatically sync your connections and analyze their profiles for relevant holiday information.'
    },
    {
      question: 'Can I customize the AI-generated messages?',
      answer: 'Yes! All AI-generated messages can be reviewed and edited before sending. You can also create custom templates and train the AI to match your preferred tone and style.'
    },
    {
      question: 'What holidays are supported?',
      answer: 'WishReminder supports over 200 international holidays including religious, cultural, and national celebrations. You can also add custom holidays and personal celebrations like birthdays and anniversaries.'
    },
    {
      question: 'How does the cultural context feature work?',
      answer: 'Our AI analyzes contact profiles to understand their cultural background and suggests appropriate holidays and messaging styles. This ensures your messages are culturally sensitive and relevant.'
    },
    {
      question: 'Can I schedule messages in advance?',
      answer: 'Absolutely! You can schedule messages days, weeks, or even months in advance. The system will automatically send them at the optimal time based on the recipient\'s timezone.'
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
              <Link to="/help" className="text-gray-900 hover:text-orange-600 font-medium">Help</Link>
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stuck? We've Got You Covered
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Whether you broke something or just can't find the button, we're here to help (and we won't judge).
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 focus:border-orange-500 rounded-xl"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-purple-600">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <action.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find the help you need organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className={`h-12 w-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-lg text-gray-600">Most viewed help articles this month</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                    <HelpCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-7">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Mail className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">Get help via email</p>
              <Button variant="outline" size="sm">
                Send Email
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <MessageCircle className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">Chat with our team</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Phone className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-4">Call us directly</p>
              <Button variant="outline" size="sm">
                Call Now
              </Button>
            </Card>
          </div>
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
                <Link to="/integrations" className="block text-gray-400 hover:text-white text-sm">Integrations</Link>
                <Link to="/api" className="block text-gray-400 hover:text-white text-sm">API</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white text-sm">Help Center</Link>
                <Link to="/docs" className="block text-gray-400 hover:text-white text-sm">Documentation</Link>
                <Link to="/tutorials" className="block text-gray-400 hover:text-white text-sm">Tutorials</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white text-sm">About</Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white text-sm">Blog</Link>
                <Link to="/careers" className="block text-gray-400 hover:text-white text-sm">Careers</Link>
                <Link to="/status" className="block text-gray-400 hover:text-white text-sm">Status</Link>
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