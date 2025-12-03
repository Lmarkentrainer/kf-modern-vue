import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo-BKF.jpg";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="BKF Assekuranz-Versicherungen" className="h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-primary font-bold' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Startseite
          </Link>
          <Link 
            to="/versicherungen" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/versicherungen' || location.pathname.startsWith('/versicherungen/')
                ? 'text-primary font-bold' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Versicherungen
          </Link>
          <Link 
            to="/ueber-uns" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/ueber-uns' 
                ? 'text-primary font-bold' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Über uns
          </Link>
          <Link 
            to="/kontakt" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/kontakt' 
                ? 'text-primary font-bold' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Kontakt
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/kontakt">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
              Angebot anfordern
            </Button>
          </Link>
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
        <div className="md:hidden border-t bg-white">
          <div className="container px-6 py-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary font-bold' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Startseite
            </Link>

            <Link
              to="/versicherungen"
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === '/versicherungen' || location.pathname.startsWith('/versicherungen/')
                  ? 'text-primary font-bold' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Versicherungen
            </Link>

            <Link
              to="/ueber-uns"
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === '/ueber-uns' 
                  ? 'text-primary font-bold' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>

            <Link
              to="/kontakt"
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === '/kontakt' 
                  ? 'text-primary font-bold' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>

            <div className="pt-4">
              <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
                  Angebot anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
