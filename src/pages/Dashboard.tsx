import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Activity, 
  Calendar, 
  Bell,
  TrendingUp,
  Heart,
  Thermometer,
  Clock
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your patient overview and recent activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-medical-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">247</div>
            <p className="text-xs text-medical-success">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Activity className="h-4 w-4 text-medical-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">89</div>
            <p className="text-xs text-medical-warning">
              <Clock className="inline w-3 h-3 mr-1" />
              5 critical cases
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-medical-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">32</div>
            <p className="text-xs text-muted-foreground">Today's schedule</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <Bell className="h-4 w-4 text-medical-error" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">7</div>
            <p className="text-xs text-medical-error">3 urgent alerts</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Vital Signs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-medical-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest patient interactions and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-success rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Patient John Doe checked in</p>
                  <p className="text-xs text-muted-foreground">Room 204 • 2 minutes ago</p>
                </div>
              </div>
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Completed
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-warning rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Medication reminder sent</p>
                  <p className="text-xs text-muted-foreground">Patient Sarah Wilson • 5 minutes ago</p>
                </div>
              </div>
              <Badge variant="outline" className="border-medical-warning text-medical-warning">
                Pending
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Vital signs updated</p>
                  <p className="text-xs text-muted-foreground">Room 101 • 8 minutes ago</p>
                </div>
              </div>
              <Badge variant="outline" className="border-medical-primary text-medical-primary">
                Updated
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Patient Vital Signs Overview */}
        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-medical-error" />
              Critical Vitals Monitor
            </CardTitle>
            <CardDescription>Patients requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-medical-error/20 bg-medical-error/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-medical-error" />
                  <span className="font-medium">Heart Rate</span>
                </div>
                <span className="text-sm font-mono text-medical-error">142 BPM</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Room 105 - High</p>
            </div>

            <div className="p-4 border border-medical-warning/20 bg-medical-warning/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-medical-warning" />
                  <span className="font-medium">Temperature</span>
                </div>
                <span className="text-sm font-mono text-medical-warning">102.5°F</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Room 208 - Elevated</p>
            </div>

            <div className="p-4 border border-medical-success/20 bg-medical-success/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-medical-success" />
                  <span className="font-medium">Blood Pressure</span>
                </div>
                <span className="text-sm font-mono text-medical-success">120/80</span>
              </div>
              <Progress value={60} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Room 302 - Normal</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}