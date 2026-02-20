import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  Ship,
  CreditCard,
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollAnimation from "@/components/ScrollAnimation";
import hero2 from "@/assets/hero-2.jpg";

const services = [
  {
    icon: Search,
    title: "Product & Supplier Sourcing",
    desc: "We locate trusted manufacturers and suppliers across China tailored to your exact product specifications, MOQ, and budget — from electronics and textiles to machinery and consumer goods.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Verification",
    desc: "Comprehensive background checks, factory audits, and on-site assessments to ensure you're partnering with legitimate, reliable suppliers before placing any orders.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "On-site product inspections at every stage — pre-production, during production, and pre-shipment — so every item meets your quality standards before it leaves China.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Fast, reliable air freight forwarding from China to your doorstep. Ideal for time-sensitive shipments with full customs clearance and real-time tracking support.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Cost-effective sea freight solutions for bulk shipments. We handle FCL and LCL cargo with end-to-end logistics from Chinese ports to destinations worldwide.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    desc: "Secure payment facilitation between you and Chinese suppliers. We help manage deposits, trade assurance, and balance settlements to protect your transactions.",
  },
  {
    icon: GraduationCap,
    title: "Study in China Admission Processing",
    desc: "End-to-end support for international students — from university selection and scholarship applications to admission processing, visa assistance, and arrival orientation.",
  },
  {
    icon: Building2,
    title: "Business Consultation & General Contracts",
    desc: "Strategic advisory for entering the Chinese market — company registration, contract negotiation, legal compliance, and ongoing business support.",
  },
];

const Services = () => {
  return (
    <main>
      <HeroBanner
        title="Our Services"
        subtitle="From sourcing and freight to education and consulting — ZMIB delivers end-to-end solutions for your China ambitions."
        backgroundImage={hero2}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <ScrollAnimation>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Whether you're importing products, shipping cargo, pursuing
              education in China, or setting up a business presence — our team
              has you covered at every step.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <ScrollAnimation key={i} delay={i * 0.08}>
                <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 duration-300 h-full group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
