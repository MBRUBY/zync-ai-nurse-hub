import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Mic, Send } from "lucide-react";

export function AIChat() {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Handle voice recording logic here
  };

  return (
    <div className="fixed bottom-6 left-64 right-8 flex justify-center">
      <div className="bg-card rounded-3xl shadow-floating border border-border p-4 w-full max-w-4xl">
        <div className="flex items-center gap-3">
          {/* Upload Button */}
          <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full w-10 h-10 hover:bg-accent/50"
          >
            <Plus className="w-5 h-5" />
          </Button>

          {/* Chat Input */}
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about patient care, medications, or medical procedures..."
              className="pr-12 py-3 text-base border-0 bg-accent/30 rounded-2xl focus-visible:ring-2 focus-visible:ring-medical-primary"
            />
            <Button
              onClick={handleSend}
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-xl hover:bg-medical-primary hover:text-white"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Voice Button */}
          <Button 
            size="icon" 
            variant={isRecording ? "default" : "outline"}
            onClick={toggleRecording}
            className={`rounded-full w-10 h-10 ${
              isRecording 
                ? "bg-medical-error hover:bg-medical-error/90 text-white animate-pulse" 
                : "hover:bg-accent/50"
            }`}
          >
            <Mic className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}