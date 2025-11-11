import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Home, Car, Briefcase, TrendingUp } from "lucide-react";

const insuranceCategories = [
  {
    icon: Heart,
    title: "Gesundheit & Pflege",
    description: "Krankenversicherung, Pflegeversicherung und mehr",
    image: "/src/assets/Produkte/Gesundheit und Pflege.png",
  },
  {
    icon: Home,
    title: "Haus & Wohnen",
    description: "Hausrat, Gebäude und Wohngebäudeversicherung",
    image: "/src/assets/Produkte/Haus und Wohnen.jpg",
  },
  {
    icon: Car,
    title: "Kraftfahrt",
    description: "KFZ-Versicherung für Ihr Fahrzeug",
    image: "/src/assets/Produkte/Kraftfahrt.png",
  },
  {
    icon: Shield,
    title: "Haftung & Recht",
    description: "Privathaftpflicht und Rechtsschutz",
    image: "/src/assets/Produkte/Haftung und Recht.png",
  },
  {
    icon: TrendingUp,
    title: "Vorsorge & Vermögen",
    description: "Altersvorsorge und Vermögensaufbau",
    image: "/src/assets/Produkte/Vorsorge und Vermoegen.png",
  },
  {
    icon: Briefcase,
    title: "Firmenkunden",
    description: "Gewerbeversicherungen und Betriebshaftpflicht",
    image: "/src/assets/Produkte/Firmenkunden.png",
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
      <section className="py-16">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Button size="lg" className="w-full rounded-full">
                      Mehr erfahren
                    </Button>
                  </div>
                </div>
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
