
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks, assetLinks } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-56px)] py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="/c3.png"
          alt="Pixel art cityscape"
          fill
          className="object-cover opacity-20"
          data-ai-hint="pixel art city"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-foreground leading-tight">
          I <span className="text-white bg-primary px-2 py-1 rounded-md">create</span><br/> <br/> what others can <span className="text-white bg-primary px-2 py-1 rounded-md">dream</span><br/> <br/> of playing.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary mx-auto">
            
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
           <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              {assetLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative rounded-none border-2 border-foreground bg-primary text-white shadow-[4px_4px_0_0_hsl(var(--accent))] hover:shadow-[2px_2px_0_0_hsl(var(--accent))] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-headline tracking-wide h-10 px-4 py-2 text-sm"
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </button>
              ))}
          </div>
          <div className="mt-12 text-center">
              <Link href="#projects">
                  <Button variant="ghost" className="animate-bounce">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      View My Work
                  </Button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
