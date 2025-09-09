
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Gimhan Sajee',
  description: 'A portfolio for a video game artist, showcasing games, 2D pixel art, and 3D assets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Jersey+15&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="relative isolate min-h-screen">
          {/* <div 
            className="fixed inset-0 -z-10 bg-cover bg-center" 
            style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=10')"}} 
            data-ai-hint="pixel art game map"
          /> */}
          <div className="fixed inset-0 -z-10 bg-background/60 backdrop-blur-sm" />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
