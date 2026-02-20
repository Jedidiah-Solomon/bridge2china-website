import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  CreditCard,
  Truck,
  MessageSquare,
  School,
  FileCheck,
  Plane,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import FAQSection from "@/components/FAQSection";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

interface IndexProps {
  onOpenModal: () => void;
}

const heroSlides = [
  {
    img: hero1,
    headline: "Your Gateway to China Business",
    sub: "Product sourcing, supplier verification, freight forwarding, and business consulting — all under one roof.",
  },
  {
    img: hero2,
    headline: "Air & Sea Freight Worldwide",
    sub: "Reliable air freight and cost-effective sea freight solutions from China to your doorstep, with full customs clearance.",
  },
  {
    img: hero3,
    headline: "Study in China",
    sub: "University admissions, scholarship guidance, visa processing, and arrival support for international students.",
  },
  {
    img: hero4,
    headline: "Business Consultation & Contracts",
    sub: "Market entry strategy, company registration, contract negotiation, and ongoing advisory for your China venture.",
  },
  {
    img: hero5,
    headline: "Trusted Sourcing & Payments",
    sub: "We find the right suppliers, verify quality, and facilitate secure payments so you trade with confidence.",
  },
];

const businessSteps = [
  {
    icon: Search,
    title: "Inquiry",
    desc: "Tell us what you need — products, quantities, specifications, and budget.",
  },
  {
    icon: Users,
    title: "Finding Suppliers",
    desc: "We source and verify the best manufacturers and suppliers across China.",
  },
  {
    icon: CreditCard,
    title: "Deposit & Order",
    desc: "Secure your order with a deposit. Balance is paid upon completion and inspection.",
  },
  {
    icon: Truck,
    title: "Freight & Delivery",
    desc: "Choose air or sea freight — we handle logistics, customs, and real-time tracking.",
  },
];

const studySteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "Discuss your academic goals, budget, and preferred programs with our advisors.",
  },
  {
    icon: School,
    title: "School Selection & Application",
    desc: "We shortlist universities, guide scholarship applications, and submit your paperwork.",
  },
  {
    icon: FileCheck,
    title: "Admission & Visa Processing",
    desc: "Full support from acceptance letters through visa application and approval.",
  },
  {
    icon: Plane,
    title: "Travel & Arrival Support",
    desc: "Airport pickup, accommodation setup, orientation, and settling-in assistance.",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Chinese wholesale market" },
  { src: gallery2, alt: "Logistics warehouse" },
  { src: gallery3, alt: "Graduates in China" },
  { src: gallery4, alt: "Business partnership" },
  { src: gallery5, alt: "Shanghai skyline" },
  { src: gallery6, alt: "Quality inspection" },
];

const testimonials = [
  {
    name: "Adebayo Johnson",
    review:
      "Bridge2China sourced products from three different suppliers for us, handled quality inspection, and shipped everything via sea freight — all seamlessly.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    review:
      "Their study admission team helped me secure a scholarship at a top Beijing university. From application to airport pickup, they covered everything.",
    rating: 5,
  },
  {
    name: "Michael Okafor",
    review:
      "We used their supplier verification service before placing a large order. It saved us from a bad deal. Truly invaluable partners.",
    rating: 5,
  },
  {
    name: "Fatima Al-Rashid",
    review:
      "Air freight was fast and customs clearance was handled perfectly. Bridge2China keeps you updated at every stage — highly recommend!",
    rating: 5,
  },
  {
    name: "David Nkemelu",
    review:
      "Their business consultation helped us set up contracts with Chinese manufacturers. Professional, transparent, and always responsive.",
    rating: 4,
  },
];

const Index = ({ onOpenModal }: IndexProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].img})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 h-full flex items-center section-padding">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                  {heroSlides[currentSlide].headline}
                </h1>
                <p className="text-primary-foreground/80 text-base lg:text-lg mb-8 max-w-lg">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              Talk to Us
            </Button>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentSlide
                  ? "bg-primary w-8"
                  : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Business Steps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-2">
              4 Easy Steps – Plan Your Move
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Streamlined processes for business and education.
            </p>
          </ScrollAnimation>

          {/* Business Trade Process */}
          <ScrollAnimation>
            <h3 className="font-heading text-xl lg:text-2xl font-semibold text-center mb-8">
              Business / Trade Process
            </h3>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {businessSteps.map((step, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow text-center group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="absolute top-4 right-4 font-heading text-3xl font-bold text-primary/10">
                    {i + 1}
                  </span>
                  <h4 className="font-heading font-semibold text-base mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Study in China Process */}
          <ScrollAnimation>
            <h3 className="font-heading text-xl lg:text-2xl font-semibold text-center mb-8">
              Study in China Process
            </h3>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studySteps.map((step, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow text-center group">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <step.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="absolute top-4 right-4 font-heading text-3xl font-bold text-accent/20">
                    {i + 1}
                  </span>
                  <h4 className="font-heading font-semibold text-base mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="w-full section-padding">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-10">
              Our Gallery
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <ScrollAnimation key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxImage(img.src)}
                  className="relative overflow-hidden rounded-lg aspect-[4/3] group w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-2">
              What Our Customers Say About Us
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Real stories from real clients.
            </p>
          </ScrollAnimation>

          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-lg p-8 shadow-card text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({
                    length: testimonials[testimonialIndex].rating,
                  }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed">
                  "{testimonials[testimonialIndex].review}"
                </p>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 font-heading font-bold text-primary text-lg">
                  {testimonials[testimonialIndex].name[0]}
                </div>
                <p className="font-semibold text-sm">
                  {testimonials[testimonialIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() =>
                  setTestimonialIndex(
                    (p) => (p - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setTestimonialIndex((p) => (p + 1) % testimonials.length)
                }
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

export default Index;
