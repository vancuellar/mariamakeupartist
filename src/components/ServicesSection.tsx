import { Heart, Star, Sparkles, BookOpen } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bodas",
    titleEn: "Weddings",
    description: "Maquillaje nupcial de lujo para novias y cortejo. Prueba previa incluida.",
  },
  {
    icon: Star,
    title: "Quinceañeras",
    titleEn: "Quinceañeras",
    description: "Look glamuroso y juvenil para celebrar tus XV años con estilo.",
  },
  {
    icon: Sparkles,
    title: "Eventos",
    titleEn: "Special Events",
    description: "Galas, graduaciones, sesiones fotográficas y más. Siempre impecable.",
  },
  {
    icon: BookOpen,
    title: "Cursos",
    titleEn: "Courses",
    description: "Aprende técnicas profesionales de automaquillaje desde cero.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Servicios / Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Lo Que Ofrezco
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-on-scroll text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <service.icon
                className="w-6 h-6 mx-auto mb-5 text-foreground"
                strokeWidth={1}
              />
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-1">
                {service.title}
              </h3>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {service.titleEn}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
