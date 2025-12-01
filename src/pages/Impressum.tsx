import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Impressum = () => {
  return (
    <Layout>
      <PageHero 
        title="Impressum"
        description="Angaben gemäß § 5 TMG"
      />
      
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
            <div className="mb-8">
              <p className="mb-2"><strong>BKF Assekuranz-Versicherungen</strong></p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">12345 Musterstadt</p>
              <p className="mb-2">Deutschland</p>
            </div>

            <div className="mb-8">
              <p className="mb-2"><strong>Telefon:</strong> +49 (0) 123 456789</p>
              <p className="mb-2"><strong>E-Mail:</strong> info@bkf-assekuranz.de</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Vertreten durch</h2>
            <p className="mb-4">Geschäftsführer: Max Mustermann</p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Registereintrag</h2>
            <div className="mb-8">
              <p className="mb-2"><strong>Registergericht:</strong> Amtsgericht Musterstadt</p>
              <p className="mb-2"><strong>Registernummer:</strong> HRB 12345</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Umsatzsteuer-ID</h2>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE123456789
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Aufsichtsbehörde</h2>
            <div className="mb-8">
              <p className="mb-2">Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</p>
              <p className="mb-2">Graurheindorfer Str. 108</p>
              <p className="mb-2">53117 Bonn</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="mb-4">
              <strong>Berufsbezeichnung:</strong> Versicherungsmakler (verliehen in Deutschland)
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Urheberrecht</h3>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
