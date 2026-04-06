import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-wine-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-cream/60 mb-3">
            Contacto / Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream mb-4">
            Hablemos
          </h2>
          <p className="font-heading text-xl italic text-cream/80 mb-12">Let's Talk</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll flex flex-col items-center gap-3 p-6 border border-cream/20 hover:border-cream/50 transition-colors duration-300 group"
          >
            <MessageCircle className="w-6 h-6 text-cream/70 group-hover:text-cream transition-colors" strokeWidth={1.5} />
            <span className="font-body text-sm uppercase tracking-wider text-cream">WhatsApp</span>
            <span className="font-body text-xs text-cream/60">+52 984 123 4567</span>
          </a>

          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll flex flex-col items-center gap-3 p-6 border border-cream/20 hover:border-cream/50 transition-colors duration-300 group"
          >
            <Instagram className="w-6 h-6 text-cream/70 group-hover:text-cream transition-colors" strokeWidth={1.5} />
            <span className="font-body text-sm uppercase tracking-wider text-cream">Instagram</span>
            <span className="font-body text-xs text-cream/60">@marianeunfeldmakeup</span>
          </a>

          <a
            href="mailto:info@marianeunfeld.com"
            className="animate-on-scroll flex flex-col items-center gap-3 p-6 border border-cream/20 hover:border-cream/50 transition-colors duration-300 group"
          >
            <Mail className="w-6 h-6 text-cream/70 group-hover:text-cream transition-colors" strokeWidth={1.5} />
            <span className="font-body text-sm uppercase tracking-wider text-cream">Email</span>
            <span className="font-body text-xs text-cream/60">info@marianeunfeld.com</span>
          </a>
        </div>

        <div className="animate-on-scroll flex items-center justify-center gap-2 text-cream/50">
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-body text-xs uppercase tracking-wider">
            Playa del Carmen & Riviera Maya, México
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
