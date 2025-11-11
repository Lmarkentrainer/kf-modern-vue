interface PageHeroProps {
  title: string;
  description: string;
}

const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
