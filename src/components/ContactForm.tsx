import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const allServices = [
  "Product & Supplier Sourcing",
  "Payments",
  "Air Freight",
  "Sea Freight",
  "Study in China Admission Processing",
  "Business Consultation & General Contracts",
];

const freightServices = ["Air Freight", "Sea Freight"];
const studyService = "Study in China Admission Processing";

interface ContactFormProps {
  inline?: boolean;
  onClose?: () => void;
}

const ContactForm = ({ inline, onClose }: ContactFormProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const hasFreight = selectedServices.some((s) => freightServices.includes(s));
  const hasStudy = selectedServices.includes(studyService);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleCloseAll = () => {
    setShowPopup(false);

    if (onClose) {
      onClose();
    }
  };

  const handleGoToHomepage = () => {
    handleCloseAll();

    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      handleGoToHomepage();
    }, 8000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const files = fileInputRef.current?.files;

    if (files && files.length > 0) {
      let total = 0;
      for (let i = 0; i < files.length; i++) total += files[i].size;

      if (total > 10 * 1024 * 1024) {
        alert("Total attachment size must be less than 10 MB.");
        return;
      }
    }

    setSubmitting(true);

    try {
      const formData = new FormData(form);
      formData.set("_replyto", (formData.get("email") as string) || "");
      formData.set("_subject", "New Bridge2China Inquiry");

      const res = await fetch(
        "https://formsubmit.co/onwubikojedidiah@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!res.ok) {
        alert("Submission failed. Please try again later.");
        setSubmitting(false);
        return;
      }

      setShowPopup(true);
      setSubmitting(false);
      form.reset();
      setSelectedServices([]);
    } catch {
      alert("Submission failed. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-2">
              Thanks - Request Sent
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Would you like to book a meeting with us now?
            </p>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://hds.hordanso.ng/widget/booking/XWhpGhzNWtr7tDx4rM7e",
                    "_blank",
                  )
                }
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded"
              >
                Book a Meeting
              </button>

              <button
                type="button"
                onClick={handleGoToHomepage}
                className="px-4 py-2 border rounded"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ MAIN FORM */}
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <Input name="name" placeholder="Your Name *" required />
        <Input
          name="email"
          type="email"
          placeholder="Email Address *"
          required
        />
        <Input name="phone" type="tel" placeholder="Phone Number *" required />

        <div>
          <p className="text-sm font-medium mb-2">Select Services *</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {allServices.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <Textarea name="message" placeholder="More information..." rows={4} />

        <Input
          type="file"
          ref={fileInputRef}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
        />

        <Button
          type="submit"
          disabled={selectedServices.length === 0 || submitting}
          className="w-full"
        >
          {submitting ? "Sending..." : "Send Request"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
