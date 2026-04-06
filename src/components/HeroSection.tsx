import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Maria Neunfeld Makeup"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p
          className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-cream/80 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Playa del Carmen & Riviera Maya
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Maria Neunfeld
        </h1>
        <p
          className="font-heading text-2xl md:text-3xl italic text-cream/90 mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Makeup Artist
        </p>
        <div
          className="w-16 h-px bg-gold mx-auto my-8 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        />
        <p
          className="font-body text-sm md:text-base text-cream/70 tracking-wide mb-10 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          Realza tu belleza en el día más importante de tu vida
          <br />
          <span className="italic">Enhance your beauty on your most important day</span>
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-cream/50 text-cream font-body text-sm uppercase tracking-[0.2em] hover:bg-cream hover:text-charcoal transition-all duration-500"
          >
            Reservar / Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
