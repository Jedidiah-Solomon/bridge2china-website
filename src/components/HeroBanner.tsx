import { ReactNode } from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroBanner = ({ title, subtitle, backgroundImage, children }: HeroBannerProps) => {
  return (
    <section
      className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative z-10 text-center section-padding py-24 lg:py-32">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-base lg:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroBanner;
