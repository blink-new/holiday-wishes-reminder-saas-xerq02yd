import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import {
  CheckCircle,
  X,
  Star,
  Zap,
  Crown,
  ArrowRight,
  Bell,
  Users,
  MessageSquare,
  Sparkles,
  Calendar,
  Mail,
  Linkedin,
  FileSpreadsheet,
  Target,
  BarChart3,
  Heart,
  Beaker
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      description: 'For commitment-phobes and penny-pinchers',
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: [
        { name: 'Up to 50 contacts (quality over quantity)', included: true },
        { name: 'Basic holiday reminders (the big ones)', included: true },
        { name: 'Email integration (Gmail/Outlook)', included: true },
        { name: 'Basic templates (nothing fancy)', included: true },
        { name: '14-day trial of all features (taste the good life)', included: true },
        { name: 'Community support (aka forums)', included: true },
        { name: 'LinkedIn integration', included: false },
        { name: 'AI content generation', included: false },
        { name: 'Advanced integrations', included: false },
        { name: 'Analytics & reporting', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Start Free (Obviously)',
      popular: false
    },
    {
      name: 'Starter',
      description: 'For people who are kinda serious about this',
      price: { monthly: 9.99, annual: 99.99 },
      badge: 'Most Popular',
      features: [
        { name: 'Up to 1,000 contacts (that\'s a lot of friends)', included: true },
        { name: 'All holiday reminders (even the weird ones)', included: true },
        { name: 'Email integration (Gmail/Outlook)', included: true },
        { name: 'AI content generation (robot writes for you)', included: true },
        { name: 'Custom templates (make it yours)', included: true },
        { name: 'Google Sheets sync (spreadsheet heaven)', included: true },
        { name: 'Basic analytics (see who ignores you)', included: true },
        { name: 'Email support (we actually respond)', included: true },
        { name: 'LinkedIn integration', included: false },
        { name: 'Advanced automation tools', included: false },
        { name: 'Sentiment analysis', included: false }
      ],
      cta: 'Get Started (Do It)',
      popular: true
    },
    {
      name: 'Pro',
      description: 'For people who have their life together',
      price: { monthly: 24.99, annual: 249.99 },
      badge: 'Best Value',
      features: [
        { name: 'Unlimited contacts (social butterfly mode)', included: true },
        { name: 'All holiday reminders (literally all of them)', included: true },
        { name: 'All email integrations (every platform ever)', included: true },
        { name: 'Advanced AI content generation (scary good)', included: true },
        { name: 'LinkedIn integration & scraping (legal stalking)', included: true },
        { name: 'Lemlist & Outreach.io integration (fancy tools)', included: true },
        { name: 'Advanced analytics & reporting (data nerd paradise)', included: true },
        { name: 'Sentiment analysis (are they mad at you?)', included: true },
        { name: 'AI Lab (experimental weird stuff)', included: true },
        { name: 'Priority support (we answer first)', included: true },
        { name: 'Custom integrations (whatever you want)', included: true }
      ],
      cta: 'Go Pro (You Know You Want To)',
      popular: false
    }
  ]

  const competitors = [
    {
      feature: 'Holiday Reminders',
      wishreminder: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'AI Content Generation',
      wishreminder: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'LinkedIn Integration',
      wishreminder: true,
      competitor1: true,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Multi-Channel Sending',
      wishreminder: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Sentiment Analysis',
      wishreminder: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Google Sheets Sync',
      wishreminder: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Message Center',
      wishreminder: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Starting Price',
      wishreminder: 'Free',
      competitor1: '$29/mo',
      competitor2: '$19/mo',
      competitor3: '$39/mo'
    }
  ]

  const faqs = [
    {
      question: 'What happens during the 14-day free trial?',
      answer: 'You get full access to all Pro features including LinkedIn integration, AI content generation, and advanced analytics. No credit card required.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing differences.'
    },
    {
      question: 'What integrations are included?',
      answer: 'Starter includes Gmail, Outlook, and Google Sheets. Pro adds LinkedIn, Lemlist, Outreach.io, and custom integrations via API.'
    },
    {
      question: 'How does the AI content generation work?',
      answer: 'Our AI analyzes contact profiles, relationship context, and cultural factors to generate personalized messages that feel authentic and appropriate.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade security with encryption at rest and in transit. We\'re SOC 2 compliant and never share your data with third parties.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment in full.'
    }
  ]

  const getPrice = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly
    if (price === 0) return 'Free'
    if (isAnnual) return `$${price}/year`
    return `$${price}/month`
  }

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.price.annual === 0) return null
    const monthlyCost = plan.price.monthly * 12
    const savings = monthlyCost - plan.price.annual
    return Math.round((savings / monthlyCost) * 100)
  }

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
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
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
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing That Won't Make You Cry
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            No hidden fees, no "enterprise" nonsense. Just honest pricing for people who want to remember birthdays.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Annual
            </span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Save up to 17%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-orange-500 shadow-xl' : 'border shadow-lg'}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    {plan.name === 'Free' && <Zap className="h-8 w-8 mx-auto text-gray-600" />}
                    {plan.name === 'Starter' && <Star className="h-8 w-8 mx-auto text-orange-500" />}
                    {plan.name === 'Pro' && <Crown className="h-8 w-8 mx-auto text-purple-600" />}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-gray-900">
                      {getPrice(plan)}
                    </div>
                    {plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-600 mt-1">
                        {isAnnual ? 'billed annually' : 'billed monthly'}
                        {isAnnual && getSavings(plan) && (
                          <span className="text-green-600 ml-2">
                            (Save {getSavings(plan)}%)
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/signup">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See how WishReminder stacks up against the competition
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <Bell className="h-4 w-4 text-orange-500" />
                        <span>WishReminder</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Competitor A</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Competitor B</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Competitor C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {competitors.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.wishreminder === 'boolean' ? (
                          row.wishreminder ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium text-green-600">{row.wishreminder}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.competitor1 === 'boolean' ? (
                          row.competitor1 ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.competitor1}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.competitor2 === 'boolean' ? (
                          row.competitor2 ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.competitor2}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.competitor3 === 'boolean' ? (
                          row.competitor3 ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.competitor3}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of professionals who never miss important moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Contact Sales
            </Button>
          </div>
          <p className="text-orange-100 text-sm mt-6">
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
              <p className="text-gray-400">
                The AI-powered platform for automated holiday and birthday reminders.
              </p>
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