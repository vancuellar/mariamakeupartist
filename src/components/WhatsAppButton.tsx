import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/529841234567?text=Hola%20Maria,%20me%20gustaría%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" fill="hsl(0,0%,100%)" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
