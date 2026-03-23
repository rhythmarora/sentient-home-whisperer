import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useZohoSalesIQ } from "@/hooks/useZohoSalesIQ";

export default function Layout({ children }: { children: ReactNode }) {
  useZohoSalesIQ();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
