import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { productPages } from "@/data/productPages";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function ProductLanding() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productPages[slug] : null;

  if (!product) {
    return (
      <Layout>
        <section className="pt-32 pb-24 px-6 text-center">
          <h1 className="font-display text-3xl mb-4">Product not found</h1>
          <Link to="/brands" className="text-primary underline font-body">← Back to brands</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductSpecs product={product} />
      <ProductCTA product={product} />
    </Layout>
  );
}

function ProductHero({ product }: { product: typeof productPages[string] }) {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-background to-background" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Link to={`/brands/${product.brandSlug}`} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> {product.brandName}
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <span className="font-body text-sm text-muted-foreground">Products</span>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <span className="font-body text-sm text-foreground">{product.name}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-body tracking-widest uppercase bg-primary/10 text-primary rounded-sm mb-6">
            {product.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
            {product.seo.h1}
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            {product.tagline}
          </p>

          {/* Product image placeholder */}
          <div className="w-full aspect-[21/9] bg-card/60 border border-border rounded-sm flex items-center justify-center">
            <span className="font-body text-sm text-muted-foreground tracking-wider">Product Image — {product.brandName} {product.name}</span>
          </div>

          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mt-8">
            {product.heroDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProductFeatures({ product }: { product: typeof productPages[string] }) {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Engineering</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12">
            What makes it <span className="italic text-gold-gradient">exceptional</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-lg font-medium mb-3">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSpecs({ product }: { product: typeof productPages[string] }) {
  return (
    <section className="py-20 px-6 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Specifications</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12">
            The <span className="italic text-gold-gradient">numbers</span>
          </h2>
        </motion.div>

        <div className="border border-border rounded-sm overflow-hidden">
          {product.specifications.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`flex items-center justify-between px-6 py-4 font-body text-sm ${
                i % 2 === 0 ? "bg-card/50" : "bg-background"
              } ${i < product.specifications.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-muted-foreground">{spec.label}</span>
              <span className="text-foreground font-medium text-right">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCTA({ product }: { product: typeof productPages[string] }) {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Experience It</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Hear the <span className="italic text-gold-gradient">{product.name}</span> at Qubix
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            {product.whyQubix}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/brands/${product.brandSlug}#enquire`}
              className="px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Enquire About {product.name}
            </Link>
            <Link
              to={`/brands/${product.brandSlug}`}
              className="px-8 py-4 font-body font-medium text-sm tracking-wider border border-border text-foreground rounded-sm hover:border-primary/30 transition-colors"
            >
              View All {product.brandName} Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
