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
    <section id="cursos" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Cursos / Courses
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Aprende Conmigo
          </h2>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
            Módulo 1
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-2">
            Automaquillaje para Principiantes
          </h3>
          <p className="font-heading text-base italic text-muted-foreground mb-12">
            Self-Makeup for Beginners
          </p>
        </div>

        <div className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
          <p className="font-body text-sm text-muted-foreground leading-[1.8] max-w-lg mx-auto mb-12">
            Curso personalizado donde aprenderás las técnicas esenciales para lograr un maquillaje
            profesional desde la comodidad de tu hogar. Incluye kit de práctica y materiales.
          </p>

          <div className="max-w-xs mx-auto space-y-4 mb-14 text-left">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1} />
                <span className="font-body text-sm text-foreground">{topic}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/529841234567?text=Hola%20Maria,%20me%20interesa%20el%20curso%20de%20automaquillaje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[11px] uppercase tracking-[0.25em] text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-500"
          >
            Inscribirme / Enroll
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
