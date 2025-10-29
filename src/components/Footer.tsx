const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex gap-6 text-sm">
            <a href="#impressum" className="text-white/80 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="text-white/80 hover:text-white transition-colors">
              Datenschutzerklärung
            </a>
          </div>
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} BKF Assekuranz-Versicherungen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
