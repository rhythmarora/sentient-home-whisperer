import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/design" element={<DesignYourHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
