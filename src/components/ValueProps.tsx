import { Award, Shield, Users } from "lucide-react";

const ValueProps = () => {
  const values = [
    {
      icon: Award,
      title: "Kompetenz seit über 30 Jahren",
      description: "Jahrzehntelange Expertise in der Versicherungsberatung für individuelle und maßgeschneiderte Lösungen.",
    },
    {
      icon: Users,
      title: "Individuelle Beratung & Betreuung",
      description: "Persönliche Betreuung und individueller Ansprechpartner für alle Ihre Anliegen rund um Versicherungen.",
    },
    {
      icon: Shield,
      title: "Starke Versicherungspartner",
      description: "Zugang zu über 150 renommierten Versicherungsgesellschaften für optimalen Schutz.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
