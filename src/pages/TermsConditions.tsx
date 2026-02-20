import HeroBanner from "@/components/HeroBanner";
import hero1 from "@/assets/hero-1.jpg";

const TermsConditions = () => {
  return (
    <main>
      <HeroBanner
        title="Terms & Conditions"
        subtitle="Read our terms of service and usage policies."
        backgroundImage={hero1}
      />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-lg mb-6">
                Welcome to ZMIB (Zhenjiang Mendao business international co.,
                Ltd). These Terms & Conditions outline the rules and regulations
                for the use of our website and services.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using our services, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Services
              </h2>
              <p className="mb-4">
                ZMIB (Zhenjiang Mendao business international co., Ltd) provides
                consulting services related to business, trade, education, and
                other activities involving China.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                User Responsibilities
              </h2>
              <p className="mb-4">
                Users are responsible for providing accurate information and
                complying with applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                ZMIB (Zhenjiang Mendao business international co., Ltd) shall
                not be liable for any indirect, incidental, special, or
                consequential damages.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms & Conditions, please contact us
                at info@bridge2china.com.
              </p>

              <p className="text-sm text-foreground/60 mt-8">
                <em>
                  These terms and conditions will be updated with more detailed
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

export default TermsConditions;
