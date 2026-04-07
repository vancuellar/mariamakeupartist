import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-charcoal text-cream">
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
            <p className="font-body text-[9px] uppercase tracking-[0.4em] text-cream/40 mb-3">
              Artista & Fundadora
            </p>
            <p className="font-body text-[9px] uppercase tracking-[0.3em] text-cream/30 mb-8">
              Artist & Founder
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-10">
              Maria{" "}
              <span className="italic text-primary">Neunfeld</span>
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary mb-3">Filosofía</p>
                <p className="font-body text-sm leading-[1.9] text-cream/70">
                  La belleza es una arquitectura de luz y sombra. No se trata de ocultar, sino de revelar
                  la luminosidad inherente de cada persona. Con un enfoque enraizado en el mundo editorial
                  de alta moda, fundé mi estudio para cerrar la brecha entre la precisión de pasarela
                  y la atemporalidad nupcial.
                </p>
              </div>
              <p className="font-body text-sm leading-[1.9] text-cream/50 italic">
                Beauty is an architecture of light and shadow. It is not about masking, but about revealing
                the inherent luminosity of each person. With over years of experience in bridal and editorial
                work, I invite you to experience a morning ritual that is calm, luxurious, and unequivocally yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
