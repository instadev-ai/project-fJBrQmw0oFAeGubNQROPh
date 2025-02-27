import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./components/theme/theme-provider"
import DashboardLayout from "./components/dashboard-layout"
import StatsCards from "./components/stats-cards"
import AnalyticsPage from "./pages/Analytics"
import { useState } from "react"

const queryClient = new QueryClient()

function Overview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Welcome back, Sarah!
        </h2>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>
      <StatsCards />
    </div>
  )
}

function Customers() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Customers
        </h2>
        <p className="text-muted-foreground">
          Manage and view your customer information.
        </p>
      </div>
      {/* Customer content will go here */}
    </div>
  )
}

function Settings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your account preferences and settings.
        </p>
      </div>
      {/* Settings content will go here */}
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState("overview")

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <Overview />
      case "analytics":
        return <AnalyticsPage />
      case "customers":
        return <Customers />
      case "settings":
        return <Settings />
      default:
        return <Overview />
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="app-theme">
        <DashboardLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {renderPage()}
        </DashboardLayout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App