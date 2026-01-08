import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/Hero-BKF.webp";

const Hero = () => {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#value-props');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scale-in_1.5s_ease-out]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Dark Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-primary/30 animate-fade-in"
        />
        
        {/* Content */}
        <div className="container relative z-10 px-6 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in">
              Ihr unabhängiger Versicherungsmakler in Deutschland.
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/95 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Individuelle Beratung, verlässlicher Schutz und persönlicher Service – alles aus einer Hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 backdrop-blur-sm"
              >
                <Link to="/versicherungen">Mehr erfahren</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center gap-2 transition-transform duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white transition-colors group-hover:text-white/80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </button>
      </section>
  );
};

export default Hero;
