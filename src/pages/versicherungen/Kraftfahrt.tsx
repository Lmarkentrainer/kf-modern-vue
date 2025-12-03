import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InsuranceBreadcrumb from "@/components/InsuranceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgKraftfahrt from "@/assets/Produkte/Kraftfahrt.png";

const Kraftfahrt = () => {
  const benefits = [
    "Umfassender Schutz für Ihr Fahrzeug – Haftpflicht, Teilkasko und Vollkasko",
    "Schutzbrief für Pannenhilfe und Abschleppdienst europaweit",
    "Werkstattbindung für günstigere Beiträge möglich",
    "Neupreisentschädigung bei jungen Fahrzeugen",
    "Wildschäden und Elementarschäden abgedeckt",
    "Flexible Selbstbeteiligung zur Beitragsoptimierung"
  ];

  const comparisonData = [
    { feature: "Haftpflichtschäden", haftpflicht: "Ja", teilkasko: "Ja", vollkasko: "Ja" },
    { feature: "Diebstahl", haftpflicht: "Nein", teilkasko: "Ja", vollkasko: "Ja" },
    { feature: "Brand/Explosion", haftpflicht: "Nein", teilkasko: "Ja", vollkasko: "Ja" },
    { feature: "Glasbruch", haftpflicht: "Nein", teilkasko: "Ja", vollkasko: "Ja" },
    { feature: "Wildschäden", haftpflicht: "Nein", teilkasko: "Ja", vollkasko: "Ja" },
    { feature: "Unfallschäden", haftpflicht: "Nein", teilkasko: "Nein", vollkasko: "Ja" },
    { feature: "Vandalismus", haftpflicht: "Nein", teilkasko: "Nein", vollkasko: "Ja" }
  ];

  return (
    <Layout>
      <PageHero
        title="Kraftfahrt-Versicherung"
        description="Optimaler Schutz für Ihr Fahrzeug – von Haftpflicht bis Vollkasko"
      />
      <InsuranceBreadcrumb currentPage="Kraftfahrt" />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sicher unterwegs auf allen Straßen</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ihre Mobilität ist wertvoll. Mit unseren KFZ-Versicherungen schützen wir nicht nur 
                Ihr Fahrzeug, sondern auch Ihr finanzielles Risiko im Straßenverkehr. Ob Neuwagen 
                oder Gebrauchtwagen – wir bieten maßgeschneiderte Lösungen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Profitieren Sie von attraktiven Schadenfreiheitsrabatten, flexiblen Tarifoptionen 
                und schneller Schadensregulierung. Unsere Partner gehören zu den führenden 
                Versicherern Deutschlands und garantieren zuverlässigen Service.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgKraftfahrt}
                alt="Kraftfahrt-Versicherung"
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
              <CardTitle>Tarifvergleich</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Leistung</TableHead>
                      <TableHead>Haftpflicht</TableHead>
                      <TableHead>Teilkasko</TableHead>
                      <TableHead>Vollkasko</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.haftpflicht}</TableCell>
                        <TableCell>{row.teilkasko}</TableCell>
                        <TableCell>{row.vollkasko}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Jetzt Beitrag berechnen lassen</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Erhalten Sie ein individuelles Angebot für Ihre KFZ-Versicherung und sparen 
              Sie mit dem richtigen Tarif bares Geld.
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

export default Kraftfahrt;
