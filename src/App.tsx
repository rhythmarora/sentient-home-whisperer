import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Spaces from "./pages/Spaces";
import Systems from "./pages/Systems";
import Philosophy from "./pages/Philosophy";
import Projects from "./pages/Projects";
import ExperienceCenter from "./pages/ExperienceCenter";
import ConstellationPage from "./pages/Constellation";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";
import BrandLanding from "./pages/BrandLanding";
import Products from "./pages/Products";
import DesignYourHome from "./pages/DesignYourHome";
import ProductLanding from "./pages/ProductLanding";
import Builders from "./pages/Builders";
import Architects from "./pages/Architects";
import About from "./pages/About";
import Investment from "./pages/Investment";
import SmartHome from "./pages/SmartHome";
import HomeTheatre from "./pages/HomeTheatre";

import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <GoogleAnalytics />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Projects />} />
            <Route path="/experience-center" element={<ExperienceCenter />} />
            <Route path="/constellation" element={<ConstellationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:slug" element={<BrandLanding />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<Products />} />
            <Route path="/product/:slug" element={<ProductLanding />} />
            <Route path="/design" element={<DesignYourHome />} />
            <Route path="/builders" element={<Builders />} />
            <Route path="/architects" element={<Architects />} />
            <Route path="/about" element={<About />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/smart-home" element={<SmartHome />} />
            <Route path="/home-theatre" element={<HomeTheatre />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
