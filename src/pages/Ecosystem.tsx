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
          Explore connected medical systems, diagnostic centers, nursing homes, pharmacies.
        </p>
      </div>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border shadow-card hover:shadow-medical transition-all duration-300">
        </Card>
      </div>
                  </div>
  );
}