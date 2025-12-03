import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <CookieConsentProvider>
      <div className="min-h-screen">
        <Navigation />
        {children}
        <Footer />
        <CookieConsent />
      </div>
    </CookieConsentProvider>
  );
};

export default Layout;
