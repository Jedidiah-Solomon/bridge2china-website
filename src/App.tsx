import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import BackToTop from "@/components/BackToTop";
import TalkToUsModal from "@/components/TalkToUsModal";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={<Index onOpenModal={() => setModalOpen(true)} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ContactBar />
      <BackToTop />
      <TalkToUsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
