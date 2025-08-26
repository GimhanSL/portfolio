
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-screen-md text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="mailto:hello@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
