import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Bridal makeup" },
  { src: portfolio2, alt: "Quinceañera makeup" },
  { src: portfolio3, alt: "Event makeup" },
  { src: portfolio4, alt: "Makeup application" },
  { src: portfolio5, alt: "Natural beauty" },
  { src: portfolio6, alt: "Eye detail" },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Portafolio / Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Mi Trabajo
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="animate-on-scroll aspect-[3/4] overflow-hidden group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
