import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Top bar text */}
      <div className="absolute top-0 left-0 right-0 pt-24 md:pt-28 text-center">
        <p
          className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Natural Sophisticated Makeup Artistry
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-20 w-full max-w-7xl mx-auto">
        {/* Name */}
        <div className="text-center mb-16 md:mb-20">
          <h1
            className="font-heading text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] font-light leading-[0.95] tracking-[0.02em] text-foreground animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Maria Neunfeld
          </h1>
          <div
            className="mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Playa del Carmen & Riviera Maya
            </p>
          </div>
        </div>

        {/* Asymmetric photo layout */}
        <div
          className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="aspect-[3/4] overflow-hidden mt-8 md:mt-16">
            <img
              src={portfolio1}
              alt="Bridal makeup by Maria Neunfeld"
              width={800}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={portfolio3}
              alt="Event makeup by Maria Neunfeld"
              width={800}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tagline below photos */}
        <div
          className="text-center mt-12 md:mt-16 animate-fade-in-up"
          style={{ animationDelay: "1.3s" }}
        >
          <p className="font-heading text-lg md:text-xl italic text-muted-foreground mb-8">
            Realza tu belleza natural
          </p>
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[11px] uppercase tracking-[0.25em] text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-500"
          >
            Reservar / Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
