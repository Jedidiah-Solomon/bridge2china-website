import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const policies = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Terms & Conditions", path: "/terms-conditions" },
];

const socials = [
  { label: "X", url: "#", icon: "𝕏" },
  { label: "LinkedIn", url: "#", icon: "in" },
  { label: "Facebook", url: "#", icon: "f" },
  { label: "TikTok", url: "#", icon: "♪" },
  { label: "Instagram", url: "#", icon: "📷" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="w-full section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Bridge2China - Zhenjiang Mendao business international co., Ltd"
                className="h-10 rounded"
              />
              <span className="font-heading font-bold text-lg">
                Bridge2China
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Your trusted gateway to China for business, trade, education, and
              consulting services.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Policies
            </h4>
            <ul className="space-y-2">
              {policies.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@bridge2china.org
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +8613304xxxxx
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                China (Full address coming soon)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="w-full section-padding py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-foreground/50">
          <p>
            © {year} Bridge2China (Zhenjiang Mendao business international co.,
            Ltd). All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.jedidiahsolomon.name.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Jedidiah Solomon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
