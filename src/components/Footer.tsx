import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-lg text-cream/60">Maria Neunfeld Makeup</p>
        
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-cream/70 transition-colors duration-300"
          >
            <Instagram size={16} strokeWidth={1} />
          </a>
          <a
            href="https://wa.me/529841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-cream/70 transition-colors duration-300"
          >
            <MessageCircle size={16} strokeWidth={1} />
          </a>
          <a
            href="mailto:info@marianeunfeld.com"
            className="text-cream/30 hover:text-cream/70 transition-colors duration-300"
          >
            <Mail size={16} strokeWidth={1} />
          </a>
        </div>

        <p className="font-body text-[10px] text-cream/20 tracking-wider">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
