import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 (0) 123 456789",
    link: "tel:+49123456789",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@bkf-assekuranz.de",
    link: "mailto:info@bkf-assekuranz.de",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Musterstraße 123, 12345 Musterstadt",
    link: "#",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo-Fr: 9:00 - 18:00 Uhr",
    link: "#",
  },
];

const Kontakt = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <Layout>
      <PageHero 
        title="Kontaktieren Sie uns"
        description="Wir sind für Sie da – persönlich, telefonisch oder per E-Mail"
      />

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.title}
                  href={info.link}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Vorname *
                    </label>
                    <Input id="firstName" required placeholder="Max" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Nachname *
                    </label>
                    <Input id="lastName" required placeholder="Mustermann" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail *
                  </label>
                  <Input id="email" type="email" required placeholder="max@beispiel.de" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <Input id="phone" type="tel" placeholder="+49 123 456789" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Betreff *
                  </label>
                  <Input id="subject" required placeholder="Beratungsgespräch" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht *
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Ihre Nachricht..." 
                    rows={6}
                  />
                </div>

                <Button size="lg" type="submit" className="w-full rounded-full">
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Karte wird hier angezeigt</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
