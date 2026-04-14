import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import qubixLogo from "@/assets/qubix-logo.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Experience", href: "/#experience" },
  {
    label: "For Homeowners",
    dropdown: [
      { label: "Design Your Home", href: "/design" },
      { label: "Spaces", href: "/spaces" },
      { label: "Systems", href: "/systems" },
    ],
  },
  { label: "Builders & Developers", href: "/builders" },
  { label: "Architects & Designers", href: "/architects" },
  { label: "Experience Center", href: "/experience-center" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isActive = item.dropdown?.some((d) => location.pathname === d.href);

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`flex items-center gap-1 font-body text-sm tracking-wide transition-colors duration-300 hover:text-foreground ${
          isActive ? "text-foreground" : "text-silver"
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[200px] py-2 rounded-md bg-card border border-border shadow-xl"
          >
            {item.dropdown!.map((sub) => (
              <Link
                key={sub.href}
                to={sub.href}
                className={`block px-5 py-2.5 font-body text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                  location.pathname === sub.href ? "text-foreground" : "text-silver"
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const handleExperienceClick = (e: React.MouseEvent, href: string) => {
    if (href === "/#experience") {
      e.preventDefault();
      if (location.pathname === "/") {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), 500);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass glass-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src={qubixLogo} alt="Qubix" className="h-8 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
                item.dropdown ? (
                  <DesktopDropdown key={item.label} item={item} />
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={(e) => handleExperienceClick(e, item.href!)}
                    className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-foreground ${
                      location.pathname === item.href ? "text-foreground" : "text-silver"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-body font-medium bg-gradient-vibrant text-white rounded-full tracking-wide hover:opacity-90 transition-opacity"
              >
                Book Consultation
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-24 overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-4 py-12">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="w-full max-w-xs text-center">
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="font-display text-2xl text-foreground flex items-center gap-2 mx-auto"
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-center gap-3 pt-3">
                            {item.dropdown.map((sub) => (
                              <Link key={sub.href} to={sub.href} className="font-body text-lg text-silver hover:text-foreground transition-colors">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={(e) => handleExperienceClick(e, item.href!)}
                    className="font-display text-2xl text-foreground hover:text-gradient-vibrant transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 text-lg font-body font-medium bg-gradient-vibrant text-white rounded-full tracking-wide"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
