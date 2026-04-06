import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-heading text-2xl text-cream/90 mb-6">Maria Neunfeld Makeup</h3>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-cream transition-colors"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-cream transition-colors"
          >
            <MessageCircle size={20} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:info@marianeunfeld.com"
            className="text-cream/50 hover:text-cream transition-colors"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
        <p className="font-body text-xs text-cream/30 tracking-wider">
          © {new Date().getFullYear()} Maria Neunfeld Makeup. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
