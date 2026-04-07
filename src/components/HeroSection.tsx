import { ArrowRight } from "lucide-react";
import heroMain from "@/assets/hero-main.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-8 md:px-16 lg:px-20 py-32 lg:py-0">
        <h1
          className="font-heading text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] font-light leading-[0.95] tracking-[0.04em] text-foreground mb-2 animate-fade-in-up text-center lg:text-left"
          style={{ animationDelay: "0.4s" }}
        >
           <span className="block font-body text-[0.9rem] md:text-[1.1rem] uppercase tracking-[0.3em] text-muted-foreground mb-4">Maria Neunfeld</span>
          <span className="block font-belleza text-[1.8rem] md:text-[2.8rem] lg:text-[3.2rem] uppercase tracking-[0.15em]">Makeup</span>
          <span className="block font-script text-primary text-[2.5rem] md:text-[4rem] lg:text-[5rem] -mt-2">Artist</span>
        </h1>

        <div
          className="mt-8 animate-fade-in-up text-center lg:text-left max-w-sm"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-foreground leading-[2]">
            Realzando tu mejor versión en los momentos más especiales.
          </p>
          <p className="font-body text-[13px] md:text-[14px] uppercase tracking-[0.3em] text-muted-foreground/70 leading-[2] mt-2">
            Maquillista profesional en la Riviera Maya
          </p>
          <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 leading-[2] mt-1 whitespace-nowrap">
            Novias · Quinceañeras · Eventos Sociales · Sesión de Fotos
          </p>
        </div>

        <a
          href="https://wa.me/529843206067"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.3em] text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500 animate-fade-in-up group"
          style={{ animationDelay: "0.8s" }}
        >
          Reservar Cita
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Right: Image */}
      <div
        className="flex-1 min-h-[60vh] lg:min-h-screen animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <img
          src={heroMain}
          alt="Maquillaje nupcial por Maria Neunfeld"
          width={1200}
          height={1600}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
