import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Who I am ?</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            I am a game artist focused on crafting immersive worlds, characters, and assets across pixel art and 3D.
            I love blending strong color palettes with playful, retro-inspired aesthetics.
          </p>
        </div>
        {/* Right: Portrait */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/portrait.png"
              alt="Portrait"
              width={360}
              height={360}
              className="object-cover bg-card border-4 border-foreground shadow-[6px_6px_0_0_hsl(var(--accent))] rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
