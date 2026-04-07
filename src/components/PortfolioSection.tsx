import { useState } from "react";
import portfolio1 from "@/assets/portfolio-nupcial.jpeg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import quinceaneraGlamMain from "@/assets/lookbook-quinceanera-glam-main.jpeg";
import quinceaneraGlamAlt from "@/assets/lookbook-quinceanera-glam-alt.jpeg";

type PortfolioItem = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  secondarySrc?: string;
  secondaryAlt?: string;
};

const images: PortfolioItem[] = [
  { src: portfolio1, alt: "Soft Bride", tag: "Bodas", title: "Soft Bride" },
  {
    src: quinceaneraGlamMain,
    alt: "Quinceañera Glam principal",
    tag: "Quinceañera",
    title: "Quinceañera Glam",
    secondarySrc: quinceaneraGlamAlt,
    secondaryAlt: "Quinceañera Glam segunda foto",
  },
  { src: portfolio3, alt: "Golden Hour Session", tag: "Nupcial", title: "Golden Hour Session" },
  { src: portfolio4, alt: "Editorial Look", tag: "Editorial", title: "Editorial Look" },
  { src: portfolio5, alt: "Natural Glow", tag: "Nupcial & Cortejo", title: "Natural Glow" },
  { src: portfolio6, alt: "Sunset Beauty", tag: "Evento", title: "Sunset Beauty" },
];

const PortfolioSection = () => {
  const [activeAlternate, setActiveAlternate] = useState<number | null>(null);

  const toggleAlternateImage = (index: number, hasSecondaryImage: boolean) => {
    if (!hasSecondaryImage) return;
    setActiveAlternate((current) => (current === index ? null : index));
  };

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
          {images.map((img, i) => {
            const hasSecondaryImage = Boolean(img.secondarySrc);
            const showAlternate = activeAlternate === i;

            return (
              <button
                key={i}
                type="button"
                onClick={() => toggleAlternateImage(i, hasSecondaryImage)}
                onMouseEnter={() => hasSecondaryImage && setActiveAlternate(i)}
                onMouseLeave={() => hasSecondaryImage && setActiveAlternate(null)}
                className="animate-on-scroll group relative overflow-hidden text-left disabled:cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${showAlternate ? "scale-[1.01] opacity-0" : "scale-100 opacity-100 group-hover:scale-[1.03]"}`}
                  />

                  {img.secondarySrc ? (
                    <img
                      src={img.secondarySrc}
                      alt={img.secondaryAlt ?? img.alt}
                      loading="lazy"
                      width={800}
                      height={1024}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${showAlternate ? "scale-[1.03] opacity-100" : "scale-[1.01] opacity-0"}`}
                    />
                  ) : null}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end p-6">
                    <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-body text-[9px] uppercase tracking-[0.3em] text-background/80 mb-1">
                        {img.tag}
                      </p>
                      <p className="font-heading text-lg font-light text-background">
                        {img.title}
                      </p>
                      {hasSecondaryImage ? (
                        <p className="mt-3 font-body text-[9px] uppercase tracking-[0.25em] text-background/70">
                          Toca para ver otra foto
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
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
