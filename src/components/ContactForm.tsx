import { useState, useRef } from "react";
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

const academicLevels = [
  "High School",
  "Diploma / Certificate",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
];

interface ContactFormProps {
  inline?: boolean;
}

const ContactForm = ({ inline }: ContactFormProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const files = fileInputRef.current?.files;
    if (files && files.length > 0) {
      let total = 0;
      for (let i = 0; i < files.length; i++) total += files[i].size;
      const max = 10 * 1024 * 1024; // 10MB
      if (total > max) {
        alert("Total attachment size must be less than 10 MB.");
        return;
      }
    }

    setSubmitting(true);

    try {
      const formData = new FormData(form);
      // Add helpful hidden fields for FormSubmit
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
        const text = await res.text().catch(() => "");
        console.error("Form submit failed", res.status, text);
        alert("Submission failed. Please try again later.");
        setSubmitting(false);
        return;
      }

      // Success: show popup then redirect to homepage
      setShowPopup(true);
      // Auto-redirect after 8 seconds
      setTimeout(() => navigate("/"), 8000);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <>
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
                  window.open("https://hds.hordanso.ng/widget/booking/XWhpGhzNWtr7tDx4rM7e", "_blank")
                }
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded"
              >
                Book a Meeting
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-4 py-2 border rounded"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        action="https://formsubmit.co/onwubikojedidiah@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input type="hidden" name="_replyto" value="%email%" />
        <input type="hidden" name="_subject" value="New Bridge2China Inquiry" />
        <div>
          <Input
            name="name"
            placeholder="Your Name *"
            required
            className="bg-muted"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address *"
            required
            className="bg-muted"
          />
        </div>
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number (with country code) *"
            required
            className="bg-muted"
          />
        </div>

        {/* Service Selection – Checkboxes */}
        <div>
          <p className="text-sm font-medium mb-2 text-foreground">
            Select Services *
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {allServices.map((service) => (
              <label
                key={service}
                className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                  selectedServices.includes(service)
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-muted text-muted-foreground hover:border-primary/40"
                }`}
              >
                <input
                  type="checkbox"
                  name="services[]"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                  className="accent-primary w-4 h-4 shrink-0"
                />
                <span className="leading-tight">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Conditional: Freight fields */}
        {hasFreight && (
          <div className="space-y-4 p-4 rounded-lg border border-border bg-muted/50">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
              Freight Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                name="origin"
                placeholder="Origin (city, country)"
                className="bg-background"
              />
              <Input
                name="destination"
                placeholder="Destination (city, country)"
                className="bg-background"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                name="weight"
                type="number"
                placeholder="Weight (kg)"
                min={0}
                className="bg-background"
              />
              <Input
                name="cbm"
                type="number"
                placeholder="CBM (Cubic Meters)"
                min={0}
                step="0.01"
                className="bg-background"
              />
            </div>
          </div>
        )}

        {/* Conditional: Study fields */}
        {hasStudy && (
          <div className="space-y-4 p-4 rounded-lg border border-border bg-muted/50">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
              Study Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select
                name="currentLevel"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>
                  Current Level
                </option>
                {academicLevels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <select
                name="intendedLevel"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>
                  Intended Admission Level
                </option>
                {academicLevels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div>
          <Textarea
            name="message"
            placeholder="More Information — special instructions, details about your needs..."
            rows={4}
            className="bg-muted"
          />
        </div>

        <div>
          <label
            htmlFor="attachment"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Attach File (PDF, DOC, DOCX, JPG, JPEG, PNG, GIF)
          </label>
          <Input
            id="attachment"
            name="attachment"
            type="file"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
            className="bg-muted"
          />
        </div>

        <Button
          type="submit"
          disabled={selectedServices.length === 0 || submitting}
          className="w-full bg-gradient-primary text-primary-foreground font-semibold"
        >
          {submitting ? "Sending..." : "Send Request"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
