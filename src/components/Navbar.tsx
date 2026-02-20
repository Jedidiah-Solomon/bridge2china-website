import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="ZMIB - Zhenjiang Mendao business international co., Ltd"
              className="h-10 lg:h-12 rounded"
            />
            <span
              className={`font-heading font-bold text-lg lg:text-xl ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              ZMIB
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : scrolled
                      ? "text-foreground"
                      : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:info@bridge2china.com"
              className={`flex items-center gap-1.5 text-sm font-bold hover:text-primary transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              info@bridge2china.com
            </a>
            <Button
              onClick={onOpenModal}
              size="sm"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 font-semibold"
            >
              Talk to Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="section-padding py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-base font-bold ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:info@bridge2china.com"
                className="flex items-center gap-1.5 text-sm font-bold text-black py-2"
              >
                <Mail className="w-3.5 h-3.5" />
                info@bridge2china.com
              </a>
              <Button
                onClick={onOpenModal}
                className="w-full bg-gradient-primary text-primary-foreground"
              >
                Talk to Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
