import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import CookieSettings from "@/components/CookieSettings";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const { hasConsent, acceptAll, rejectAll, openSettings } = useCookieConsent();

  return (
    <>
      <CookieSettings />
      
      {!hasConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
          <div className="container max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Wir respektieren Ihre Privatsphäre</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu optimieren 
                    und Ihnen ein besseres Nutzungserlebnis zu bieten. Einige Cookies sind für den 
                    Betrieb der Website unbedingt erforderlich, während andere uns helfen, die Website 
                    zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.{" "}
                    <Link to="/datenschutz" className="text-primary underline hover:no-underline">
                      Mehr erfahren
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                <Button 
                  variant="outline" 
                  onClick={openSettings}
                  className="w-full sm:w-auto order-3 sm:order-1"
                >
                  Einstellungen
                </Button>
                <Button 
                  variant="outline" 
                  onClick={rejectAll}
                  className="w-full sm:w-auto order-2"
                >
                  Nur essenzielle
                </Button>
                <Button 
                  onClick={acceptAll}
                  className="w-full sm:w-auto order-1 sm:order-3"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
