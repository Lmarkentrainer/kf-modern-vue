import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InsuranceBreadcrumb from "@/components/InsuranceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgHaftung from "@/assets/Produkte/Haftung und Recht.png";

const HaftungRecht = () => {
  const benefits = [
    "Privathaftpflicht – unverzichtbar für jeden Haushalt",
    "Rechtsschutzversicherung für alle Lebensbereiche",
    "Berufsrechtsschutz und Berufshaftpflicht",
    "Hundehalterhaftpflicht und Pferdehalterhaftpflicht",
    "Bauherrenhaftpflicht für Bauvorhaben",
    "Umwelthaftpflicht und -rechtsschutz"
  ];

  const comparisonData = [
    { feature: "Deckungssumme", basis: "5 Mio. €", komfort: "10 Mio. €", premium: "50 Mio. €" },
    { feature: "Deliktunfähige Kinder", basis: "Nein", komfort: "Ja", premium: "Ja" },
    { feature: "Mietsachschäden", basis: "Basis", komfort: "Erweitert", premium: "Premium" },
    { feature: "Forderungsausfall", basis: "Nein", komfort: "Ja", premium: "Ja" },
    { feature: "Schlüsselverlust", basis: "Privat", komfort: "Privat + Beruf", premium: "Alle" },
    { feature: "Ehrenamtliche Tätigkeit", basis: "Nein", komfort: "Ja", premium: "Ja" }
  ];

  return (
    <Layout>
      <PageHero
        title="Haftung und Recht"
        description="Schützen Sie sich vor Haftungsrisiken und wahren Sie Ihre Rechte mit professionellem Versicherungsschutz"
      />
      <InsuranceBreadcrumb currentPage="Haftung und Recht" />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Umfassender Schutz vor Haftungsrisiken</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ein Moment der Unachtsamkeit kann existenzbedrohende Folgen haben. Die 
                Privathaftpflichtversicherung ist eine der wichtigsten Versicherungen überhaupt 
                und schützt Sie vor den finanziellen Folgen von Schadenersatzansprüchen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ergänzen Sie Ihren Schutz mit einer Rechtsschutzversicherung und sichern Sie 
                sich professionelle juristische Unterstützung. Vom Verkehrsrechtsschutz über 
                Mietrechtsschutz bis zum Arbeitsrechtsschutz – wir haben die passende Lösung.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgHaftung}
                alt="Haftung und Recht"
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
              <CardTitle>Tarifvergleich Privathaftpflicht</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Leistung</TableHead>
                      <TableHead>Basis</TableHead>
                      <TableHead>Komfort</TableHead>
                      <TableHead>Premium</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.basis}</TableCell>
                        <TableCell>{row.komfort}</TableCell>
                        <TableCell>{row.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Sichern Sie sich optimal ab</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Prüfen Sie jetzt Ihren Versicherungsschutz und lassen Sie sich von unseren 
              Experten beraten, welche Haftungs- und Rechtsschutzlösungen für Sie sinnvoll sind.
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

export default HaftungRecht;
