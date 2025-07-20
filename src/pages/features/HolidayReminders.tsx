import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Bell,
  Calendar,
  Globe,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Gift,
  MapPin,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function HolidayReminders() {
  const features = [
    {
      icon: Globe,
      title: '200+ Holidays (Even the Obscure Ones)',
      description: 'From Christmas to "National Donut Day" - we track them all so you can be that person who remembers everything.'
    },
    {
      icon: Clock,
      title: 'Perfect Timing (Not 3 AM Messages)',
      description: 'Our AI knows not to wake people up with birthday wishes. Unlike your drunk uncle.'
    },
    {
      icon: Heart,
      title: 'Cultural Context (No More Awkward Mistakes)',
      description: 'We know the difference between Hanukkah and Kwanzaa so you don\'t have to Google it every year.'
    },
    {
      icon: Users,
      title: 'Relationship Detective Mode',
      description: 'Prioritizes holidays based on how much you actually care about each person (we won\'t tell).'
    },
    {
      icon: Sparkles,
      title: 'Mind-Reading Suggestions',
      description: 'AI suggests holidays you didn\'t even know existed. Prepare to look incredibly thoughtful.'
    },
    {
      icon: Gift,
      title: 'Make Up Your Own Holidays',
      description: 'Add "National Pizza Day" or "Anniversary of That Time We Got Lost" - we don\'t judge.'
    }
  ]

  const holidays = [
    { name: 'Christmas', date: 'Dec 25', regions: ['Global'], color: 'bg-red-500' },
    { name: 'Diwali', date: 'Nov 12', regions: ['India', 'Nepal'], color: 'bg-orange-500' },
    { name: 'Chinese New Year', date: 'Feb 10', regions: ['China', 'Singapore'], color: 'bg-red-600' },
    { name: 'Eid al-Fitr', date: 'Apr 21', regions: ['Global Muslim'], color: 'bg-green-500' },
    { name: 'Thanksgiving', date: 'Nov 23', regions: ['USA', 'Canada'], color: 'bg-orange-600' },
    { name: 'Hanukkah', date: 'Dec 18', regions: ['Global Jewish'], color: 'bg-blue-500' }
  ]

  const stats = [
    { label: 'Holidays Tracked', value: '200+', icon: Calendar },
    { label: 'Countries Covered', value: '195', icon: Globe },
    { label: 'Accuracy Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Time Zones', value: '24', icon: Clock }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'International Sales Manager',
      company: 'TechGlobal Inc',
      content: 'WishReminder helped me maintain relationships with clients across 15 countries. The cultural awareness is incredible.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Business Development',
      company: 'Growth Partners',
      content: 'Never missed a Ramadan or Eid greeting again. My Middle Eastern clients really appreciate the thoughtfulness.',
      rating: 5,
      avatar: 'AH'
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
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/20 to-red-800/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
                🎉 200+ Holidays (Yes, Even the Weird Ones)
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Stop Googling
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> "When is Diwali?" </span>
                at 11 PM
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We track 200+ holidays so you don't have to panic-search "Happy Ramadan in Arabic" every year. 
                Our AI knows the difference between Christmas and Kwanzaa, and won't let you embarrass yourself.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" asChild>
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
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Holiday Calendar Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Holidays</h3>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    6 this month
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {holidays.map((holiday, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`h-3 w-3 rounded-full ${holiday.color}`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{holiday.name}</div>
                        <div className="text-sm text-gray-500">{holiday.regions.join(', ')}</div>
                      </div>
                      <div className="text-sm font-medium text-gray-600">{holiday.date}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Next reminder in</span>
                    <span className="font-medium text-orange-600">2 days</span>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Diwali Reminder</div>
                    <div className="text-xs text-gray-600">Send wishes to 12 contacts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Holiday Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered system goes beyond simple date tracking to provide cultural context and personalized recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Holiday Reminders Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple 3-step process that ensures you never miss important celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Import Contacts</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your email, LinkedIn, or upload CSV files. Our AI analyzes contact profiles to understand cultural backgrounds and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Holiday Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system automatically identifies relevant holidays for each contact based on their location, culture, and relationship with you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Smart Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive timely reminders with AI-generated message suggestions. Send directly or customize before sending through your preferred platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Global Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how holiday reminders have transformed relationship management for our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white font-medium mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss Another Holiday
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start building stronger relationships with intelligent holiday reminders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              View All Features
            </Button>
          </div>
          <p className="text-orange-100 text-sm mt-6">
            14-day free trial • 200+ holidays included • No credit card required
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
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white text-sm">About</Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white text-sm">Pricing</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact</Link>
                <Link to="/careers" className="block text-gray-400 hover:text-white text-sm">Careers</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white text-sm">Help Center</Link>
                <Link to="/docs" className="block text-gray-400 hover:text-white text-sm">Documentation</Link>
                <Link to="/status" className="block text-gray-400 hover:text-white text-sm">Status</Link>
                <Link to="/privacy" className="block text-gray-400 hover:text-white text-sm">Privacy</Link>
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