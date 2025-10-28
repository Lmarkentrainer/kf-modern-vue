import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20 text-center text-white">
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ihr Versicherungsmakler für<br />Privat- und Firmenkunden
        </h1>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto opacity-95">
          Unabhängige Beratung mit Erfahrung. Wir finden die beste Lösung für Ihre individuelle Absicherung.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Jetzt Beratung anfragen
        </Button>
      </div>
    </section>
  );
};

export default Hero;
