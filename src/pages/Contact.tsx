import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import hero4 from "@/assets/hero-4.jpg";

const socials = [
  { label: "X (Twitter)", url: "#" },
  { label: "LinkedIn", url: "#" },
  { label: "Facebook", url: "#" },
  { label: "TikTok", url: "#" },
  { label: "Instagram", url: "#" },
];

const Contact = () => {
  return (
    <main>
      <HeroBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's start a conversation."
        backgroundImage={hero4}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm inline />
            </ScrollAnimation>

            {/* Info */}
            <ScrollAnimation delay={0.2}>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                Contact Details
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      +8613304xxxxx
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@bridge2china.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WeChat</p>
                    <p className="text-sm text-muted-foreground">
                      +133040xxxxxx
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri: 8 AM – 10 PM (BJT)
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Closed on weekends
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className="font-heading font-semibold text-sm mb-3">
                  Follow Us
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      className="px-4 py-2 text-xs font-medium rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-muted">
        <iframe
          title="ZMIB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.123!2d121.4737!3d31.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEzJzQ5LjQiTiAxMjHCsDI4JzI1LjMiRQ!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <FAQSection />
    </main>
  );
};

export default Contact;
