import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InsuranceBreadcrumb from "@/components/InsuranceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgGesundheit from "@/assets/Produkte/Gesundheit und Pflege.png";

const GesundheitPflege = () => {
  const benefits = [
    "Umfassende medizinische Versorgung im privaten und gesetzlichen System",
    "Freie Arzt- und Krankenhauswahl für optimale Behandlung",
    "Zahnzusatzversicherung für hochwertige Zahnbehandlungen",
    "Auslandskrankenversicherung für weltweiten Schutz",
    "Pflegeabsicherung für den Ernstfall",
    "Krankentagegeld bei längerer Arbeitsunfähigkeit"
  ];

  const comparisonData = [
    { feature: "Einzelzimmer im Krankenhaus", basis: "Nein", comfort: "Ja", premium: "Ja" },
    { feature: "Chefarztbehandlung", basis: "Nein", comfort: "Teilweise", premium: "Ja" },
    { feature: "Heilpraktiker", basis: "Nein", comfort: "Bis 500€", premium: "Unbegrenzt" },
    { feature: "Zahnersatz", basis: "60%", comfort: "80%", premium: "90%" },
    { feature: "Vorsorgeuntersuchungen", basis: "Standard", comfort: "Erweitert", premium: "Premium" },
    { feature: "Auslandsschutz", basis: "EU", comfort: "Weltweit 6 Wochen", premium: "Weltweit unbegrenzt" }
  ];

  return (
    <Layout>
      <PageHero
        title="Gesundheit und Pflege"
        description="Sichern Sie Ihre Gesundheit und Ihr Wohlbefinden mit maßgeschneiderten Versicherungslösungen"
      />
      <InsuranceBreadcrumb currentPage="Gesundheit und Pflege" />

      <section className="py-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ihre Gesundheit in besten Händen</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Die Gesundheit ist unser höchstes Gut. Mit unseren Kranken- und Pflegeversicherungen 
                sorgen wir dafür, dass Sie und Ihre Familie bestmöglich abgesichert sind. Ob gesetzlich 
                oder privat versichert – wir finden die passende Lösung für Ihre Bedürfnisse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Von der Basis-Absicherung bis zum Premium-Schutz bieten wir Ihnen flexible Tarife, 
                die sich an Ihre Lebenssituation anpassen. Ergänzen Sie Ihre Krankenversicherung mit 
                sinnvollen Zusatzbausteinen für Zahn, Pflege oder Auslandsreisen.
              </p>
            </div>
            <div className="relative">
              <img
                src={imgGesundheit}
                alt="Gesundheit und Pflege"
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
                        <TableCell>{row.comfort}</TableCell>
                        <TableCell>{row.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Jetzt persönliche Beratung vereinbaren</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie sich von unseren Experten beraten und finden Sie die optimale 
              Gesundheits- und Pflegeversicherung für Ihre Bedürfnisse.
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

export default GesundheitPflege;
