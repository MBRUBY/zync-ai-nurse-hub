import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, AlertCircle, Info, Clock, X } from "lucide-react";

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Patient Vital Signs Critical",
      message: "Patient in Room 105 showing abnormal heart rate (142 BPM)",
      time: "2 minutes ago",
      room: "Room 105",
      patient: "John Smith"
    },
    {
      id: 2,
      type: "warning",
      title: "Medication Due",
      message: "Patient Sarah Wilson's medication is due for administration",
      time: "5 minutes ago",
      room: "Room 208",
      patient: "Sarah Wilson"
    },
    {
      id: 3,
      type: "urgent",
      title: "Emergency Call",
      message: "Emergency assistance requested in ICU Ward",
      time: "8 minutes ago",
      room: "ICU-A",
      patient: "Emergency"
    },
    {
      id: 4,
      type: "info",
      title: "Lab Results Available",
      message: "Blood test results ready for review - Patient Michael Brown",
      time: "15 minutes ago",
      room: "Room 302",
      patient: "Michael Brown"
    },
    {
      id: 5,
      type: "warning",
      title: "Equipment Maintenance",
      message: "Ventilator in Room 204 requires scheduled maintenance",
      time: "1 hour ago",
      room: "Room 204",
      patient: "Equipment Alert"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical": return <AlertTriangle className="w-5 h-5 text-medical-error" />;
      case "urgent": return <AlertCircle className="w-5 h-5 text-medical-error" />;
      case "warning": return <Bell className="w-5 h-5 text-medical-warning" />;
      case "info": return <Info className="w-5 h-5 text-medical-primary" />;
      default: return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical": return "border-medical-error/20 bg-medical-error/5";
      case "urgent": return "border-medical-error/20 bg-medical-error/5";
      case "warning": return "border-medical-warning/20 bg-medical-warning/5";
      case "info": return "border-medical-primary/20 bg-medical-primary/5";
      default: return "border-border bg-background";
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "critical": return "border-medical-error text-medical-error";
      case "urgent": return "border-medical-error text-medical-error";
      case "warning": return "border-medical-warning text-medical-warning";
      case "info": return "border-medical-primary text-medical-primary";
      default: return "border-muted-foreground text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
        <p className="text-muted-foreground">
          Monitor critical alerts, warnings, and notifications across the medical facility.
        </p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-medical-error/20 bg-medical-error/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-medical-error" />
              <div>
                <div className="text-2xl font-bold text-medical-error">2</div>
                <div className="text-sm text-medical-error">Critical</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-medical-warning/20 bg-medical-warning/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-medical-warning" />
              <div>
                <div className="text-2xl font-bold text-medical-warning">3</div>
                <div className="text-sm text-medical-warning">Warnings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-medical-primary/20 bg-medical-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Info className="w-6 h-6 text-medical-primary" />
              <div>
                <div className="text-2xl font-bold text-medical-primary">5</div>
                <div className="text-sm text-medical-primary">Info</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-medical-success/20 bg-medical-success/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-medical-success" />
              <div>
                <div className="text-2xl font-bold text-medical-success">12</div>
                <div className="text-sm text-medical-success">Resolved</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-medical-primary" />
            Recent Alerts
          </CardTitle>
          <CardDescription>Latest notifications and alerts requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-4 rounded-xl border ${getAlertColor(alert.type)} transition-all duration-200 hover:shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{alert.title}</h4>
                        <Badge variant="outline" className={getBadgeColor(alert.type)}>
                          {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {alert.time}
                        </span>
                        <span>{alert.room}</span>
                        <span>{alert.patient}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}