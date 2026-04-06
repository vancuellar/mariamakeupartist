import { Heart, Star, Sparkles, BookOpen } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bodas",
    titleEn: "Weddings",
    description: "Maquillaje nupcial de lujo para novias y cortejo. Prueba previa incluida.",
    descriptionEn: "Luxury bridal makeup for brides and bridal party. Trial included.",
  },
  {
    icon: Star,
    title: "Quinceañeras",
    titleEn: "Quinceañeras",
    description: "Look glamuroso y juvenil para celebrar tus XV años con estilo.",
    descriptionEn: "Glamorous and youthful look to celebrate your XV in style.",
  },
  {
    icon: Sparkles,
    title: "Eventos Especiales",
    titleEn: "Special Events",
    description: "Galas, graduaciones, sesiones fotográficas y más. Siempre impecable.",
    descriptionEn: "Galas, graduations, photoshoots and more. Always flawless.",
  },
  {
    icon: BookOpen,
    title: "Cursos",
    titleEn: "Courses",
    description: "Aprende técnicas profesionales de automaquillaje desde cero.",
    descriptionEn: "Learn professional self-makeup techniques from scratch.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Servicios / Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Lo Que Ofrezco
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-on-scroll text-center p-8 bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <service.icon
                className="w-8 h-8 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                {service.title}
              </h3>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {service.titleEn}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
