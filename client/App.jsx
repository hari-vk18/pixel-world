import "./global.css";

import { Toaster } from "./components/ui/toaster"; // adjust path as needed
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Company from "./pages/Company";
import InvestmentManagement from "./pages/InvestmentManagement";
import RealEstateService from "./pages/RealEstateService";
import ProjectsInvestment from "./pages/ProjectsInvestment";
import News from "./pages/News";
import InvestorPortal from "./pages/InvestorPortal";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company/*" element={<Company />} />
          <Route path="/investment-management/*" element={<InvestmentManagement />} />
          <Route path="/real-estate-service/*" element={<RealEstateService />} />
          <Route path="/projects-investment/*" element={<ProjectsInvestment />} />
          <Route path="/news" element={<News />} />
          <Route path="/investor-portal/*" element={<InvestorPortal />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);