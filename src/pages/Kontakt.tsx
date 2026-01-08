import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Mail, Phone, MapPin, Clock, Loader2, MapPinned, Cookie } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { preferences, openSettings } = useCookieConsent();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
      });
      
      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

                <Button size="lg" type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Nachricht senden"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">So finden Sie uns</h2>
            <p className="text-muted-foreground">Besuchen Sie uns in unserem Büro</p>
          </div>
          <div className="max-w-5xl mx-auto">
            {preferences.externalMedia ? (
              <>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4091893055867!2d13.404954076909493!3d52.52000657981198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort BKF Assekuranz"
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Musterstraße 123, 12345 Musterstadt
                </p>
              </>
            ) : (
              <div className="rounded-2xl bg-muted/50 border-2 border-dashed border-muted-foreground/20 h-[450px] flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPinned className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Google Maps ist deaktiviert</h3>
                  <p className="text-muted-foreground max-w-md mb-4">
                    Um die Karte anzuzeigen, müssen Sie der Nutzung von externen Medien in den Cookie-Einstellungen zustimmen.
                  </p>
                  <Button onClick={openSettings} variant="outline" className="gap-2">
                    <Cookie className="h-4 w-4" />
                    Cookie-Einstellungen öffnen
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Musterstraße 123, 12345 Musterstadt
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
