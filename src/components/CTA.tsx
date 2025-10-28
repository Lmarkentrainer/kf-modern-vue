import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Möchten Sie ein unverbindliches Angebot?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Kontaktieren Sie uns für eine kostenlose Beratung und ein maßgeschneidertes Angebot.
        </p>
        <Button 
          size="lg"
          className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Jetzt Kontakt aufnehmen
        </Button>
      </div>
    </section>
  );
};

export default CTA;
