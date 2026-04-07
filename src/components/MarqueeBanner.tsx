const items = [
  "Especialista en Novias",
  "Playa del Carmen & Riviera Maya",
  "Quinceañeras",
  "Maquillaje Natural de Alta Gama",
  "Cursos de Automaquillaje",
  "Eventos Especiales",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-charcoal py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/60 mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-primary text-[6px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
