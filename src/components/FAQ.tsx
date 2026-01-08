import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Welche Versicherungen brauche ich wirklich?",
    answer:
      "Das hängt von Ihrer individuellen Lebenssituation ab. Grundsätzlich empfehlen wir eine private Haftpflichtversicherung, eine Berufsunfähigkeitsversicherung und eine Krankenversicherung. Bei Immobilienbesitz ist eine Wohngebäudeversicherung essentiell. Gerne beraten wir Sie persönlich, um den optimalen Versicherungsschutz für Sie zu ermitteln.",
  },
  {
    question: "Wie kann ich meine bestehenden Versicherungen optimieren?",
    answer:
      "Wir analysieren Ihre aktuellen Verträge kostenlos und unverbindlich. Dabei prüfen wir, ob Sie überversichert sind, Lücken im Schutz haben oder durch einen Anbieterwechsel Geld sparen können. Als unabhängige Makler haben wir Zugang zu über 100 Versicherungsgesellschaften.",
  },
  {
    question: "Was kostet eine Beratung bei BKF Assekuranz?",
    answer:
      "Unsere Beratung ist für Sie kostenfrei. Als Versicherungsmakler werden wir von den Versicherungsgesellschaften vergütet. Sie zahlen also keinen Cent mehr als bei einem Direktabschluss – profitieren aber von unserer unabhängigen Expertise.",
  },
  {
    question: "Was ist der Unterschied zwischen einem Makler und einem Vertreter?",
    answer:
      "Ein Versicherungsvertreter arbeitet für eine bestimmte Versicherungsgesellschaft und verkauft deren Produkte. Als unabhängiger Versicherungsmakler sind wir Ihrem Interesse verpflichtet und können aus dem gesamten Markt das beste Angebot für Sie auswählen.",
  },
  {
    question: "Wie schnell kann ich im Schadensfall mit Hilfe rechnen?",
    answer:
      "Im Schadensfall sind wir sofort für Sie da. Wir unterstützen Sie bei der Schadensmeldung, kommunizieren direkt mit der Versicherung und setzen uns für eine schnelle und faire Regulierung ein. Rufen Sie uns einfach an oder nutzen Sie unser Kontaktformular.",
  },
  {
    question: "Kann ich meine Versicherungen online verwalten?",
    answer:
      "Ja, wir bieten unseren Kunden einen digitalen Versicherungsordner, in dem Sie alle Ihre Verträge übersichtlich einsehen können. Zusätzlich stehen wir Ihnen natürlich auch persönlich, telefonisch oder per E-Mail zur Verfügung.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Versicherungen und unsere Dienstleistungen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
