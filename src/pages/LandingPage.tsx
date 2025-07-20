import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Bell,
  Users,
  Sparkles,
  Calendar,
  MessageSquare,
  Zap,
  CheckCircle,
  Star,
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
  FileSpreadsheet
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function LandingPage() {
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: Bell,
      title: 'Holiday Reminder Genius',
      description: 'We track 200+ holidays so you don\'t have to Google "when is Ramadan" at 11 PM again.',
      link: '/features/holiday-reminders'
    },
    {
      icon: Users,
      title: 'LinkedIn Stalking (Legal)',
      description: 'Import your LinkedIn contacts without looking creepy. We do the profile scanning so you don\'t have to.',
      link: '/features/linkedin-integration'
    },
    {
      icon: Sparkles,
      title: 'AI That Doesn\'t Suck',
      description: 'Generate messages that sound like you wrote them, not like a robot having an existential crisis.',
      link: '/features/ai-content'
    },
    {
      icon: Zap,
      title: 'Send Everywhere Magic',
      description: 'Gmail, Outlook, LinkedIn, carrier pigeon - okay maybe not the last one, but we\'re working on it.',
      link: '/features/automation'
    },
    {
      icon: MessageSquare,
      title: 'Reply Detective',
      description: 'Track who actually responds to your wishes and who just leaves you on read (we see you, Kevin).',
      link: '/features/message-center'
    },
    {
      icon: FileSpreadsheet,
      title: 'Spreadsheet Whisperer',
      description: 'Syncs with Google Sheets because apparently everything needs to be in a spreadsheet these days.',
      link: '/features/google-sheets'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'I used to panic-Google "Happy Diwali in Hindi" every year. Now WishReminder makes me look culturally aware AND organized. My clients think I\'m a genius.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Sales Manager',
      company: 'Growth Inc',
      content: 'My response rates went up 40% because people actually believe I remember their birthdays now. Shh, don\'t tell them it\'s AI.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emma Davis',
      role: 'Business Owner',
      company: 'Startup Hub',
      content: 'Finally, a tool that remembers important dates better than I remember where I put my keys. 10/10 would recommend to my therapist.',
      rating: 5,
      avatar: 'ED'
    }
  ]

  const integrations = [
    { name: 'Gmail', icon: Mail, status: 'Available', link: '/integrations/gmail' },
    { name: 'Outlook', icon: Mail, status: 'Available', link: '/integrations/outlook' },
    { name: 'LinkedIn', icon: Linkedin, status: 'Pro', link: '/integrations/linkedin' },
    { name: 'Google Sheets', icon: FileSpreadsheet, status: 'Available', link: '/integrations/google-sheets' },
    { name: 'Lemlist', icon: Target, status: 'Pro', link: '/integrations/lemlist' },
    { name: 'Outreach.io', icon: Target, status: 'Pro', link: '/integrations/outreach' }
  ]

  const stats = [
    { label: 'Messages Sent', value: '2.5M+' },
    { label: 'Happy Users', value: '15K+' },
    { label: 'Response Rate', value: '68%' },
    { label: 'Time Saved', value: '10K+ hrs' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
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
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-700 border-orange-200">
              🎉 Now with AI that actually gets your humor
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stop Being That Person Who
              <span className="bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent"> Forgets Birthdays </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Finally, an AI that remembers holidays better than your mom remembers your childhood embarrassments. 
              We'll help you send the perfect "Happy Diwali!" without accidentally wishing someone "Happy Divorce!" 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Not Be a Terrible Friend
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Because "sorry I forgot your birthday" only works so many times before people start questioning your friendship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plays Nice With Your Other Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Because you already have 47 different apps and we're not trying to be number 48 that doesn't talk to anyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Link key={index} to={integration.link}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <integration.icon className="h-8 w-8 mx-auto mb-3 text-gray-600 group-hover:text-orange-600 transition-colors" />
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{integration.name}</h3>
                  <Badge variant={integration.status === 'Pro' ? 'outline' : 'default'} className="text-xs">
                    {integration.status}
                  </Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              People Actually Like Us (Shocking, We Know)
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real reviews from real people who are probably way more organized than you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Stop Being the Forgetful Friend?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of people who finally have their act together (at least when it comes to remembering birthdays).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm bg-white"
            />
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
          </div>
          <p className="text-orange-100 text-sm">
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
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <Link to="/features" className="block text-gray-400 hover:text-white">Features</Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white">Pricing</Link>
                <Link to="/integrations" className="block text-gray-400 hover:text-white">Integrations</Link>
                <Link to="/api" className="block text-gray-400 hover:text-white">API</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white">Blog</Link>
                <Link to="/careers" className="block text-gray-400 hover:text-white">Careers</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white">Help Center</Link>
                <Link to="/docs" className="block text-gray-400 hover:text-white">Documentation</Link>
                <Link to="/status" className="block text-gray-400 hover:text-white">Status</Link>
                <Link to="/privacy" className="block text-gray-400 hover:text-white">Privacy</Link>
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