import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Bridal makeup", span: "md:col-span-1 md:row-span-2" },
  { src: portfolio2, alt: "Quinceañera makeup", span: "md:col-span-1" },
  { src: portfolio3, alt: "Event makeup", span: "md:col-span-1" },
  { src: portfolio4, alt: "Makeup application", span: "md:col-span-1" },
  { src: portfolio5, alt: "Natural beauty", span: "md:col-span-1 md:row-span-2" },
  { src: portfolio6, alt: "Eye detail", span: "md:col-span-1" },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Portafolio / Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Mi Trabajo
          </h2>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`animate-on-scroll overflow-hidden group cursor-pointer ${img.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[11px] uppercase tracking-[0.25em] text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-500"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
