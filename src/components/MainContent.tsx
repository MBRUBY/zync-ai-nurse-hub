import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 bg-background min-h-screen pb-32">
      <div className="p-8">
        {children}
      </div>
    </main>
  );
}