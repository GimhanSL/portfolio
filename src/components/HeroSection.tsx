
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { socialLinks, assetLinks } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-56px)] py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold font-headline text-primary">
            Gimhan Sajee Kumara
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
            A passionate game artist crafting immersive worlds and unforgettable characters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
           <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              {assetLinks.map((link) => (
                   <Button key={link.name} variant="secondary" asChild>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="mr-2 h-4 w-4" />
                          {link.name}
                      </Link>
                  </Button>
              ))}
          </div>
          <div className="mt-12 text-center md:text-left">
              <Link href="#projects">
                  <Button variant="ghost" className="animate-bounce">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      View My Work
                  </Button>
              </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
            <Image
                src="https://picsum.photos/300/400"
                alt="Artist Portrait"
                width={300}
                height={400}
                className="object-cover"
                data-ai-hint="pixel art character"
                priority
            />
        </div>
      </div>
    </section>
  );
}
