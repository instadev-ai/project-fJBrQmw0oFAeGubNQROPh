import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import ThemeToggle from "./theme/theme-toggle"
import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 md:block md:w-64">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <span className="font-semibold">Dashboard</span>
          </div>
          <ScrollArea className="flex-1">
            <nav className="flex flex-col gap-2 p-4">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Overview
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <Users className="h-4 w-4" />
                Customers
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </nav>
          </ScrollArea>
          <div className="border-t p-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex h-14 items-center border-b px-4">
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}