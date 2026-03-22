import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Prices from "./pages/Prices.tsx";
import Contacts from "./pages/Contacts.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
