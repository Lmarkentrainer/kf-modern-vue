import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sie möchten ein unverbindliches Angebot?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Kontaktieren Sie uns für eine persönliche Beratung. Wir freuen uns darauf, 
          die beste Versicherungslösung für Sie zu finden.
        </p>
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Jetzt Kontakt aufnehmen
        </Button>
      </div>
    </section>
  );
};

export default CTA;
