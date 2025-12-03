import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InsuranceBreadcrumb from "@/components/InsuranceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgHaus from "@/assets/Produkte/Haus und Wohnen.jpg";

const HausWohnen = () => {
  const benefits = [
    "Wohngebäudeversicherung für Eigentümer – Schutz vor Feuer, Sturm und Leitungswasser",
    "Hausratversicherung für Ihr bewegliches Eigentum",
    "Elementarschadenversicherung gegen Hochwasser und Starkregen",
    "Glasversicherung für alle Glasflächen im Haus",
    "Bauherrenhaftpflicht für Neubauten und Renovierungen",
    "Photovoltaikversicherung für Ihre Solaranlage"
  ];

  const comparisonData = [
    { feature: "Feuer/Brand", wohngebaude: "Ja", hausrat: "Ja", elementar: "Nein" },
    { feature: "Leitungswasser", wohngebaude: "Ja", hausrat: "Ja", elementar: "Nein" },
    { feature: "Sturm/Hagel", wohngebaude: "Ja", hausrat: "Ja", elementar: "Nein" },
    { feature: "Hochwasser", wohngebaude: "Nein", hausrat: "Nein", elementar: "Ja" },
    { feature: "Starkregen", wohngebaude: "Nein", hausrat: "Nein", elementar: "Ja" },
    { feature: "Erdrutsch", wohngebaude: "Nein", hausrat: "Nein", elementar: "Ja" },
    { feature: "Einbruchdiebstahl", wohngebaude: "Nein", hausrat: "Ja", elementar: "Nein" }
  ];

  return (
    <Layout>
      <PageHero
        title="Haus und Wohnen"
        description="Schützen Sie Ihr Zuhause und Ihr Hab und Gut mit umfassenden Versicherungslösungen"
      />
      <InsuranceBreadcrumb currentPage="Haus und Wohnen" />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sicherheit für Ihr Zuhause</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ihr Zuhause ist mehr als nur vier Wände – es ist der Mittelpunkt Ihres Lebens. 
                Mit unseren Versicherungen für Wohngebäude und Hausrat schützen wir, was Ihnen 
                wichtig ist. Ob Eigentumswohnung, Einfamilienhaus oder Mietwohnung.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Besonders in Zeiten zunehmender Unwetter ist eine Elementarschadenversicherung 
                unverzichtbar. Wir bieten umfassenden Schutz vor den finanziellen Folgen von 
                Hochwasser, Starkregen und anderen Naturgewalten.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgHaus}
                alt="Haus und Wohnen"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Ihre Vorteile auf einen Blick</CardTitle>
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
              <CardTitle>Leistungsübersicht</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Schadensart</TableHead>
                      <TableHead>Wohngebäude</TableHead>
                      <TableHead>Hausrat</TableHead>
                      <TableHead>Elementar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.wohngebaude}</TableCell>
                        <TableCell>{row.hausrat}</TableCell>
                        <TableCell>{row.elementar}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Schützen Sie Ihr Zuhause optimal</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam prüfen, welcher Versicherungsschutz für Ihr Zuhause 
              optimal ist und wo Sie eventuell Lücken haben.
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

export default HausWohnen;
