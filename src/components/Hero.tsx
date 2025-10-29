import { Button } from "@/components/ui/button";
import heroBg from "@/assets/Hero-BKF.webp";

const Hero = () => {
  return (
    <>
      {/* Wave Animation */}
      <div className="relative h-24 overflow-hidden bg-background">
        <svg
          className="absolute bottom-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(135deg, rgba(0, 40, 90, 0.4), rgba(75, 120, 180, 0.3))' }}
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 backdrop-blur-sm"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
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
      </section>
    </>
  );
};

export default Hero;
