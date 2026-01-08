import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValueProps />
      <Services />
      <Partners />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
