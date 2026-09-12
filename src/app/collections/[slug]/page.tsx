import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  collectionGroups,
  categoriesByGroup,
  getCollectionGroup,
} from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Params = { slug: string };

export async function generateStaticParams() {
  return collectionGroups.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = getCollectionGroup(slug);
  if (!group) return { title: "Not Found" };
  return { title: group.name, description: group.blurb };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const group = getCollectionGroup(slug);
  if (!group) notFound();

  const cats = categoriesByGroup(group.slug);
  const catSlugs = new Set(cats.map((c) => c.slug));
  const items = products.filter((p) => catSlugs.has(p.category));

  return (
    <div className="bg-marble">
      <div className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={group.image}
            alt={group.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.78) 60%, rgba(13,13,12,0.98) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="label-sm flex items-center gap-2" style={{ color: "var(--ink-mute)" }}>
            <Link href="/" className="hover-rule">Home</Link>
            <span>·</span>
            <Link href="/collections" className="hover-rule">Collections</Link>
            <span>·</span>
            <span style={{ color: "var(--ink)" }}>{group.name}</span>
          </nav>

          <div className="mt-10 max-w-3xl">
            <SectionLabel>Collection</SectionLabel>
            <h1
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", lineHeight: 1.04 }}
            >
              {group.name}
            </h1>
            <p className="mt-6 max-w-lg" style={{ fontSize: "1.05rem" }}>
              {group.blurb}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="border-b border-line pb-4 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}>
            Categories in this collection
          </h2>
          <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
            {cats.length} {cats.length === 1 ? "category" : "categories"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {cats.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}`} className="group block">
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
                      "linear-gradient(180deg, rgba(8,8,7,0) 55%, rgba(8,8,7,0.6) 100%)",
                  }}
                />
              </div>
              <p
                className="font-display italic mt-4"
                style={{ fontSize: "1.15rem", color: "var(--ink)" }}
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

        {items.length > 0 && (
          <>
            <div className="border-t border-line pt-12 mt-20 mb-10 flex items-end justify-between">
              <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}>
                Featured from this collection
              </h2>
              <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
                {items.length} {items.length === 1 ? "piece" : "pieces"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {items.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
