import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, groupLabels } from "@/data/categories";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Shop All Categories",
  description:
    "Browse the full marble lifestyle collection. Trays, vanity sets, furniture, decor and more.",
};

export default function ShopIndex() {
  const groups = Array.from(new Set(categories.map((c) => c.group)));

  return (
    <div className="bg-marble">
      <div
        className="relative pt-40 pb-16 px-6 lg:px-10 marble-veined"
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Shop</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.04 }}
          >
            The full <span className="italic text-gold">collection.</span>
          </h1>
          <p className="mt-6 max-w-xl">
            Every category in the marble lifestyle range, grouped into fourteen collections from home decor to architectural work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        {groups.map((group) => {
          const list = categories.filter((c) => c.group === group);
          return (
            <section key={group} className="mb-20 last:mb-0">
              <div className="flex items-end justify-between mb-8 border-b border-line pb-4">
                <h2
                  className="font-display"
                  style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
                >
                  {groupLabels[group]}
                </h2>
                <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
                  {list.length} {list.length === 1 ? "category" : "categories"}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                {list.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/shop/${c.slug}`}
                    className="group block"
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden bg-marble-soft shadow-stone group-hover:shadow-stone-hover transition-shadow duration-500"
                      style={{ borderRadius: "4px" }}
                    >
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="(max-width: 768px) 45vw, 22vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(26,24,21,0) 55%, rgba(26,24,21,0.6) 100%)",
                        }}
                      />
                    </div>
                    <p
                      className="font-display italic mt-4"
                      style={{ fontSize: "1.2rem", color: "var(--ink)" }}
                    >
                      {c.name}
                    </p>
                    <p
                      className="label-sm mt-1"
                      style={{ color: "var(--ink-mute)" }}
                    >
                      Explore
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
