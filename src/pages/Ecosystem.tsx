import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Globe, Database, Shield, Zap, Cloud } from "lucide-react";

export default function Ecosystem() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Medical Ecosystem</h1>
        <p className="text-muted-foreground">
          Explore connected medical systems, data integrations, and network health.
        </p>
      </div>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-medical-primary" />
              Hospital Database
            </CardTitle>
            <CardDescription>Patient records and medical history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Online
              </Badge>
              <span className="text-sm text-muted-foreground">99.9% uptime</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-medical-accent" />
              Cloud Services
            </CardTitle>
            <CardDescription>Backup and remote access systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Synchronized
              </Badge>
              <span className="text-sm text-muted-foreground">Last sync: 2 min ago</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-medical-success" />
              Security Systems
            </CardTitle>
            <CardDescription>Data protection and access control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-medical-success text-medical-success">
                Secure
              </Badge>
              <span className="text-sm text-muted-foreground">0 threats detected</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Network Overview */}
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-medical-primary" />
            Network Overview
          </CardTitle>
          <CardDescription>Connected systems and data flow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connected Systems</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Electronic Health Records</span>
                  <Badge variant="outline" className="border-medical-success text-medical-success">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Laboratory Information System</span>
                  <Badge variant="outline" className="border-medical-success text-medical-success">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium">Pharmacy Management</span>
                  <Badge variant="outline" className="border-medical-warning text-medical-warning">Maintenance</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Data Flow Statistics</h4>
              <div className="space-y-3">
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Patient Records Processed</span>
                    <span className="font-mono text-sm">1,247</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Lab Results Integrated</span>
                    <span className="font-mono text-sm">89</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medication Orders</span>
                    <span className="font-mono text-sm">156</span>
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