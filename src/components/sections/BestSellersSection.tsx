import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductCard } from "@/components/ui/ProductCard";
import { bestSellers } from "@/data/products";

export function BestSellersSection() {
  const items = bestSellers().slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-marble-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Best Sellers</SectionLabel>
            <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
              Pieces our clients
              <br />
              <span className="italic text-gold">keep coming back for.</span>
            </h2>
          </div>
          <Link href="/shop" className="label hover-rule w-fit" style={{ color: "var(--ink)" }}>
            Shop all
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
