import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";
import { getFeaturedArticle, getNonFeaturedArticles } from "@/data/journal-articles";

export const metadata = {
  title: "Journal — Perspectives on Craft, Luxury & Interior Heritage",
  description:
    "Perspectives on Makrana marble, luxury interior objects, and the culture of gifting across the Gulf — from the Sang-e-Taj atelier.",
  keywords: [
    "luxury interior blog UAE", "marble craftsmanship journal", "Makrana marble article",
    "luxury gifting Gulf", "interior design luxury UAE", "marble heritage blog",
    "luxury objects Gulf", "interior showpiece insights",
  ],
  openGraph: {
    title: "Journal | Sang-e-Taj",
    description:
      "Perspectives on Makrana marble, luxury craftsmanship, and interior objects from the Gulf atelier.",
    type: "website",
    url: "https://sangetaj.com/journal",
  },
  alternates: { canonical: "https://sangetaj.com/journal" },
};

export default function JournalPage() {
  const featured = getFeaturedArticle();
  const rest = getNonFeaturedArticles();

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      {/* Header */}
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
              The Atelier Journal
            </span>
            <h1
              className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "var(--kohl)",
              }}
            >
              Perspectives
            </h1>
            <p
              className="mt-6 text-sm max-w-md"
              style={{ color: "rgba(244,244,243,0.75)" }}
            >
              On craft, heritage, and the culture of objects that endure.
            </p>
          </RevealSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Featured article */}
        {featured && (
          <RevealSection>
            <Link
              href={`/journal/${featured.slug}`}
              className="group block mb-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Featured image */}
                <div
                  className="cursor-view relative overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.92) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,7,0.6) 0%, transparent 55%)",
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="label text-[8px] tracking-widest px-3 py-1.5"
                      style={{
                        backgroundColor: "rgba(138,136,134,0.9)",
                        color: "var(--kohl)",
                      }}
                    >
                      Featured
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-10 h-10 z-10"
                    style={{
                      borderBottom: "1px solid rgba(138,136,134,0.4)",
                      borderLeft: "1px solid rgba(138,136,134,0.4)",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 w-10 h-10 z-10"
                    style={{
                      borderTop: "1px solid rgba(138,136,134,0.4)",
                      borderRight: "1px solid rgba(138,136,134,0.4)",
                    }}
                  />
                </div>

                <div>
                  <span
                    className="label text-[8px] tracking-widest block mb-4"
                    style={{ color: "var(--gold)" }}
                  >
                    {featured.category} · {featured.date}
                  </span>
                  <h2
                    className="font-heading text-4xl font-bold leading-snug mb-5 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-base leading-loose mb-6"
                    style={{ color: "rgba(240,237,232,0.82)" }}
                  >
                    {featured.excerpt}
                  </p>
                  <span
                    className="label text-[10px] tracking-widest inline-flex items-center gap-3 group-hover:gap-5 transition-all duration-300"
                    style={{ color: "var(--kohl)" }}
                  >
                    Read
                    <span
                      className="block h-px w-8"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </RevealSection>
        )}

        <GoldRule full className="mb-16" />

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {rest.map((article, i) => (
            <RevealSection key={article.slug} delay={i * 0.1}>
              <Link
                href={`/journal/${article.slug}`}
                className="group block"
              >
                {/* Image */}
                <div
                  className="cursor-view relative overflow-hidden mb-6"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.92) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,7,0.55) 0%, transparent 55%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 z-10"
                    style={{
                      borderBottom: "1px solid rgba(138,136,134,0.35)",
                      borderLeft: "1px solid rgba(138,136,134,0.35)",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 w-8 h-8 z-10"
                    style={{
                      borderTop: "1px solid rgba(138,136,134,0.35)",
                      borderRight: "1px solid rgba(138,136,134,0.35)",
                    }}
                  />
                </div>

                <span
                  className="label text-[8px] tracking-widest block mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  {article.category} · {article.date}
                </span>
                <h3
                  className="font-heading text-2xl font-bold leading-snug mb-3 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(240,237,232,0.80)" }}
                >
                  {article.excerpt}
                </p>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  );
}
