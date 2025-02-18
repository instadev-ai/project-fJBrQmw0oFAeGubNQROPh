import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./components/theme/theme-provider"
import DashboardLayout from "./components/dashboard-layout"
import StatsCards from "./components/stats-cards"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="app-theme">
        <DashboardLayout>
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
        </DashboardLayout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App