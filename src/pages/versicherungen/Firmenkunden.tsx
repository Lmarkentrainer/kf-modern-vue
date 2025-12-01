import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgFirmen from "@/assets/Produkte/Firmenkunden.png";

const Firmenkunden = () => {
  const benefits = [
    "Betriebshaftpflichtversicherung für alle Branchen",
    "Inhaltsversicherung für Betriebseinrichtung und Waren",
    "Elektronikversicherung für IT und technische Anlagen",
    "Cyber-Versicherung gegen digitale Risiken",
    "Betriebsunterbrechungsversicherung zur Liquiditätssicherung",
    "D&O-Versicherung für Geschäftsführer und Vorstände"
  ];

  const comparisonData = [
    { feature: "Betriebshaftpflicht", basis: "Ja", erweitert: "Ja", premium: "Ja" },
    { feature: "Inhaltsversicherung", basis: "Optional", erweitert: "Ja", premium: "Ja" },
    { feature: "Rechtsschutz", basis: "Nein", erweitert: "Ja", premium: "Ja" },
    { feature: "Cyber-Schutz", basis: "Nein", erweitert: "Basis", premium: "Umfassend" },
    { feature: "Betriebsunterbrechung", basis: "Nein", erweitert: "Optional", premium: "Ja" },
    { feature: "Produkt-/Umwelthaftpflicht", basis: "Nein", erweitert: "Ja", premium: "Ja" }
  ];

  return (
    <Layout>
      <PageHero
        title="Firmenkunden"
        description="Maßgeschneiderte Versicherungslösungen für Ihr Unternehmen – vom Startup bis zum Konzern"
      />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ihr Unternehmen in besten Händen</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unternehmer tragen Verantwortung – für Mitarbeiter, Kunden und das eigene 
                Geschäft. Mit unseren gewerblichen Versicherungen schützen wir Ihr Unternehmen 
                vor den vielfältigen Risiken des Geschäftsalltags.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Von der Betriebshaftpflicht über Cyber-Versicherung bis zur D&O-Versicherung 
                bieten wir Ihnen branchenspezifische Lösungen. Unsere Experten analysieren 
                Ihre individuellen Risiken und entwickeln ein maßgeschneidertes Sicherheitskonzept.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgFirmen}
                alt="Firmenkunden"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Ihre Vorteile als Firmenkunde</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Leistungspakete im Vergleich</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Versicherungsart</TableHead>
                      <TableHead>Basis</TableHead>
                      <TableHead>Erweitert</TableHead>
                      <TableHead>Premium</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.basis}</TableCell>
                        <TableCell>{row.erweitert}</TableCell>
                        <TableCell>{row.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Individuelle Beratung für Ihr Unternehmen</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam ein Sicherheitskonzept entwickeln, das perfekt zu 
              Ihrem Unternehmen und Ihrer Branche passt.
            </p>
            <Link to="/kontakt">
              <Button size="lg">Kostenlose Beratung anfragen</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Firmenkunden;
