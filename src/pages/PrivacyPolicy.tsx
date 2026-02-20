import HeroBanner from "@/components/HeroBanner";
import hero3 from "@/assets/hero-3.jpg";

const PrivacyPolicy = () => {
  return (
    <main>
      <HeroBanner
        title="Privacy Policy"
        subtitle="Learn how we protect and handle your personal information."
        backgroundImage={hero3}
      />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-lg mb-6">
                At ZMIB (Zhenjiang Mendao business international co., Ltd), we
                are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect personal information such as your name, email
                address, phone number, and business details when you contact us
                or use our services.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                Your information is used to provide our consulting services,
                respond to inquiries, and improve our offerings. We do not sell
                or share your personal information with third parties.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at info@bridge2china.com.
              </p>

              <p className="text-sm text-foreground/60 mt-8">
                <em>
                  This privacy policy will be updated with more detailed
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

export default PrivacyPolicy;
