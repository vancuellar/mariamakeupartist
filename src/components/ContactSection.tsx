import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Header */}
          <div className="animate-on-scroll">
            <p className="font-body text-[9px] uppercase tracking-[0.4em] text-cream/40 mb-3">
              Contacto
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4">
              Hablemos
            </h2>
            <p className="font-heading text-base italic text-cream/40">
              For the modern bride
            </p>
            <p className="font-body text-sm text-cream/50 leading-[1.9] mt-8 max-w-sm">
              Este primer contacto está diseñado para entender tu visión y necesidades,
              asegurando una experiencia de primer nivel para tu día especial.
            </p>
          </div>

          {/* Right: Links */}
          <div className="animate-on-scroll space-y-10" style={{ transitionDelay: "150ms" }}>
            <a
              href="https://wa.me/529843206067"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 border border-cream/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <MessageCircle className="w-5 h-5 text-cream/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
              </div>
              <div>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/70">WhatsApp</span>
                <span className="block font-body text-xs text-cream/40 mt-1">+52 984 320 6067</span>
              </div>
            </a>

            <a
              href="https://instagram.com/marianeunfeldmakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 border border-cream/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <Instagram className="w-5 h-5 text-cream/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
              </div>
              <div>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/70">Instagram</span>
                <span className="block font-body text-xs text-cream/40 mt-1">@marianeunfeldmakeup</span>
              </div>
            </a>

            <a
              href="mailto:thomasneunfeld@gmail.com"
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 border border-cream/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <Mail className="w-5 h-5 text-cream/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
              </div>
              <div>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/70">Email</span>
                <span className="block font-body text-xs text-cream/40 mt-1">info@marianeunfeld.com</span>
              </div>
            </a>

            <div className="flex items-center gap-3 pt-6 border-t border-cream/10">
              <MapPin className="w-3.5 h-3.5 text-cream/30" strokeWidth={1} />
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/30">
                Playa del Carmen & Riviera Maya, México
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
