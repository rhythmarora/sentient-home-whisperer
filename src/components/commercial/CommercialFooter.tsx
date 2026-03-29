import { Link } from "react-router-dom";
import qubixLogo from "@/assets/qubix-logo.png";

const footerLinks = {
  Services: [
    { label: "Technology Design", href: "/commercial/services" },
    { label: "System Integration", href: "/commercial/services" },
    { label: "Managed Services", href: "/commercial/services" },
    { label: "Program Management", href: "/commercial/services" },
  ],
  Markets: [
    { label: "Enterprise", href: "/commercial/markets" },
    { label: "Hospitality", href: "/commercial/markets" },
    { label: "Education", href: "/commercial/markets" },
    { label: "Command & Control", href: "/commercial/markets" },
  ],
  Connect: [
    { label: "Experience Center", href: "/experience-center" },
    { label: "Residential Solutions", href: "/" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function CommercialFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/commercial" className="inline-block mb-4">
              <img src={qubixLogo} alt="Qubix" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Engineering excellence for delightful experiences. 42+ years of designing, building & supporting technology for living, working, and public spaces.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-sm font-semibold tracking-wider uppercase text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Qubix. Engineering Excellence for Delightful Experiences.
          </p>
          <p className="font-body text-xs text-white/40">
            Bangalore · Pan-India · Global
          </p>
        </div>
      </div>
    </footer>
  );
}
