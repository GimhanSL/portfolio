
import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Gimhan Sajee. All rights reserved.
        </p>
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
