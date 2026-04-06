import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#cursos", label: "Cursos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#" className="font-heading text-xl md:text-2xl tracking-[0.05em] text-foreground">
          Maria Neunfeld
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/529841234567"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block font-body text-[11px] uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors duration-300"
        >
          Reservar
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-10 gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/529841234567"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5"
              >
                Reservar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
