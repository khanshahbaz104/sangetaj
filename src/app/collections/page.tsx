import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";

export const metadata = {
  title: "Collections — Makrana Marble Showpieces for Luxury Interiors",
  description:
    "Permanent interior showpieces hand-carved from Makrana White marble. Automotive and maritime sculptures for palatial residences, executive offices, and prestige spaces across the Gulf.",
  keywords: [
    "marble showpiece collection UAE", "luxury marble interior object Dubai",
    "Makrana marble showpiece collection", "marble sculpture collection Gulf",
    "luxury interior showpiece Saudi Arabia", "marble art collection Qatar",
    "luxury showpiece collection Kuwait", "Makrana marble collection GCC",
    "maritime marble sculpture Gulf", "automotive marble sculpture UAE",
    "مجموعة رخام مكرانة", "قطع ديكور رخام فاخرة",
  ],
  openGraph: {
    title: "Marble Showpiece Collections | Sang-e-Taj",
    description:
      "Permanent interior showpieces hand-carved from Makrana White. Each piece commands a room.",
    type: "website",
    url: "https://sangetaj.com/collections",
  },
  alternates: { canonical: "https://sangetaj.com/collections" },
};

export default function CollectionsPage() {
  const allProducts = products;
  const isOddCount = allProducts.length % 2 !== 0;

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      {/* Page header */}
      <div
        className="pt-40 pb-20 px-6"
        style={{ backgroundColor: "var(--ivory-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <span
              className="label text-[9px] tracking-[0.25em] block mb-6"
              style={{ color: "var(--gold)" }}
            >
              The Collection
            </span>
            <h1
              className="font-heading text-7xl md:text-9xl font-bold"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "var(--kohl)",
              }}
            >
              Objects of
              <span className="italic block" style={{ color: "var(--gold)" }}>
                Distinction
              </span>
            </h1>
            <p
              className="mt-6 text-sm max-w-md"
              style={{ color: "rgba(244,244,243,0.5)" }}
            >
              Each piece hand-carved in Makrana, Rajasthan. No two sculptures
              share the same interior light.
            </p>
            <p
              className="mt-4 label text-[9px] tracking-widest"
              style={{ color: "rgba(138,136,134,0.55)" }}
            >
              {allProducts.length} pieces · Available to order
            </p>
          </RevealSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allProducts.map((product, index) => {
            const isLast = index === allProducts.length - 1;
            const spanFull = isLast && isOddCount;

            return (
              <RevealSection
                key={product.slug}
                delay={index * 0.08}
                className={spanFull ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/collections/${product.slug}`}
                  className="group block"
                >
                  {/* Image container */}
                  <div
                    className="cursor-view relative overflow-hidden mb-4"
                    style={{
                      aspectRatio: spanFull ? "21/9" : "4/3",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} — ${product.subtitle} — Makrana marble showpiece for luxury interiors`}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    {/* Bottom gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,8,7,0.72) 0%, rgba(8,8,7,0.04) 50%, transparent 100%)",
                      }}
                    />

                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="label text-[8px] tracking-widest px-3 py-1.5"
                        style={{
                          backgroundColor: "rgba(8,8,7,0.65)",
                          color: "var(--gold)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {product.tag}
                      </span>
                    </div>

                    {/* Corner accents */}
                    <div
                      className="absolute bottom-0 left-0 w-8 h-8 z-10"
                      style={{
                        borderBottom: "1px solid rgba(120,118,116,0.35)",
                        borderLeft: "1px solid rgba(120,118,116,0.35)",
                      }}
                    />
                    <div
                      className="absolute top-0 right-0 w-8 h-8 z-10"
                      style={{
                        borderTop: "1px solid rgba(120,118,116,0.35)",
                        borderRight: "1px solid rgba(120,118,116,0.35)",
                      }}
                    />

                    {/* Hover CTA */}
                    <div
                      className="absolute inset-0 z-10 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(240,237,232,0.88) 0%, transparent 55%)",
                      }}
                    >
                      <span
                        className="label text-[9px] tracking-widest px-4 py-2 border"
                        style={{
                          borderColor: "var(--gold)",
                          color: "var(--gold)",
                        }}
                      >
                        View Piece
                      </span>
                    </div>
                  </div>

                  {/* Info row */}
                  <div className="px-1 pt-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <p
                        className="font-heading text-2xl font-bold"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {product.name}
                      </p>
                      <div className="text-right shrink-0">
                        <p className="label text-[8px] tracking-widest" style={{ color: "rgba(240,237,232,0.55)" }}>
                          {product.scale}
                        </p>
                        <p className="label text-[8px] tracking-widest mt-0.5" style={{ color: "rgba(240,237,232,0.55)" }}>
                          {product.dimensions}
                        </p>
                      </div>
                    </div>
                    <p className="label text-[9px] tracking-widest mb-3" style={{ color: "var(--gold)" }}>
                      {product.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {product.highlights.map((h) => (
                        <p key={h} className="text-sm" style={{ color: "rgba(240,237,232,0.5)" }}>
                          · {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealSection>
            );
          })}
        </div>

        {/* Bespoke CTA */}
        <RevealSection delay={0.3} className="mt-28 text-center">
          <GoldRule className="mx-auto mb-10" />
          <p
            className="font-heading text-3xl font-bold italic mb-4"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Don&apos;t see what you envision?
          </p>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(240,237,232,0.55)" }}
          >
            Every Sang-e-Taj commission begins the same way — with a
            conversation.
          </p>
          <Link
            href="/bespoke"
            className="label text-[10px] tracking-widest px-10 py-4 border inline-block transition-all duration-500"
            style={{ borderColor: "var(--gold)", color: "var(--kohl)" }}
          >
            Commission a Bespoke Piece
          </Link>
        </RevealSection>
      </div>
    </div>
  );
}
