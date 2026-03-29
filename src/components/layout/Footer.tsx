import { Link } from "react-router-dom";
import qubixLogo from "@/assets/qubix-logo.png";

const footerLinks = {
  Experience: [
    { label: "Spaces", href: "/spaces" },
    { label: "Systems", href: "/systems" },
    { label: "Projects", href: "/projects" },
    { label: "Design Your Home", href: "/design" },
  ],
  Discover: [
    { label: "Brands", href: "/brands" },
    { label: "Products", href: "/products" },
    { label: "Philosophy", href: "/philosophy" },
  ],
  Connect: [
    { label: "Experience Center", href: "/experience-center" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-card">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-vibrant" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-[0.3em] uppercase text-gold-gradient">
                QUBIX
              </span>
            </Link>
            <p className="font-body text-sm text-silver leading-relaxed max-w-xs">
              We don't install systems. We design how your home feels.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm tracking-wider text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-silver hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-graphite flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ash">
            © {new Date().getFullYear()} Qubix. Luxury Technology Design.
          </p>
          <p className="font-body text-xs text-ash">
            Based in India · Designing for the world
          </p>
        </div>
      </div>
    </footer>
  );
}
