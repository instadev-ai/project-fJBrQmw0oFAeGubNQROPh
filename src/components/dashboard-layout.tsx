import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import ThemeToggle from "./theme/theme-toggle"
import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Users,
  Sparkles,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function DashboardLayout({ children, currentPage, setCurrentPage }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sidebar */}
      <div className="hidden border-r border-r-gray-200/30 bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 dark:border-r-gray-700/30 md:block md:w-72">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-b-gray-200/30 px-6 dark:border-b-gray-700/30">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                SaasBoard
              </span>
            </div>
          </div>
          <ScrollArea className="flex-1 px-4">
            <nav className="flex flex-col gap-2 py-4">
              <div className="px-4 py-2">
                <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400">MAIN MENU</h2>
              </div>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400",
                  currentPage === "overview" && "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
                )}
                onClick={() => setCurrentPage("overview")}
              >
                <LayoutDashboard className="h-4 w-4" />
                Overview
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400",
                  currentPage === "customers" && "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
                )}
                onClick={() => setCurrentPage("customers")}
              >
                <Users className="h-4 w-4" />
                Customers
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400",
                  currentPage === "analytics" && "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
                )}
                onClick={() => setCurrentPage("analytics")}
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
              <div className="px-4 py-2 mt-4">
                <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400">SETTINGS</h2>
              </div>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400",
                  currentPage === "settings" && "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
                )}
                onClick={() => setCurrentPage("settings")}
              >
                <Settings className="h-4 w-4" />
                Preferences
              </Button>
            </nav>
          </ScrollArea>
          <div className="border-t border-t-gray-200/30 p-4 dark:border-t-gray-700/30">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex h-16 items-center border-b border-b-gray-200/30 bg-white/80 px-6 backdrop-blur-xl dark:bg-gray-900/80 dark:border-b-gray-700/30">
          <div className="md:hidden">
            <Sparkles className="h-6 w-6 text-purple-500" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>
        <main className="container mx-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}