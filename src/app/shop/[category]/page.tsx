import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Params = { category: string };

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return { title: "Not Found" };
  return {
    title: c.name,
    description: c.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  const items = productsByCategory(category);

  return (
    <div className="bg-marble">
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={c.image}
            alt={c.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
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
            <Link href="/shop" className="hover-rule">Shop</Link>
            <span>·</span>
            <span style={{ color: "var(--ink)" }}>{c.name}</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <SectionLabel>Category</SectionLabel>
            <h1
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", lineHeight: 1.04 }}
            >
              {c.name}
            </h1>
            <p className="mt-6 max-w-lg" style={{ fontSize: "1.05rem" }}>
              {c.blurb}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center justify-between border-b border-line pb-4 mb-10">
          <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="label-sm hover-rule"
              style={{ color: "var(--ink-soft)" }}
            >
              Filter
            </button>
            <button
              type="button"
              className="label-sm hover-rule"
              style={{ color: "var(--ink-soft)" }}
            >
              Sort by
            </button>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display italic" style={{ fontSize: "1.6rem", color: "var(--ink-soft)" }}>
              New pieces in this category are landing soon.
            </p>
            <p className="mt-3" style={{ color: "var(--ink-mute)" }}>
              Get in touch and we&apos;ll send a private preview before they go live.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 label-sm"
              style={{
                border: "1px solid var(--ink)",
                padding: "14px 32px",
                borderRadius: "999px",
                color: "var(--ink)",
              }}
            >
              Request a preview
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
