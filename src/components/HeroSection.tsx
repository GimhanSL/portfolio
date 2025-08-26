
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { socialLinks, assetLinks } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-56px)] text-center py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="https://picsum.photos/200"
            alt="Artist Portrait"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg object-cover"
            data-ai-hint="artist portrait"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
          Your Name
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
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
        <div className="mt-12">
            <Link href="#projects">
                <Button variant="ghost" className="animate-bounce">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    View My Work
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
