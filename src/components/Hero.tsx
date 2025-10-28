import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image - Right Side */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 md:opacity-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Curved Overlay Shape - Inspired by Culpeck */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path
            d="M 0,0 L 0,700 L 800,700 Q 700,350 800,0 Z"
            fill="url(#heroGradient)"
            className="opacity-95"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Ihr unabhängiger Versicherungsmakler für Privat- und Firmenkunden
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white/95 leading-relaxed">
            Individuelle Beratung, starke Partner, verlässlicher Schutz – alles aus einer Hand.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Jetzt Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
