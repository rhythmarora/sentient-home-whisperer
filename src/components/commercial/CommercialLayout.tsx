import { ReactNode } from "react";
import CommercialNavbar from "./CommercialNavbar";
import CommercialFooter from "./CommercialFooter";

export default function CommercialLayout({ children }: { children: ReactNode }) {
  return (
    <div className="theme-commercial min-h-screen bg-background text-foreground">
      <CommercialNavbar />
      <main>{children}</main>
      <CommercialFooter />
    </div>
  );
}
