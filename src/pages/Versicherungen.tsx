import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Home, Car, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

import gesundheitImg from "@/assets/Produkte/Gesundheit und Pflege.png";
import hausImg from "@/assets/Produkte/Haus und Wohnen.jpg";
import kraftfahrtImg from "@/assets/Produkte/Kraftfahrt.png";
import haftungImg from "@/assets/Produkte/Haftung und Recht.png";
import vorsorgeImg from "@/assets/Produkte/Vorsorge und Vermoegen.png";
import firmenkundenImg from "@/assets/Produkte/Firmenkunden.png";

const insuranceCategories = [
  {
    icon: Heart,
    title: "Gesundheit & Pflege",
    description: "Krankenversicherung, Pflegeversicherung und mehr",
    image: gesundheitImg,
    link: "/versicherungen/gesundheit-pflege",
  },
  {
    icon: Home,
    title: "Haus & Wohnen",
    description: "Hausrat, Gebäude und Wohngebäudeversicherung",
    image: hausImg,
    link: "/versicherungen/haus-wohnen",
  },
  {
    icon: Car,
    title: "Kraftfahrt",
    description: "KFZ-Versicherung für Ihr Fahrzeug",
    image: kraftfahrtImg,
    link: "/versicherungen/kraftfahrt",
  },
  {
    icon: Shield,
    title: "Haftung & Recht",
    description: "Privathaftpflicht und Rechtsschutz",
    image: haftungImg,
    link: "/versicherungen/haftung-recht",
  },
  {
    icon: TrendingUp,
    title: "Vorsorge & Vermögen",
    description: "Altersvorsorge und Vermögensaufbau",
    image: vorsorgeImg,
    link: "/versicherungen/vorsorge-vermoegen",
  },
  {
    icon: Briefcase,
    title: "Firmenkunden",
    description: "Gewerbeversicherungen und Betriebshaftpflicht",
    image: firmenkundenImg,
    link: "/versicherungen/firmenkunden",
  },
];

const Versicherungen = () => {
  return (
    <Layout>
      <PageHero 
        title="Unsere Versicherungslösungen"
        description="Umfassender Schutz für alle Lebensbereiche – individuell auf Ihre Bedürfnisse zugeschnitten."
      />

      {/* Insurance Categories Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  to={category.link}
                  key={category.title}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-gradient-to-b from-card to-card/95">
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Finden Sie die richtige Versicherung
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Lassen Sie sich von unseren Experten beraten und finden Sie den optimalen Schutz.
          </p>
          <Button 
            size="lg"
            asChild
            className="bg-white hover:bg-white/90 text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link to="/kontakt">Kostenlose Beratung anfragen</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Versicherungen;
