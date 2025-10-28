import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Kübler & Fricker</h3>
            <p className="text-muted-foreground mb-4">
              Ihr unabhängiger Versicherungsmakler für professionelle Beratung und maßgeschneiderte Lösungen.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 123 456789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@kuebler-fricker.de</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Musterstraße 1, 12345 Stadt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Rechtliches</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">AGB</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Kübler & Fricker. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
