import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProps />
      <Services />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
