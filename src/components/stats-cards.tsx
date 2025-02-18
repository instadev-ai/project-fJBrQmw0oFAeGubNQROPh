import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Users, CreditCard, Activity } from "lucide-react"

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden border-none bg-white/50 backdrop-blur-xl transition-all hover:shadow-lg dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <div className="rounded-full bg-green-500/20 p-2.5">
            <CreditCard className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">$45,231.89</div>
          <div className="flex items-center gap-1 text-sm text-green-500">
            <ArrowUpRight className="h-4 w-4" />
            <span>20.1%</span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none bg-white/50 backdrop-blur-xl transition-all hover:shadow-lg dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <div className="rounded-full bg-blue-500/20 p-2.5">
            <Users className="h-4 w-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">+2,350</div>
          <div className="flex items-center gap-1 text-sm text-blue-500">
            <ArrowUpRight className="h-4 w-4" />
            <span>180.1%</span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none bg-white/50 backdrop-blur-xl transition-all hover:shadow-lg dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <div className="rounded-full bg-purple-500/20 p-2.5">
            <Activity className="h-4 w-4 text-purple-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-500">+573</div>
          <div className="flex items-center gap-1 text-sm text-purple-500">
            <ArrowUpRight className="h-4 w-4" />
            <span>201</span>
            <span className="text-muted-foreground">since last hour</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none bg-white/50 backdrop-blur-xl transition-all hover:shadow-lg dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <div className="rounded-full bg-orange-500/20 p-2.5">
            <ArrowUpRight className="h-4 w-4 text-orange-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-500">15.3%</div>
          <div className="flex items-center gap-1 text-sm text-orange-500">
            <ArrowUpRight className="h-4 w-4" />
            <span>2.5%</span>
            <span className="text-muted-foreground">vs last week</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}