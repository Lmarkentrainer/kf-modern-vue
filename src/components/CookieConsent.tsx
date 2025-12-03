import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Cookie-Einstellungen</h3>
            <p className="text-sm text-muted-foreground">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
              Weitere Informationen finden Sie in unserer{" "}
              <Link to="/datenschutz" className="text-primary underline hover:no-underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button variant="outline" onClick={acceptEssential} className="w-full sm:w-auto">
              Nur essenzielle
            </Button>
            <Button onClick={acceptAll} className="w-full sm:w-auto">
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
