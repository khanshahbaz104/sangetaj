import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { priceLabel } from "@/lib/utils";
import { marbleProfile } from "@/lib/marbles";

type Params = { category: string; slug: string };

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Sange Taj Marble`,
      description: product.shortDescription,
      images: product.images.slice(0, 1),
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const product = getProduct(slug);
  const cat = getCategory(category);
  if (!product || !cat || product.category !== category) notFound();

  const related = products
    .filter((p) => p.category === category && p.slug !== slug)
    .slice(0, 4);

  const fillRelated = related.length === 4
    ? related
    : [...related, ...products.filter((p) => p.slug !== slug && !related.includes(p))].slice(0, 4);

  // Commission pieces are quoted rather than listed, so they advertise
  // availability without a price and carry no review history to report.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images,
    brand: { "@type": "Brand", name: "Sange Taj Marble" },
    offers:
      product.price === undefined
        ? {
            "@type": "Offer",
            priceCurrency: product.currency,
            availability: "https://schema.org/PreOrder",
          }
        : {
            "@type": "Offer",
            priceCurrency: product.currency,
            price: product.price,
            availability: "https://schema.org/InStock",
          },
    ...(product.rating !== undefined && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
      },
    }),
  };

  return (
    <div className="bg-marble">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-6">
        <nav className="label-sm flex items-center gap-2 flex-wrap" style={{ color: "var(--ink-mute)" }}>
          <Link href="/" className="hover-rule">Home</Link>
          <span>·</span>
          <Link href="/shop" className="hover-rule">Shop</Link>
          <span>·</span>
          <Link href={`/shop/${cat.slug}`} className="hover-rule">{cat.name}</Link>
          <span>·</span>
          <span style={{ color: "var(--ink)" }}>{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <ProductGallery images={product.images} alt={product.name} />

          <div className="lg:pt-6">
            <SectionLabel>{cat.name}</SectionLabel>
            <h1
              className="font-display mt-3"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", lineHeight: 1.04 }}
            >
              {product.name}
            </h1>

            {product.luxe && (
              <p
                className="font-display mt-3"
                style={{ fontSize: "1.5rem", color: "var(--gold)" }}
                lang="ar"
                dir="rtl"
              >
                {product.luxe.arabicName}
              </p>
            )}

            {product.luxe && (
              <p className="label-sm mt-4" style={{ color: "var(--ink-mute)" }}>
                {product.luxe.subtitle}
              </p>
            )}

            {product.rating !== undefined && (
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < Math.round(product.rating!) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4">
                      <path d="M12 2l2.39 7.36H22l-6.18 4.49 2.36 7.27L12 16.62l-6.18 4.5 2.36-7.27L2 9.36h7.61z" />
                    </svg>
                  ))}
                </div>
                <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </p>
              </div>
            )}

            <p
              className="font-display mt-6"
              style={{ fontSize: product.price === undefined ? "1.2rem" : "1.8rem", color: "var(--ink)" }}
            >
              {priceLabel(product.price, product.currency)}
            </p>

            <p className="mt-6" style={{ fontSize: "1.02rem" }}>
              {product.luxe ? product.luxe.narrative : product.shortDescription}
            </p>

            {product.luxe && (
              <ul className="mt-6 flex flex-col gap-2.5">
                {product.luxe.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3"
                    style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}
                  >
                    <span
                      className="mt-2 block shrink-0"
                      style={{ width: "16px", height: "1px", background: "var(--gold)" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 border-t border-line pt-6">
              <p className="label-sm mb-3" style={{ color: "var(--gold)" }}>
                Crafted from
              </p>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "8px",
                    background: `radial-gradient(circle at 30% 25%, ${marbleProfile(product.marble).swatch} 0%, ${marbleProfile(product.marble).swatch} 55%, ${marbleProfile(product.marble).vein} 100%)`,
                    border: "1px solid var(--vein)",
                    boxShadow: "inset 0 0 12px rgba(0,0,0,0.25)",
                    flexShrink: 0,
                  }}
                />
                <div className="min-w-0">
                  <p
                    className="font-display italic text-ink"
                    style={{ fontSize: "1.3rem", lineHeight: 1.15 }}
                  >
                    {product.marble}
                  </p>
                  <p
                    className="label-sm mt-1"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    Quarried in {marbleProfile(product.marble).origin}
                  </p>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", marginTop: "0.5rem" }}>
                    {marbleProfile(product.marble).note}
                  </p>
                </div>
              </div>
            </div>

            {product.luxe ? (
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="label-sm py-4 text-center transition-colors duration-300 hover:bg-gold hover:text-marble"
                  style={{
                    border: "1px solid var(--ink)",
                    backgroundColor: "var(--ink)",
                    color: "var(--marble)",
                    borderRadius: "999px",
                  }}
                >
                  Enquire about this piece
                </Link>
                <a
                  href="https://wa.me/917014558962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-sm py-4 text-center transition-colors duration-300 hover:bg-ink hover:text-marble"
                  style={{
                    border: "1px solid var(--ink)",
                    color: "var(--ink)",
                    borderRadius: "999px",
                  }}
                >
                  Speak to us on WhatsApp
                </a>
                <p className="label-sm text-center mt-1" style={{ color: "var(--ink-mute)" }}>
                  Lead time {product.luxe.leadTime}
                </p>
              </div>
            ) : (
              <>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="label-sm py-4 transition-colors duration-300 hover:bg-gold hover:text-marble"
                    style={{
                      border: "1px solid var(--ink)",
                      backgroundColor: "var(--ink)",
                      color: "var(--marble)",
                      borderRadius: "999px",
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="label-sm py-4 transition-colors duration-300 hover:bg-ink hover:text-marble"
                    style={{
                      border: "1px solid var(--ink)",
                      color: "var(--ink)",
                      borderRadius: "999px",
                    }}
                  >
                    Add to Wishlist
                  </button>
                </div>

                <Link
                  href="/contact"
                  className="block text-center label-sm mt-4 hover-rule w-fit mx-auto"
                  style={{ color: "var(--gold)" }}
                >
                  Request a personalised inquiry
                </Link>
              </>
            )}

            <dl className="mt-12 grid grid-cols-1 gap-4 border-t border-line pt-6">
              {[
                { label: "Dimensions", value: product.dimensions },
                ...(product.luxe ? [{ label: "Scale", value: product.luxe.scale }] : []),
                { label: "Weight", value: product.weight },
                ...(product.luxe
                  ? [
                      { label: "Material", value: product.luxe.material },
                      { label: "Finish", value: product.luxe.finishOptions.join(" · ") },
                      { label: "Lead time", value: product.luxe.leadTime },
                    ]
                  : []),
                { label: "Care", value: product.care },
                {
                  label: "Customisation",
                  value: product.luxe
                    ? product.luxe.customisationOptions.join(" · ")
                    : product.customisable
                      ? "Available — write to us for sizes, finish or engraving."
                      : "Standard finish.",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-line"
                >
                  <dt className="label-sm" style={{ color: "var(--ink-mute)" }}>
                    {row.label}
                  </dt>
                  <dd style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 marble-veined p-6" style={{ borderRadius: "8px" }}>
              <p className="label-sm mb-2" style={{ color: "var(--gold)" }}>Shipping</p>
              <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                Custom crating included. Insured worldwide delivery from our workshop. Larger pieces ship in three to six weeks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex items-end justify-between mb-10 border-t border-line pt-12">
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}>
            You may also like
          </h2>
          <Link href={`/shop/${cat.slug}`} className="label-sm hover-rule" style={{ color: "var(--ink)" }}>
            See all in {cat.name}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {fillRelated.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
