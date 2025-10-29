import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <nav className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/src/assets/bkf-logo.jpg" alt="BKF Assekuranz-Versicherungen" className="h-10" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Startseite
          </a>
          <a href="#versicherungen" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Versicherungen
          </a>
          <a href="#ueber-uns" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Über uns
          </a>
          <a href="#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
            Angebot anfordern
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-6 py-4 space-y-4">
            <a
              href="/"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Startseite
            </a>

            <a
              href="#versicherungen"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Versicherungen
            </a>

            <a
              href="#ueber-uns"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Über uns
            </a>

            <a
              href="#kontakt"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Kontakt
            </a>

            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
                Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
