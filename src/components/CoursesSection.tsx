import { ArrowRight } from "lucide-react";
import curso1 from "@/assets/curso-1.jpeg";
import curso2 from "@/assets/curso-2.jpeg";

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Header */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              <span className="font-belleza uppercase tracking-[0.15em]">Aprende</span>{" "}
              <span className="font-pinyon text-primary">Conmigo</span>
            </h2>
            <p className="font-heading text-xl md:text-2xl italic text-muted-foreground mb-6">
              Curso de Automaquillaje
            </p>
            <div className="flex gap-3">
              <img src={curso1} alt="Automaquillaje natural" className="w-28 h-36 object-cover rounded-sm" />
              <img src={curso2} alt="Automaquillaje glam" className="w-28 h-36 object-cover rounded-sm" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll" style={{ transitionDelay: "150ms" }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-heading text-4xl font-light text-primary/30">01</span>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Módulo 1</p>
                <h3 className="font-heading text-xl font-light text-foreground">
                  Iniciantes
                </h3>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-[1.9] mb-6">
              Aquí aprenderás todo lo que necesitas, paso a paso, sin complicaciones y con mucho cariño. De iniciante a experta ¡Empecemos juntas!
            </p>

            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Clases Grupales · Personalizadas · En Línea
            </p>

            <p className="font-body text-sm text-foreground mb-2">Aprenderás dos looks:</p>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-10">
              Natural Look · Soft Glam
            </p>

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
