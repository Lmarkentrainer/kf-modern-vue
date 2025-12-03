import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InsuranceBreadcrumb from "@/components/InsuranceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgVorsorge from "@/assets/Produkte/Vorsorge und Vermoegen.png";

const VorsorgeVermoegen = () => {
  const benefits = [
    "Private Altersvorsorge mit staatlicher Förderung (Riester, Rürup)",
    "Betriebliche Altersvorsorge für attraktive Steuervorteile",
    "Flexible Rentenversicherungen mit garantierter Rente",
    "Fondssparpläne für langfristigen Vermögensaufbau",
    "Berufsunfähigkeitsversicherung als Einkommensschutz",
    "Risikolebensversicherung zur Absicherung der Familie"
  ];

  const comparisonData = [
    { feature: "Garantierte Rente", klassisch: "Ja", fondsgebunden: "Nein", hybrid: "Teilweise" },
    { feature: "Renditechancen", klassisch: "Niedrig", fondsgebunden: "Hoch", hybrid: "Mittel" },
    { feature: "Flexibilität", klassisch: "Gering", fondsgebunden: "Hoch", hybrid: "Mittel" },
    { feature: "Sicherheit", klassisch: "Sehr hoch", fondsgebunden: "Mittel", hybrid: "Hoch" },
    { feature: "Steuerförderung", klassisch: "Möglich", fondsgebunden: "Möglich", hybrid: "Möglich" },
    { feature: "Vorzeitige Verfügbarkeit", klassisch: "Eingeschränkt", fondsgebunden: "Ja", hybrid: "Teilweise" }
  ];

  return (
    <Layout>
      <PageHero
        title="Vorsorge und Vermögen"
        description="Bauen Sie sich eine sichere finanzielle Zukunft auf – mit intelligenten Vorsorgelösungen"
      />
      <InsuranceBreadcrumb currentPage="Vorsorge und Vermögen" />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ihre finanzielle Zukunft beginnt heute</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Die gesetzliche Rente allein reicht nicht mehr aus. Sichern Sie Ihren 
                Lebensstandard im Alter mit privater und betrieblicher Altersvorsorge. 
                Wir beraten Sie zu allen Möglichkeiten des Vermögensaufbaus.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Von klassischen Rentenversicherungen über fondsgebundene Produkte bis hin 
                zu staatlich geförderten Modellen – wir finden die optimale Strategie für 
                Ihre individuelle Situation und Ihre Ziele.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgVorsorge}
                alt="Vorsorge und Vermögen"
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
              <CardTitle>Tarifvergleich Altersvorsorge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Merkmal</TableHead>
                      <TableHead>Klassisch</TableHead>
                      <TableHead>Fondsgebunden</TableHead>
                      <TableHead>Hybrid</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.klassisch}</TableCell>
                        <TableCell>{row.fondsgebunden}</TableCell>
                        <TableCell>{row.hybrid}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Starten Sie Ihre Vorsorge-Planung</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Rentenlücke berechnen und die passende 
              Vorsorgestrategie entwickeln.
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

export default VorsorgeVermoegen;
