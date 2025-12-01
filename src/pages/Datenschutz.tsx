import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Datenschutz = () => {
  return (
    <Layout>
      <PageHero 
        title="Datenschutzerklärung"
        description="Informationen zur Verarbeitung Ihrer personenbezogenen Daten"
      />
      
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">2. Hosting</h2>
            <p className="mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mb-4">
              Beim Besuch dieser Website werden verschiedene Daten wie IP-Adresse, Browsertyp, verwendetes 
              Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage 
              und ähnliche Informationen verarbeitet.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mb-4">
              <p>BKF Assekuranz-Versicherungen</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Telefon: +49 (0) 123 456789</p>
              <p>E-Mail: info@bkf-assekuranz.de</p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller 
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres 
              Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">5. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-12">6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
              wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
              des Browsers von „http://" auf „https://" wechselt.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
