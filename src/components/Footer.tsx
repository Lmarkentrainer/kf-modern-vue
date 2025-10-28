import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/src/assets/bkf-logo.jpg" alt="BKF Assekuranz-Versicherungen" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-white/80 mb-4">
              Ihr unabhängiger Versicherungsmakler für professionelle Beratung und maßgeschneiderte Lösungen.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 123 456789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@bkf-assekuranz.de</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Musterstraße 1, 12345 Stadt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#privatkunden" className="hover:text-white transition-colors">Privatkunden</a>
              </li>
              <li>
                <a href="#firmenkunden" className="hover:text-white transition-colors">Firmenkunden</a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
              </li>
              <li>
                <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
              </li>
              <li>
                <a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} BKF Assekuranz-Versicherungen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
