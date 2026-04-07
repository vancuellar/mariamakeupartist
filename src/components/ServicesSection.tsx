import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    tag: "Nupcial",
    title: "Paquete Novia Clásico",
    titleEn: "Classic Bridal Package",
    features: [
      "Maquillaje profesional con base tradicional para un look natural y atemporal.",
      "Peinado profesional de larga duración, ideal para climas cálidos.",
    ],
  },
  {
    number: "02",
    tag: "Premium",
    title: "Paquete Novia Gold",
    titleEn: "Gold Bridal Package",
    features: [
      "Maquillaje con aerógrafo resistente al calor y la humedad.",
      "Peinado con productos premium anti-humedad para máxima duración.",
    ],
  },
  {
    number: "03",
    tag: "Social",
    title: "Paquete Quinceañera",
    titleEn: "Quinceañera Package",
    features: [
      "Maquillaje glamuroso y juvenil adaptado a tu estilo personal.",
      "Peinado elegante y resistente, perfecto para toda la celebración.",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-3">
            El Menú
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Experiencias Curadas
          </h2>
          <p className="font-heading text-base italic text-muted-foreground mt-2">Curated Experiences</p>
        </div>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="animate-on-scroll py-12 md:py-16 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 items-start"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="font-heading text-4xl md:text-5xl font-light text-primary/30">
                  {service.number}
                </span>
                <span className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="font-heading text-sm italic text-muted-foreground mt-1">
                  {service.titleEn}
                </p>
              </div>

              {/* Features + CTA */}
              <div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((f, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/529841234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  Reservar Paquete
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
