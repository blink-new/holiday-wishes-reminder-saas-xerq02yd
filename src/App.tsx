import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import blink from '@/blink/client'

// Layout Components
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'

// Pages
import { Dashboard } from '@/pages/Dashboard'
import { Contacts } from '@/pages/Contacts'
import { MessageCenter } from '@/pages/MessageCenter'
import { AIContent } from '@/pages/AIContent'
import { Integrations } from '@/pages/Integrations'
import { LandingPage } from '@/pages/LandingPage'
import { Pricing } from '@/pages/Pricing'
import { Reminders } from '@/pages/Reminders'
import { Analytics } from '@/pages/Analytics'
import { Login } from '@/pages/Login'
import { Signup } from '@/pages/Signup'
import { Features } from '@/pages/Features'
import { HowItWorks } from '@/pages/HowItWorks'
import { Contact } from '@/pages/Contact'
import { HolidayReminders } from '@/pages/features/HolidayReminders'
import { HelpCenter } from '@/pages/support/HelpCenter'

// Auth state type
interface AuthState {
  user: any | null
  isLoading: boolean
  isAuthenticated: boolean
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

function App() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false
  })

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setAuthState({
        user: state.user,
        isLoading: state.isLoading,
        isAuthenticated: state.isAuthenticated
      })
    })

    return unsubscribe
  }, [])

  // Show loading spinner while auth is initializing
  if (authState.isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center mx-auto mb-4">
            <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600">Loading WishReminder...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/holiday-reminders" element={<HolidayReminders />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/contacts"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Contacts />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/messages"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <MessageCenter />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/ai-content"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <AIContent />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/integrations"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Integrations />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/integrations/:service"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Integrations />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/reminders"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Reminders />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/analytics"
            element={
              authState.isAuthenticated ? (
                <AppLayout>
                  <Analytics />
                </AppLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Redirect authenticated users to dashboard */}
          <Route
            path="/app"
            element={
              authState.isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App