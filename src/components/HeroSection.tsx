import { ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-8 md:px-16 lg:px-20 py-32 lg:py-0">
        <p
          className="font-body text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Makeup Artist
        </p>

        <h1
          className="font-heading text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] font-light leading-[0.95] tracking-[0.04em] text-foreground mb-2 animate-fade-in-up text-center lg:text-left"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="block uppercase tracking-[0.15em] text-[1.8rem] md:text-[2.8rem] lg:text-[3.2rem] font-body font-light">Belleza</span>
          <span className="italic text-primary">Natural</span>
        </h1>

        <p
          className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground text-center lg:text-left max-w-sm mt-8 leading-[2] animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Realzando tu belleza natural con un enfoque de alta costura en la Riviera Maya. Para la novia moderna.
        </p>

        <a
          href="https://wa.me/529841234567"
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
          src={portfolio1}
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
