import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Globe, Database, Shield, Zap, Cloud, Pill, Syringe, Activity } from "lucide-react";

export default function Ecosystem() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2 items-center text-center">
        <h1 className="text-3xl font-bold text-foreground">Medication</h1>
        <p className="text-muted-foreground">
          Manage and track prescribed medications, dosages, and reminders.
        </p>
      </div>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="ml-4 border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-medical-primary" />
              Captopril (Capoten)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Tonight
              </Badge>
              <span className="text-sm text-muted-foreground">After Dinner</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-medical-accent" />
              Enalapril (Vasotec)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Tomorrow
              </Badge>
              <span className="text-sm text-muted-foreground">Before Breakfast</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-medical-success" />
              Ramipril (Altace)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Tomorrow
              </Badge>
              <span className="text-sm text-muted-foreground">After Dinner</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Network Overview */}
      <Card className="ml-4 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-medical-primary" />
            Prescription Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Medicine Name</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Captopril (Capoten)</span>
                  <Badge variant="outline" className="border-medical-success text-medical-success">
                    Tonight
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Enalapril (Vasotec)</span>
                  <Badge variant="outline" className="border-medical-success text-medical-success">
                    Tomorrow
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Ramipril (Altace)</span>
                  <Badge variant="outline" className="border-medical-success text-medical-success">
                    Tomorrow
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Medicine Role</h4>
              <div className="space-y-3">
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Lowers blood pressure and increases the supply of blood to the heart.
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Relaxes and widens your blood vessels.</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Helps prevent future strokes, heart attacks and kidney problems.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
