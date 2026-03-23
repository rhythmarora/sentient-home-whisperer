import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const categories = ["All", "Speakers", "Amplifiers", "Subwoofers", "Projectors", "Processors", "Control", "Lighting", "Networking", "Security"];
const brands = ["All", "PMC", "Crestron", "Wharfedale", "Meyer Sound", "Sonance", "JBL Synthesis", "Lutron", "Sony"];

const sampleProducts = [
  { name: "PMC twenty5.26i", brand: "PMC", category: "Speakers", description: "Three-way floorstander with Advanced Transmission Line technology. Studio-grade accuracy in an elegant cabinet.", slug: "pmc-twenty5-26i" },
  { name: "PMC ci65", brand: "PMC", category: "Speakers", description: "Custom installation speaker designed for flush-mount cinema and music applications.", slug: "pmc-ci65" },
  { name: "Crestron CP4-R", brand: "Crestron", category: "Control", description: "The brain of the intelligent home. 4-Series control processor for whole-home automation.", slug: "crestron-cp4r" },
  { name: "Crestron TSW-1070", brand: "Crestron", category: "Control", description: "10.1-inch touch screen with sleek design for room-by-room or whole-home control.", slug: "crestron-tsw-1070" },
  { name: "Wharfedale Elysian 4", brand: "Wharfedale", category: "Speakers", description: "Flagship floorstander combining AMT tweeter technology with deep, musical bass.", slug: "wharfedale-elysian-4" },
  { name: "Meyer Sound Bluehorn", brand: "Meyer Sound", category: "Speakers", description: "The world's most accurate studio monitor. Linear phase, zero distortion, absolute truth.", slug: "meyer-sound-bluehorn" },
  { name: "Sonance VP86R", brand: "Sonance", category: "Speakers", description: "In-ceiling speaker that disappears into architecture while delivering audiophile performance.", slug: "sonance-vp86r" },
  { name: "Sony VPL-XW7000ES", brand: "Sony", category: "Projectors", description: "Native 4K SXRD laser projector with exceptional HDR performance for dedicated cinema rooms.", slug: "sony-vpl-xw7000es" },
  { name: "Lutron HomeWorks QSX", brand: "Lutron", category: "Lighting", description: "Total light control for luxury homes. Precision dimming, automated shading, and scene design.", slug: "lutron-homeworks-qsx" },
  { name: "JBL Synthesis SCL-2", brand: "JBL Synthesis", category: "Speakers", description: "In-wall cinema speaker with compression driver technology for reference-level home theatres.", slug: "jbl-synthesis-scl2" },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filtered = sampleProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesBrand = selectedBrand === "All" || p.brand === selectedBrand;
    return matchesSearch && matchesCat && matchesBrand;
  });

  return (
    <Layout>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Products
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
              The tools of our craft
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Every product is chosen for a purpose. Browse our curated selection.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                maxLength={100}
                className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-body rounded-sm border transition-colors ${
                    selectedCategory === cat
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 text-xs font-body rounded-sm border transition-colors ${
                    selectedBrand === b
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block p-6 rounded-sm border border-border bg-card hover:border-primary/20 transition-all duration-300 h-full"
                >
                  {/* Image placeholder */}
                  <div className="aspect-square rounded-sm bg-gradient-to-br from-secondary to-background border border-border mb-4" />
                  <p className="font-body text-xs tracking-wider uppercase text-primary mb-2">
                    {product.brand} · {product.category}
                  </p>
                  <h3 className="font-display text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground">No products match your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
