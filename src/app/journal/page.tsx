import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";
import {
  getFeaturedArticle,
  getNonFeaturedArticles,
  getPublishedArticles,
} from "@/data/journal-articles";

// Re-render at most once per hour so new articles go live automatically
export const revalidate = 3600;

const SITE_URL = "https://sangetaj.com";
const ARTICLES_PER_PAGE = 6;

const monthMap: Record<string, string> = {
  January: "01", February: "02", March: "03", April: "04",
  May: "05", June: "06", July: "07", August: "08",
  September: "09", October: "10", November: "11", December: "12",
};
const toISO = (d: string) => {
  const [m, y] = d.split(" ");
  return `${y}-${monthMap[m] ?? "01"}-01`;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10));
  const isFirst = page === 1;

  return {
    title: isFirst
      ? "Journal — Perspectives on Craft, Luxury & Interior Heritage"
      : `Journal — Page ${page} | Sang-e-Taj`,
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
      url: `${SITE_URL}/journal`,
    },
    // Only page 1 is canonical — paginated pages are supplementary
    alternates: {
      canonical: isFirst ? `${SITE_URL}/journal` : `${SITE_URL}/journal?page=${page}`,
    },
    // Tell crawlers not to index paginated duplicates
    ...(isFirst ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function JournalPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));

  // Featured hero only on page 1
  const featured = currentPage === 1 ? getFeaturedArticle() : undefined;
  const allNonFeatured = getNonFeaturedArticles();

  const totalPages = Math.max(1, Math.ceil(allNonFeatured.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * ARTICLES_PER_PAGE;
  const pageArticles = allNonFeatured.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  // Schema only on page 1 (all published articles as BlogPosting list)
  const journalSchema =
    safePage === 1
      ? {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Sang-e-Taj Journal",
          description: "Essays on Makrana marble heritage, Gulf culture, and luxury interior design",
          url: `${SITE_URL}/journal`,
          publisher: {
            "@type": "Organization",
            name: "Sang-e-Taj",
            url: SITE_URL,
          },
          blogPost: getPublishedArticles().map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: `${SITE_URL}/journal/${article.slug}`,
            datePublished: toISO(article.date),
            description: article.excerpt,
            image: `${SITE_URL}${article.image}`,
          })),
        }
      : null;

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      {journalSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(journalSchema) }}
        />
      )}

      {/* ── Header ── */}
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
              style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}
            >
              Perspectives
            </h1>
            <p className="mt-6 text-sm max-w-md" style={{ color: "rgba(244,244,243,0.75)" }}>
              On craft, heritage, and the culture of objects that endure.
            </p>
          </RevealSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ── Featured article — page 1 only ── */}
        {featured && (
          <RevealSection>
            <Link href={`/journal/${featured.slug}`} className="group block mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="cursor-view relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.92) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(8,8,7,0.6) 0%, transparent 55%)" }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="label text-[8px] tracking-widest px-3 py-1.5"
                      style={{ backgroundColor: "rgba(138,136,134,0.9)", color: "var(--kohl)" }}
                    >
                      Featured
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-10 h-10 z-10"
                    style={{ borderBottom: "1px solid rgba(138,136,134,0.4)", borderLeft: "1px solid rgba(138,136,134,0.4)" }}
                  />
                  <div
                    className="absolute top-0 right-0 w-10 h-10 z-10"
                    style={{ borderTop: "1px solid rgba(138,136,134,0.4)", borderRight: "1px solid rgba(138,136,134,0.4)" }}
                  />
                </div>

                <div>
                  <span className="label text-[8px] tracking-widest block mb-4" style={{ color: "var(--gold)" }}>
                    {featured.category} · {featured.date}
                  </span>
                  <h2
                    className="font-heading text-4xl font-bold leading-snug mb-5 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-base leading-loose mb-6" style={{ color: "rgba(240,237,232,0.82)" }}>
                    {featured.excerpt}
                  </p>
                  <span
                    className="label text-[10px] tracking-widest inline-flex items-center gap-3 group-hover:gap-5 transition-all duration-300"
                    style={{ color: "var(--kohl)" }}
                  >
                    Read
                    <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
                  </span>
                </div>
              </div>
            </Link>
          </RevealSection>
        )}

        <GoldRule full className="mb-16" />

        {/* ── Article grid ── */}
        {pageArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {pageArticles.map((article, i) => (
              <RevealSection key={article.slug} delay={i * 0.08}>
                <Link href={`/journal/${article.slug}`} className="group block">
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
                      style={{ background: "linear-gradient(to top, rgba(8,8,7,0.55) 0%, transparent 55%)" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-8 h-8 z-10"
                      style={{ borderBottom: "1px solid rgba(138,136,134,0.35)", borderLeft: "1px solid rgba(138,136,134,0.35)" }}
                    />
                    <div
                      className="absolute top-0 right-0 w-8 h-8 z-10"
                      style={{ borderTop: "1px solid rgba(138,136,134,0.35)", borderRight: "1px solid rgba(138,136,134,0.35)" }}
                    />
                  </div>

                  <span className="label text-[8px] tracking-widest block mb-3" style={{ color: "var(--gold)" }}>
                    {article.category} · {article.date}
                  </span>
                  <h3
                    className="font-heading text-2xl font-bold leading-snug mb-3 group-hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.80)" }}>
                    {article.excerpt}
                  </p>
                </Link>
              </RevealSection>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm py-16" style={{ color: "rgba(240,237,232,0.4)" }}>
            No articles on this page.
          </p>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2">
            {/* Previous */}
            {safePage > 1 ? (
              <Link
                href={safePage === 2 ? "/journal" : `/journal?page=${safePage - 1}`}
                className="label text-[9px] tracking-widest px-5 py-3 inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
                style={{ color: "rgba(240,237,232,0.55)", border: "1px solid rgba(138,136,134,0.2)" }}
              >
                <span
                  className="block h-px w-5"
                  style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
                />
                Prev
              </Link>
            ) : (
              <span
                className="label text-[9px] tracking-widest px-5 py-3 inline-flex items-center gap-3"
                style={{ color: "rgba(138,136,134,0.25)", border: "1px solid rgba(138,136,134,0.08)", cursor: "default" }}
              >
                <span className="block h-px w-5" style={{ backgroundColor: "rgba(138,136,134,0.15)" }} />
                Prev
              </span>
            )}

            {/* Page numbers */}
            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const isCurrent = p === safePage;
                const href = p === 1 ? "/journal" : `/journal?page=${p}`;
                return isCurrent ? (
                  <span
                    key={p}
                    className="label text-[9px] tracking-widest w-9 h-9 inline-flex items-center justify-center"
                    style={{ color: "var(--ivory)", backgroundColor: "var(--gold)" }}
                  >
                    {p}
                  </span>
                ) : (
                  <Link
                    key={p}
                    href={href}
                    className="label text-[9px] tracking-widest w-9 h-9 inline-flex items-center justify-center transition-all duration-300 hover:opacity-70"
                    style={{
                      color: "rgba(240,237,232,0.45)",
                      border: "1px solid rgba(138,136,134,0.18)",
                    }}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>

            {/* Next */}
            {safePage < totalPages ? (
              <Link
                href={`/journal?page=${safePage + 1}`}
                className="label text-[9px] tracking-widest px-5 py-3 inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
                style={{ color: "rgba(240,237,232,0.55)", border: "1px solid rgba(138,136,134,0.2)" }}
              >
                Next
                <span
                  className="block h-px w-5"
                  style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }}
                />
              </Link>
            ) : (
              <span
                className="label text-[9px] tracking-widest px-5 py-3 inline-flex items-center gap-3"
                style={{ color: "rgba(138,136,134,0.25)", border: "1px solid rgba(138,136,134,0.08)", cursor: "default" }}
              >
                Next
                <span className="block h-px w-5" style={{ backgroundColor: "rgba(138,136,134,0.15)" }} />
              </span>
            )}
          </div>
        )}

        {/* Article count indicator */}
        {totalPages > 1 && (
          <p
            className="text-center label text-[8px] tracking-widest mt-5"
            style={{ color: "rgba(138,136,134,0.4)" }}
          >
            Page {safePage} of {totalPages} · {allNonFeatured.length} articles
          </p>
        )}

      </div>
    </div>
  );
}
