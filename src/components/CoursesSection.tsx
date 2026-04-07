import { ArrowRight } from "lucide-react";

const topics = [
  "Preparación y cuidado de la piel",
  "Base, corrector y contorno",
  "Cejas perfectas",
  "Ojos ahumados paso a paso",
  "Labios y acabado final",
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Header */}
          <div className="animate-on-scroll">
            <p className="font-body text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">
              Educación
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Aprende{" "}
              <span className="italic text-primary">Conmigo</span>
            </h2>
            <p className="font-heading text-base italic text-muted-foreground">
              Curso de Automaquillaje
            </p>
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll" style={{ transitionDelay: "150ms" }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-heading text-4xl font-light text-primary/30">01</span>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Módulo 1</p>
                <h3 className="font-heading text-xl font-light text-foreground">
                  Automaquillaje para Principiantes
                </h3>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-[1.9] mb-8">
              Curso personalizado donde aprenderás las técnicas esenciales para lograr un maquillaje
              profesional desde la comodidad de tu hogar. Incluye kit de práctica y materiales.
            </p>

            <div className="space-y-3 mb-10">
              {topics.map((topic) => (
                <div key={topic} className="flex items-center gap-3">
                  <span className="text-primary text-xs">—</span>
                  <span className="font-body text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/529843206067?text=Hola%20Maria,%20me%20interesa%20el%20curso%20de%20automaquillaje"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 font-body text-[10px] uppercase tracking-[0.25em] text-foreground border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-500 group"
            >
              Inscribirme
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
