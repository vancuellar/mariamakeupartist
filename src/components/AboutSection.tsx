import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-on-scroll order-2 md:order-1">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Sobre Mí / About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8">
              Maria Neunfeld
            </h2>
            <div className="space-y-4 font-body text-sm leading-relaxed text-charcoal-light">
              <p>
                Soy maquillista profesional con base en Playa del Carmen, especializándome en maquillaje
                nupcial y de eventos en la hermosa Riviera Maya. Mi pasión es realzar la belleza natural
                de cada persona, creando looks impecables que perduren toda la celebración.
              </p>
              <p className="italic text-muted-foreground">
                I'm a professional makeup artist based in Playa del Carmen, specializing in bridal and
                event makeup across the beautiful Riviera Maya. My passion is enhancing each person's
                natural beauty, creating flawless looks that last throughout the celebration.
              </p>
            </div>
            <div className="w-12 h-px bg-primary mt-8" />
          </div>

          <div className="animate-on-scroll order-1 md:order-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutPortrait}
                alt="Maria Neunfeld - Makeup Artist"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
