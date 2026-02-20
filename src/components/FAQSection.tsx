import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Bridge2China offer?",
    a: "We offer product sourcing, supplier verification, quality inspection, logistics & shipping, study in China consulting, and business setup advisory services.",
  },
  {
    q: "How do I get started with Bridge2China?",
    a: "Simply fill out our contact form or click 'Talk to Us' to schedule a consultation. Our team will guide you through every step.",
  },
  {
    q: "Is Bridge2China reliable for product sourcing?",
    a: "Absolutely. With years of experience and a vast supplier network, we ensure quality, transparency, and timely delivery for all sourcing projects.",
  },
  {
    q: "Can Bridge2China help me study in China?",
    a: "Yes! We offer end-to-end support from school selection and application to visa processing and arrival assistance.",
  },
  {
    q: "What are the payment terms?",
    a: "For sourcing, we typically require a deposit to place your order. The balance is paid upon completion. Details are discussed during consultation.",
  },
  {
    q: "Do you provide logistics updates?",
    a: "Yes, we provide real-time logistics tracking and regular updates throughout the shipping process.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="w-full section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Find answers to common questions about our services.
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-lg px-5 border border-border"
              >
                <AccordionTrigger className="text-left font-medium text-sm lg:text-base hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
