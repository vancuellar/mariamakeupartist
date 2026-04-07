const DestinationsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Destinations */}
        <div className="animate-on-scroll mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-10">
            Destinations I Serve / Destinos donde trabajo
          </p>

          <div className="space-y-8">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-foreground mb-3">
                Quintana Roo
              </p>
              <p className="font-heading text-base md:text-lg font-light text-muted-foreground tracking-wide">
                Playa del Carmen · Tulum · Cancún · Riviera Maya
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto mb-16 animate-on-scroll" />

        {/* Languages */}
        <div className="animate-on-scroll">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-10">
            Languages / Idiomas
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-12">
            <p className="font-heading text-base md:text-lg font-light text-foreground tracking-wide">
              Português
            </p>
            <span className="w-px h-5 bg-border" />
            <p className="font-heading text-base md:text-lg font-light text-foreground tracking-wide">
              Español
            </p>
            <span className="w-px h-5 bg-border" />
            <p className="font-heading text-base md:text-lg font-light text-foreground tracking-wide">
              English
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
