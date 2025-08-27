
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks, assetLinks } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-56px)] py-20 px-4">
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Pixel art cityscape"
          fill
          className="object-cover opacity-20"
          data-ai-hint="pixel art city"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground whitespace-nowrap">
            Gimhan Sajee
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary mx-auto">
            A passionate game artist crafting immersive worlds and unforgettable characters.
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
           <div className="mt-6 flex flex-wrap justify-center gap-4">
              {assetLinks.map((link) => (
                   <Button key={link.name} variant="secondary" asChild>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="mr-2 h-4 w-4" />
                          {link.name}
                      </Link>
                  </Button>
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
