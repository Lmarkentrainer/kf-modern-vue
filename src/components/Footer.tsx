import { Link } from "react-router-dom";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/impressum" className="text-white/80 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-white/80 hover:text-white transition-colors">
              Datenschutzerklärung
            </Link>
            <button 
              onClick={openSettings}
              className="text-white/80 hover:text-white transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} BKF Assekuranz-Versicherungen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
