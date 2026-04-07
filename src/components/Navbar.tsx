import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const leftLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
];

const rightLinks = [
  { href: "#portafolio", label: "Portafolio" },
  { href: "#cursos", label: "Automaquillaje" },
  { href: "#contacto", label: "Contacto" },
];

const allLinks = [...leftLinks, ...rightLinks];

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
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        {/* Left links (desktop) */}
        <ul className="hidden lg:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <a href="#" className="lg:text-center lg:flex-1 flex justify-center">
          <img src={logo} alt="Maria Neunfeld Makeup" className="h-[46px] md:h-[55px] w-auto" />
        </a>

        {/* Right links (desktop) */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md">
          <ul className="flex flex-col items-center py-10 gap-7">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/529843206067"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-body text-[10px] uppercase tracking-[0.25em] text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
