import HeroBanner from "@/components/HeroBanner";
import hero5 from "@/assets/hero-5.jpg";

const RefundPolicy = () => {
  return (
    <main>
      <HeroBanner
        title="Refund Policy"
        subtitle="Understand our refund procedures and conditions."
        backgroundImage={hero5}
      />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-lg mb-6">
                At Bridge2China, we strive to provide high-quality consulting
                services. This Refund Policy outlines our refund procedures and
                conditions.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Refund Eligibility
              </h2>
              <p className="mb-4">
                Refunds may be available for certain services under specific
                circumstances. Please contact us to discuss your situation.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Refund Process
              </h2>
              <p className="mb-4">
                Refund requests must be submitted within a reasonable timeframe.
                We will review each request on a case-by-case basis and process
                eligible refunds promptly.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Non-Refundable Services
              </h2>
              <p className="mb-4">
                Some services may be non-refundable. Please check the specific
                terms for each service.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                For refund inquiries, please contact us at
                info@bridge2china.org.
              </p>

              <p className="text-sm text-foreground/60 mt-8">
                <em>
                  This refund policy will be updated with more detailed
                  information soon.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
