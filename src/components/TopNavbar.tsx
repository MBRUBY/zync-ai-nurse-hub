import { Button } from "@/components/ui/button";
import { Globe, User, UserPlus } from "lucide-react";

export function TopNavbar() {
  return (
    <nav className="h-16 bg-background border-b border-border flex items-center justify-between px-6 shadow-sm">
      {/* Left side - Indian emblem and logo */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Indian National Emblem placeholder */}
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
          </div>
          
          {/* Website Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-medical-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded opacity-90"></div>
            </div>
            <span className="text-lg font-semibold text-foreground">Zync</span>
          </div>
        </div>
      </div>

      {/* Right side - Language selector and auth buttons */}
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-sm">English</span>
        </Button>

        {/* Login/Register */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <User className="w-4 h-4" />
            Login
          </Button>
          <Button size="sm" className="gap-2 bg-medical-primary hover:bg-medical-primary-dark">
            <UserPlus className="w-4 h-4" />
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}