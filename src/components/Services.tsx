import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import imgGesundheit from "@/assets/Produkte/Gesundheit und Pflege.png";
import imgKraftfahrt from "@/assets/Produkte/Kraftfahrt.png";
import imgVorsorge from "@/assets/Produkte/Vorsorge und Vermoegen.png";
import imgHaus from "@/assets/Produkte/Haus und Wohnen.jpg";
import imgHaftung from "@/assets/Produkte/Haftung und Recht.png";
import imgFirmen from "@/assets/Produkte/Firmenkunden.png";

const Services = () => {
  const services = [
    {
      title: "Gesundheit und Pflege",
      description: "Krankenversicherung, Pflegeabsicherung und Gesundheitsvorsorge",
      image: imgGesundheit,
      link: "/versicherungen/gesundheit-pflege",
    },
    {
      title: "Kraftfahrt",
      description: "KFZ-Versicherung für Auto, Motorrad und mehr",
      image: imgKraftfahrt,
      link: "/versicherungen/kraftfahrt",
    },
    {
      title: "Vorsorge und Vermögen",
      description: "Altersvorsorge, Rentenversicherung und Vermögensaufbau",
      image: imgVorsorge,
      link: "/versicherungen/vorsorge-vermoegen",
    },
    {
      title: "Haus und Wohnen",
      description: "Wohngebäude- und Hausratversicherung für Ihr Zuhause",
      image: imgHaus,
      link: "/versicherungen/haus-wohnen",
    },
    {
      title: "Haftung und Recht",
      description: "Privat- und Berufsrechtsschutz sowie Haftpflichtlösungen",
      image: imgHaftung,
      link: "/versicherungen/haftung-recht",
    },
    {
      title: "Firmenkunden",
      description: "Gewerbliche Versicherungen und Betriebshaftpflicht",
      image: imgFirmen,
      link: "/versicherungen/firmenkunden",
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
            <Link to={service.link} key={index}>
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-border h-full"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
