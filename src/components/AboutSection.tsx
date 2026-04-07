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
            <h2 className="font-pinyon text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-10">
              Maria Neunfeld
            </h2>

            <div className="space-y-6">
              <p className="font-body text-sm leading-[1.9] text-cream/70">
                Hola, soy Maria. Tengo 21 años, vengo de la frontera entre Paraguay y Brasil, llegué a Playa del Carmen en noviembre de 2024 enamorada de este lugar, del mar, de los sueños y de la rutina relajada.
              </p>
              <p className="font-body text-sm leading-[1.9] text-cream/70">
                El maquillaje me acompaña desde niña, crecí en el medio artístico como bailarina y reina de belleza, y fue cuando empecé a encantarme por el poder del maquillaje.
              </p>
              <p className="font-body text-sm leading-[1.9] text-cream/70">
                Me gusta transmitir seguridad a mis clientas y alumnas por medio de mi profesionalismo y amabilidad, mi objetivo en cada look que realizo es hacer con que se sientan plenas referente a cómo lucen y que así puedan disfrutar de ese momento especial.
              </p>
              <p className="font-body text-sm leading-[1.9] text-cream/70">
                Me encanta una piel limpia, delicada aunque sea un maquillaje intenso, siempre manteniendo la feminidad y belleza natural, resaltando los rasgos de cada una. ♡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
