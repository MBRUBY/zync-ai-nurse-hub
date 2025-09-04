import { Button } from "@/components/ui/button";
import { Globe, User, UserPlus } from "lucide-react";

export function TopNavbar() {
  return (
    <nav className="h-16 bg-background border-b border-border flex items-center justify-between px-6 shadow-sm">
      {/* Left side - Indian emblem and logo */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Indian National Emblem */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Lion Capital representation */}
              <circle cx="50" cy="20" r="8" fill="#FF9933" />
              <circle cx="35" cy="20" r="8" fill="#FF9933" />
              <circle cx="65" cy="20" r="8" fill="#FF9933" />
              <circle cx="20" cy="20" r="8" fill="#FF9933" />
              <circle cx="80" cy="20" r="8" fill="#FF9933" />
              {/* Base */}
              <rect x="15" y="35" width="70" height="15" fill="#138808" rx="2" />
              {/* Wheel */}
              <circle cx="50" cy="60" r="15" fill="none" stroke="#000080" strokeWidth="2" />
              <circle cx="50" cy="60" r="1" fill="#000080" />
              {/* Spokes */}
              {Array.from({ length: 24 }, (_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 50 + 12 * Math.cos(angle);
                const y1 = 60 + 12 * Math.sin(angle);
                const x2 = 50 + 8 * Math.cos(angle);
                const y2 = 60 + 8 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#000080"
                    strokeWidth="1"
                  />
                );
              })}
              {/* Base text area */}
              <rect x="20" y="80" width="60" height="8" fill="#138808" rx="1" />
            </svg>
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