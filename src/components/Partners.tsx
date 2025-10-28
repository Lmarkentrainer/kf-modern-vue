const Partners = () => {
  const partners = [
    "Allianz",
    "AXA",
    "ERGO",
    "HUK-COBURG",
    "Signal Iduna",
    "R+V Versicherung",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Unsere Partnergesellschaften
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir arbeiten mit über 150 renommierten Versicherern zusammen
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-secondary rounded-lg text-center min-w-[150px] hover:bg-secondary/70 transition-colors"
            >
              <p className="font-semibold text-foreground">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
