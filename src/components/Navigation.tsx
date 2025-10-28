import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("DE");

  const privatkundenItems = [
    { title: "Gesundheit & Pflege", href: "#gesundheit" },
    { title: "Vorsorge & Vermögen", href: "#vorsorge" },
    { title: "Kraftfahrt", href: "#kraftfahrt" },
    { title: "Haus & Wohnen", href: "#haus" },
    { title: "Haftung & Recht", href: "#haftung" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-primary">
            Kübler & Fricker
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Privatkunden</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {privatkundenItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#firmenkunden"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Firmenkunden
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#ueber-uns"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Über uns
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#kontakt"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "DE" ? "EN" : "DE")}
            className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            {language}
          </button>

          {/* CTA Button */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full">
            Angebot anfragen
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
              Home
            </a>
            
            <div>
              <p className="py-2 text-sm font-medium text-muted-foreground">Privatkunden</p>
              <div className="pl-4 space-y-2">
                {privatkundenItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block py-1.5 text-sm hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#firmenkunden"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Firmenkunden
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

            <div className="pt-4 space-y-3">
              <button
                onClick={() => setLanguage(language === "DE" ? "EN" : "DE")}
                className="w-full px-4 py-2 text-sm font-medium rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                {language}
              </button>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full">
                Angebot anfragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
