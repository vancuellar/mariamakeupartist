import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <div className="animate-on-scroll order-1">
            <div className="aspect-[3/4] overflow-hidden max-w-md mx-auto md:mx-0">
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

          {/* Text */}
          <div className="animate-on-scroll order-2" style={{ transitionDelay: "150ms" }}>
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
              Sobre Mí / About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-10">
              Maria Neunfeld
            </h2>
            <div className="space-y-6 font-body text-sm leading-[1.8] text-muted-foreground">
              <p>
                Soy maquillista profesional con base en Playa del Carmen, especializándome en maquillaje
                nupcial y de eventos en la hermosa Riviera Maya. Mi pasión es realzar la belleza natural
                de cada persona, creando looks impecables que perduren toda la celebración.
              </p>
              <p className="italic">
                I'm a professional makeup artist based in Playa del Carmen, specializing in bridal and
                event makeup across the beautiful Riviera Maya. My passion is enhancing each person's
                natural beauty, creating flawless looks that last throughout the celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
