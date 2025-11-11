import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Expertise",
    description: "Langjährige Erfahrung und fundiertes Fachwissen im Versicherungsbereich",
  },
  {
    icon: Users,
    title: "Unabhängigkeit",
    description: "Wir beraten unabhängig und objektiv – Ihr Vorteil steht im Mittelpunkt",
  },
  {
    icon: Target,
    title: "Individualität",
    description: "Maßgeschneiderte Lösungen, die perfekt zu Ihrer Lebenssituation passen",
  },
  {
    icon: Heart,
    title: "Vertrauen",
    description: "Persönliche Betreuung und langfristige Partnerschaft auf Augenhöhe",
  },
];

const UeberUns = () => {
  return (
    <Layout>
      <PageHero 
        title="Über BKF Assekuranz"
        description="Ihr vertrauensvoller Partner für individuelle Versicherungslösungen"
      />

      {/* About Content */}
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6">
                Als unabhängiger Versicherungsmakler stehen wir seit vielen Jahren an der Seite unserer Kunden. 
                Unser Ziel ist es, Ihnen den bestmöglichen Versicherungsschutz zu bieten – individuell, 
                transparent und zu fairen Konditionen.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Wir arbeiten nicht für Versicherungsgesellschaften, sondern ausschließlich in Ihrem Interesse. 
                Das bedeutet: objektive Beratung, unabhängige Marktanalyse und persönlicher Service, 
                der auf Ihre Bedürfnisse zugeschnitten ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Erfahrene Versicherungsexperten mit Leidenschaft für individuelle Beratung. 
              Wir nehmen uns Zeit für Sie und finden gemeinsam die beste Lösung.
            </p>
            <Button size="lg" className="rounded-full">
              Lernen Sie uns kennen
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Starten Sie mit uns durch
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Jetzt Termin vereinbaren
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
