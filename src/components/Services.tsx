import { Card, CardContent } from "@/components/ui/card";
import serviceHealth from "@/assets/service-health.jpg";
import serviceFinance from "@/assets/service-finance.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceHome from "@/assets/service-home.jpg";
import serviceBusiness from "@/assets/service-business.jpg";

const Services = () => {
  const services = [
    {
      title: "Gesundheit & Pflege",
      description: "Krankenversicherung, Pflegeversicherung und Gesundheitsvorsorge",
      image: serviceHealth,
    },
    {
      title: "Vorsorge & Vermögen",
      description: "Altersvorsorge, Rentenversicherung und Vermögensaufbau",
      image: serviceFinance,
    },
    {
      title: "Kraftfahrt",
      description: "KFZ-Versicherung für Auto, Motorrad und mehr",
      image: serviceCar,
    },
    {
      title: "Haus & Wohnen",
      description: "Wohngebäude-, Hausrat- und Rechtsschutzversicherung",
      image: serviceHome,
    },
    {
      title: "Firmenkunden",
      description: "Gewerbliche Versicherungen und Betriebshaftpflicht",
      image: serviceBusiness,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Umfassende Versicherungslösungen für alle Lebensbereiche
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
