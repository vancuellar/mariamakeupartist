import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Riviera Elegance", tag: "Nupcial", title: "Riviera Elegance" },
  { src: portfolio2, alt: "Quinceañera Glam", tag: "Quinceañera", title: "Quinceañera Glam" },
  { src: portfolio3, alt: "Golden Hour Session", tag: "Nupcial", title: "Golden Hour Session" },
  { src: portfolio4, alt: "Editorial Look", tag: "Editorial", title: "Editorial Look" },
  { src: portfolio5, alt: "Natural Glow", tag: "Nupcial & Cortejo", title: "Natural Glow" },
  { src: portfolio6, alt: "Sunset Beauty", tag: "Evento", title: "Sunset Beauty" },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-3">
            El
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Lookbook
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="animate-on-scroll group cursor-pointer relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-body text-[9px] uppercase tracking-[0.3em] text-cream/70 mb-1">
                    {img.tag}
                  </p>
                  <p className="font-heading text-lg text-cream font-light">
                    {img.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-[10px] uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors duration-500"
          >
            Sigue nuestro trabajo en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
