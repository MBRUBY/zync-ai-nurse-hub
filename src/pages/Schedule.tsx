import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, MapPin, Plus } from "lucide-react";

export default function Schedule() {
  const appointments = [
    {
      id: 1,
      time: "09:00 AM",
      patient: "John Doe",
      room: "Room 204",
      type: "Consultation",
      status: "confirmed",
      duration: "30 min"
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Sarah Wilson",
      room: "Room 105",
      type: "Follow-up",
      status: "pending",
      duration: "15 min"
    },
    {
      id: 3,
      time: "11:45 AM",
      patient: "Michael Brown",
      room: "Room 302",
      type: "Emergency",
      status: "urgent",
      duration: "45 min"
    },
    {
      id: 4,
      time: "02:00 PM",
      patient: "Emily Davis",
      room: "Room 208",
      type: "Routine Check",
      status: "confirmed",
      duration: "20 min"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "border-medical-success text-medical-success";
      case "pending": return "border-medical-warning text-medical-warning";
      case "urgent": return "border-medical-error text-medical-error";
      default: return "border-muted-foreground text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Schedule</h1>
            <p className="text-muted-foreground">
              Manage your appointments and patient schedule for today.
            </p>
          </div>
          <Button className="gap-2 bg-medical-primary hover:bg-medical-primary-dark">
            <Plus className="w-4 h-4" />
            New Appointment
          </Button>
        </div>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-medical-primary" />
              Today's Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">12</div>
            <p className="text-sm text-muted-foreground">appointments scheduled</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-medical-accent" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">09:00</div>
            <p className="text-sm text-muted-foreground">John Doe - Room 204</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <User className="w-5 h-5 text-medical-success" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-sm text-muted-foreground">out of 12 appointments</p>
          </CardContent>
        </Card>
      </div>

      {/* Schedule List */}
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-medical-primary" />
            Today's Schedule
          </CardTitle>
          <CardDescription>All appointments for {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="flex items-center justify-between p-4 bg-accent/30 rounded-xl hover:bg-accent/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{appointment.time}</div>
                    <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                  </div>
                  
                  <div className="w-px h-12 bg-border"></div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-foreground">{appointment.patient}</div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {appointment.room}
                      </span>
                      <span>{appointment.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={getStatusColor(appointment.status)}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </Badge>
                  
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}