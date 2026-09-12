import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collectionGroups, categoriesByGroup } from "@/data/categories";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "The Collections",
  description:
    "Fourteen curated marble collections, from home decor and bathroom accessories to architectural and luxury pieces.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-marble">
      <div className="pt-40 pb-12 px-6 lg:px-10 marble-veined">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>The Collections</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.04 }}
          >
            Fourteen ways
            <br />
            <span className="italic text-gold">into the stone.</span>
          </h1>
          <p className="mt-6 max-w-xl">
            Each collection groups together a family of pieces, from the small luxuries of a vanity to project-scale architectural work. Browse the whole library or jump straight to a collection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {collectionGroups.map((g) => {
          const count = categoriesByGroup(g.slug).length;
          return (
            <Link
              key={g.slug}
              href={`/collections/${g.slug}`}
              className="group relative overflow-hidden shadow-stone block"
              style={{ borderRadius: "6px", aspectRatio: "3 / 2" }}
            >
              <Image
                src={g.image}
                alt={g.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,8,7,0.1) 30%, rgba(8,8,7,0.78) 100%)",
                }}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="label-sm" style={{ color: "var(--gold-light)" }}>
                  {count} {count === 1 ? "category" : "categories"}
                </p>
                <p
                  className="font-display italic mt-2"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    color: "var(--ink)",
                  }}
                >
                  {g.name}
                </p>
                <p className="mt-2 max-w-md" style={{ color: "rgba(240,237,232,0.78)" }}>
                  {g.blurb}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
