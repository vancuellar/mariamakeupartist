import { Instagram, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Por favor completa los campos requeridos", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);

    const text = `Hola, soy ${formData.name.trim()}.\nEmail: ${formData.email.trim()}${formData.date ? `\nFecha del evento: ${formData.date}` : ""}\n\n${formData.message.trim()}`;
    const url = `https://wa.me/529843206067?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setIsSubmitting(false);
    setFormData({ name: "", email: "", date: "", message: "" });
    toast({ title: "¡Mensaje enviado!", description: "Te redirigimos a WhatsApp." });
  };

  return (
    <section id="contacto" className="section-padding bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
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

            <div className="space-y-8 mt-12">
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
                  <span className="block font-body text-xs text-cream/40 mt-1">thomasneunfeld@gmail.com</span>
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

          {/* Right: Form */}
          <div className="animate-on-scroll" style={{ transitionDelay: "150ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full bg-transparent border-b border-cream/20 pb-3 font-body text-sm text-cream/80 placeholder:text-cream/20 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full bg-transparent border-b border-cream/20 pb-3 font-body text-sm text-cream/80 placeholder:text-cream/20 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">
                  Fecha del evento
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/20 pb-3 font-body text-sm text-cream/80 placeholder:text-cream/20 focus:outline-none focus:border-primary transition-colors duration-300 [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-transparent border-b border-cream/20 pb-3 font-body text-sm text-cream/80 placeholder:text-cream/20 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Cuéntame sobre tu evento, estilo deseado, número de personas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center gap-3 font-body text-[10px] uppercase tracking-[0.3em] text-cream/70 border border-cream/20 px-8 py-4 hover:border-primary hover:text-primary transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-4 h-4" strokeWidth={1} />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
