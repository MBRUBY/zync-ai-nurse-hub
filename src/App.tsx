import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TopNavbar } from "./components/TopNavbar";
import { AppSidebar } from "./components/AppSidebar";
import { MainContent } from "./components/MainContent";
import { AIChat } from "./components/AIChat";
import Dashboard from "./pages/Dashboard";
import Ecosystem from "./pages/Ecosystem";
import Schedule from "./pages/Schedule";
import Alerts from "./pages/Alerts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full flex-col">
            <TopNavbar />
            <div className="flex flex-1">
              <AppSidebar />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainContent>
            </div>
            <AIChat />
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
