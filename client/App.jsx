import "./global.css";

import { Toaster } from "./components/ui/toaster"; // adjust path as needed
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Chatbot from "./components/Chatbot";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Company from "./pages/Company";
import InvestmentManagement from "./pages/InvestmentManagement";
import RealEstateService from "./pages/RealEstateService";
import ProjectsInvestment from "./pages/ProjectsInvestment";
import News from "./pages/News";
import InvestorPortal from "./pages/InvestorPortal";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Overview from "./pages/investment/Overview";
import RealEstate from "./pages/realEstate/RealEstate";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/project/ProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/company/*" element={<Company />} />
            <Route path="/investment-management/*" element={<InvestmentManagement />} />
            <Route path="/investment-management/overview" element={<Overview />} />
            <Route path="/real-estate-service/*" element={<RealEstateService />} />
            <Route path="/real-estate-services/real-estate" element={<RealEstate />} />
            <Route path="/projects-investment/*" element={<ProjectsInvestment />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/investor-portal/*" element={<InvestorPortal />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

createRoot(document.getElementById("root")).render(<App />);