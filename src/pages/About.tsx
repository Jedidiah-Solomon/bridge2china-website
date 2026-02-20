import HeroBanner from "@/components/HeroBanner";
import ScrollAnimation from "@/components/ScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQSection from "@/components/FAQSection";
import hero1 from "@/assets/hero-1.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamOps from "@/assets/team-ops.jpg";
import teamSourcing from "@/assets/team-sourcing.jpg";
import teamEducation from "@/assets/team-education.jpg";
import teamLogistics from "@/assets/team-logistics.jpg";

const team = [
  {
    name: "James Okonkwo",
    title: "CEO / President",
    bio: "Visionary leader with 10+ years bridging African and Chinese markets.",
    img: teamCeo,
  },
  {
    name: "Amina Bello",
    title: "Operations Manager",
    bio: "Ensures seamless project execution and client satisfaction across all operations.",
    img: teamOps,
  },
  {
    name: "Wei Zhang",
    title: "Sourcing Specialist",
    bio: "Expert in Chinese manufacturing with deep supplier network knowledge.",
    img: teamSourcing,
  },
  {
    name: "Grace Adeyemi",
    title: "Education Consultant",
    bio: "Guides students through university selection, applications, and visa processes.",
    img: teamEducation,
  },
  {
    name: "Li Chen",
    title: "Logistics Coordinator",
    bio: "Manages end-to-end shipping and supply chain operations globally.",
    img: teamLogistics,
  },
];

const About = () => {
  return (
    <main>
      <HeroBanner
        title="About ZMIB"
        subtitle="Your trusted partner for China business, trade, and education."
        backgroundImage={hero1}
      />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify doing business with China — from product sourcing
                and supplier verification to air and sea freight, secure payment
                facilitation, and business consulting. We also open doors for
                international students seeking world-class education in China
                through end-to-end admission processing and support.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted bridge between Africa, the Middle East,
                and China — empowering entrepreneurs, importers, and students
                with reliable services, transparent processes, and lasting
                partnerships.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="w-full section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={8} suffix="+" label="Years of Experience" />
            <AnimatedCounter end={500} suffix="+" label="Clients Served" />
            <AnimatedCounter end={1200} suffix="+" label="Suppliers Network" />
            <AnimatedCounter end={350} suffix="+" label="Successful Projects" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-10">
              Our Team
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((m, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-heading font-semibold text-sm">
                      {m.name}
                    </h4>
                    <p className="text-primary text-xs font-medium mb-2">
                      {m.title}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

export default About;
