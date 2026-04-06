import { CheckCircle } from "lucide-react";

const topics = [
  "Preparación y cuidado de la piel",
  "Base, corrector y contorno",
  "Cejas perfectas",
  "Ojos ahumados paso a paso",
  "Labios y acabado final",
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Cursos / Courses
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Aprende Conmigo
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="animate-on-scroll bg-cream border border-border/50 p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-2">
              Módulo 1
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">
              Automaquillaje para Principiantes
            </h3>
            <p className="font-heading text-lg italic text-muted-foreground">
              Self-Makeup for Beginners
            </p>
          </div>

          <p className="font-body text-sm text-charcoal-light leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Curso personalizado donde aprenderás las técnicas esenciales para lograr un maquillaje
            profesional desde la comodidad de tu hogar. Incluye kit de práctica y materiales.
          </p>

          <div className="max-w-sm mx-auto space-y-4 mb-10">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm text-foreground">{topic}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/529841234567?text=Hola%20Maria,%20me%20interesa%20el%20curso%20de%20automaquillaje"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-wine-dark transition-colors duration-300"
            >
              Inscribirme / Enroll
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
