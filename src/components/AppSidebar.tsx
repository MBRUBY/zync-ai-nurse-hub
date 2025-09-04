import { useState } from "react";
import { 
  Activity, 
  Home, 
  Network, 
  Calendar, 
  Bell, 
  Settings,
  Sun,
  Moon
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Ecosystem", url: "/ecosystem", icon: Network },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Alerts", url: "/alerts", icon: Bell },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isActive = (path: string) => currentPath === path;
  
  const getNavClasses = (active: boolean) => 
    active 
      ? "bg-medical-primary text-white font-medium shadow-medical" 
      : "hover:bg-accent/50 text-foreground";

  return (
    <Sidebar className={`${collapsed ? "w-20" : "w-72"} border-r border-border bg-background`}>
      <SidebarContent className="flex flex-col h-full">
        {/* Top Section - Branding */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            {/* Vital Signs Icon Box */}
            <div className="w-12 h-12 bg-medical-primary rounded-xl flex items-center justify-center shadow-medical">
              <Activity className="w-6 h-6 text-white" />
            </div>
            
            {/* Branding Text */}
            {!collapsed && (
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-foreground">Zync</h1>
                <p className="text-sm text-muted-foreground">Prakash Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Middle Section - Navigation */}
        <SidebarGroup className="flex-1 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${getNavClasses(isActive(item.url))}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section - Controls */}
        <div className="p-6 border-t border-border space-y-4">
          {/* Light/Dark Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch 
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-medical-primary"
              />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>
            {!collapsed && (
              <span className="text-sm text-muted-foreground">
                {isDarkMode ? "Dark" : "Light"} Mode
              </span>
            )}
          </div>

          {/* Settings Button */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 hover:bg-accent/50"
          >
            <Settings className="w-4 h-4" />
            {!collapsed && <span>Settings</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}