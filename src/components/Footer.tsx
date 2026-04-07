import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-cream/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-lg text-cream/40">
          Maria <span className="italic">Neunfeld</span>
        </p>
        
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/marianeunfeldmakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/20 hover:text-cream/60 transition-colors duration-300"
          >
            <Instagram size={15} strokeWidth={1} />
          </a>
          <a
            href="https://wa.me/529843206067"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/20 hover:text-cream/60 transition-colors duration-300"
          >
            <MessageCircle size={15} strokeWidth={1} />
          </a>
          <a
            href="mailto:thomasneunfeld@gmail.com"
            className="text-cream/20 hover:text-cream/60 transition-colors duration-300"
          >
            <Mail size={15} strokeWidth={1} />
          </a>
        </div>

        <p className="font-body text-[9px] text-cream/15 tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
