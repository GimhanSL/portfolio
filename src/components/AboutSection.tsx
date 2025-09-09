import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 text-lg">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-6">Who I am ?</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Hello! My name is Gimhan, and I’m a game artist specializing in pixel art and low-poly 3D assets. Over the past two years, I’ve completed around 40 projects, consistently delivering results that made my clients happy. I can create any type of 3D asset based on your preferences and enhance it with my own creativity. You can explore some of my projects below.
          </p>
        </div>
        {/* Right: Portrait */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-[360px] aspect-square">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src="/portfolio.png"
                alt="Portrait"
                fill
                className="object-cover object-top"
                style={{ objectPosition: '50% 30%' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
