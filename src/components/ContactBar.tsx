import { Phone, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-0">
      <a
        href="tel:+8613304xxxxxxxxx"
        className="bg-primary text-primary-foreground p-3 hover:opacity-90 transition-opacity flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4" />
      </a>
      <a
        href="mailto:info@bridge2china.org"
        className="bg-secondary text-secondary-foreground p-3 hover:opacity-90 transition-opacity flex items-center justify-center"
        aria-label="Email us"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ContactBar;
