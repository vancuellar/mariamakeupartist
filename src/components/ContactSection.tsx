import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-charcoal">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-cream/50 mb-4">
            Contacto / Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4">
            Hablemos
          </h2>
          <p className="font-heading text-xl italic text-cream/60 mb-16">Let's Talk</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16">
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll flex flex-col items-center gap-4 group"
          >
            <MessageCircle className="w-5 h-5 text-cream/40 group-hover:text-cream transition-colors duration-300" strokeWidth={1} />
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-cream/80">WhatsApp</span>
            <span className="font-body text-xs text-cream/40">+52 984 123 4567</span>
          </a>

          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll flex flex-col items-center gap-4 group"
            style={{ transitionDelay: "100ms" }}
          >
            <Instagram className="w-5 h-5 text-cream/40 group-hover:text-cream transition-colors duration-300" strokeWidth={1} />
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-cream/80">Instagram</span>
            <span className="font-body text-xs text-cream/40">@marianeunfeldmakeup</span>
          </a>

          <a
            href="mailto:info@marianeunfeld.com"
            className="animate-on-scroll flex flex-col items-center gap-4 group"
            style={{ transitionDelay: "200ms" }}
          >
            <Mail className="w-5 h-5 text-cream/40 group-hover:text-cream transition-colors duration-300" strokeWidth={1} />
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-cream/80">Email</span>
            <span className="font-body text-xs text-cream/40">info@marianeunfeld.com</span>
          </a>
        </div>

        <div className="animate-on-scroll flex items-center justify-center gap-2 text-cream/30">
          <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
          <span className="font-body text-[10px] uppercase tracking-[0.2em]">
            Playa del Carmen & Riviera Maya, México
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
