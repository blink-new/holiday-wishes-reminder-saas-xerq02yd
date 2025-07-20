import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  LayoutDashboard,
  Users,
  Bell,
  MessageSquare,
  Sparkles,
  BarChart3,
  Settings,
  Calendar,
  Mail,
  Zap,
  FileText,
  Target,
  Inbox,
  Reply,
  Sheet,
  Send,
  Beaker,
  Heart,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    current: false
  },
  {
    name: 'Contacts',
    href: '/contacts',
    icon: Users,
    current: false
  },
  {
    name: 'Reminders',
    href: '/reminders',
    icon: Bell,
    current: false
  },
  {
    name: 'Message Center',
    href: '/messages',
    icon: MessageSquare,
    current: false,
    badge: '3'
  },
  {
    name: 'AI Content',
    href: '/ai-content',
    icon: Sparkles,
    current: false
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    current: false
  }
]

const integrationsMenu = [
  {
    name: 'Email Clients',
    items: [
      { name: 'Gmail', href: '/integrations/gmail', icon: Mail },
      { name: 'Outlook', href: '/integrations/outlook', icon: Mail }
    ]
  },
  {
    name: 'Automation Tools',
    items: [
      { name: 'Lemlist', href: '/integrations/lemlist', icon: Send },
      { name: 'Outreach.io', href: '/integrations/outreach', icon: Target }
    ]
  },
  {
    name: 'Data & Sync',
    items: [
      { name: 'Google Sheets', href: '/integrations/sheets', icon: Sheet },
      { name: 'LinkedIn', href: '/integrations/linkedin', icon: Users }
    ]
  }
]

const toolsMenu = [
  {
    name: 'Templates',
    href: '/templates',
    icon: FileText
  },
  {
    name: 'Campaigns',
    href: '/campaigns',
    icon: Target
  },
  {
    name: 'Holiday Calendar',
    href: '/holidays',
    icon: Calendar
  }
]

const proFeatures = [
  {
    name: 'AI Lab',
    href: '/ai-lab',
    icon: Beaker,
    badge: 'Pro'
  },
  {
    name: 'Sentiment Analysis',
    href: '/sentiment',
    icon: Heart,
    badge: 'Pro'
  }
]

export function Sidebar() {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>(['integrations'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const isActive = (href: string) => location.pathname === href

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
            <Bell className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-900">WishReminder</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive(item.href)
                  ? 'bg-orange-50 text-orange-700 border-r-2 border-orange-500'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive(item.href) ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
              {item.badge && (
                <Badge variant="secondary" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Integrations */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => toggleSection('integrations')}
          >
            <div className="flex items-center">
              <Zap className="mr-3 h-5 w-5 text-gray-400" />
              Integrations
            </div>
            {expandedSections.includes('integrations') ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {expandedSections.includes('integrations') && (
            <div className="ml-6 mt-1 space-y-1">
              {integrationsMenu.map((group) => (
                <div key={group.name}>
                  <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {group.name}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        'group flex items-center px-3 py-2 text-sm rounded-md transition-colors',
                        isActive(item.href)
                          ? 'bg-orange-50 text-orange-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      <item.icon className="mr-3 h-4 w-4 text-gray-400" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-4" />

        {/* Tools */}
        <div>
          <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tools
          </div>
          <div className="space-y-1">
            {toolsMenu.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive(item.href)
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Pro Features */}
        <div>
          <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pro Features
          </div>
          <div className="space-y-1">
            {proFeatures.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive(item.href)
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                {item.name}
                <Badge variant="outline" className="ml-auto text-xs">
                  {item.badge}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Settings */}
        <Link
          to="/settings"
          className={cn(
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
            isActive('/settings')
              ? 'bg-orange-50 text-orange-700'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
          )}
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Settings
        </Link>
      </nav>
    </div>
  )
}