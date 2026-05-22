import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { journalArticles, getArticleBySlug, type ContentBlock } from "@/data/journal-articles";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

const SITE_URL = "https://sangetaj.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Sang-e-Taj Journal`,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url: `${SITE_URL}/journal/${article.slug}`,
      images: [{ url: `${SITE_URL}${article.image}` }],
    },
    alternates: {
      canonical: `${SITE_URL}/journal/${article.slug}`,
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={i}
          className="text-base leading-[2] mb-7"
          style={{ color: "rgba(240,237,232,0.82)" }}
        >
          {block.text}
        </p>
      );

    case "subheading":
      return (
        <h2
          key={i}
          className="font-heading font-bold mt-14 mb-5"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            color: "var(--kohl)",
          }}
        >
          {block.text}
        </h2>
      );

    case "pullquote":
      return (
        <blockquote
          key={i}
          className="my-12 pl-8 py-2"
          style={{ borderLeft: "2px solid var(--gold)" }}
        >
          <p
            className="font-heading font-bold italic leading-snug"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              color: "var(--kohl)",
            }}
          >
            {block.text}
          </p>
        </blockquote>
      );

    case "list":
      return (
        <ul key={i} className="mb-7 flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-base leading-relaxed"
              style={{ color: "rgba(240,237,232,0.82)" }}
            >
              <span
                className="shrink-0 mt-1.5 text-[8px]"
                style={{ color: "var(--gold)" }}
              >
                ◆
              </span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "keyFacts":
      return (
        <div
          key={i}
          className="my-10 p-6 md:p-8"
          style={{
            backgroundColor: "rgba(138,136,134,0.06)",
            borderLeft: "2px solid var(--gold)",
          }}
        >
          <p
            className="label text-[9px] tracking-widest mb-5"
            style={{ color: "var(--gold)" }}
          >
            Key Facts
          </p>
          <ul className="flex flex-col gap-3">
            {block.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "rgba(240,237,232,0.82)" }}
              >
                <span className="shrink-0 mt-1 text-[8px]" style={{ color: "var(--gold)" }}>
                  ◆
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "linkList":
      return (
        <div key={i} className="flex flex-wrap gap-3 my-8">
          {block.links.map((link, j) => (
            <Link
              key={j}
              href={link.href}
              className="label text-[9px] tracking-widest px-5 py-3 border inline-block transition-all duration-300 hover:opacity-70"
              style={{ borderColor: "rgba(138,136,134,0.3)", color: "rgba(240,237,232,0.65)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Convert "April 2025" → "2025-04-01" for schema.org ISO 8601 compliance
  const monthMap: Record<string, string> = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12",
  };
  const [mon, yr] = article.date.split(" ");
  const isoDate = `${yr}-${monthMap[mon] ?? "01"}-01`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${article.image}`,
    },
    url: `${SITE_URL}/journal/${article.slug}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "Sang-e-Taj",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sang-e-Taj",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
        width: 64,
        height: 64,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/journal/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",    item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/journal` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/journal/${article.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div style={{ backgroundColor: "var(--ivory)" }}>
        {/* Hero image — cinematic full-width */}
        <div className="relative w-full" style={{ height: "65vh", minHeight: "420px" }}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "brightness(0.72) contrast(1.06)" }}
          />

          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.15) 40%, rgba(8,8,7,0.62) 100%)",
            }}
          />

          {/* Corner accents */}
          <div
            className="absolute bottom-0 left-0 w-12 h-12"
            style={{
              borderBottom: "1px solid rgba(138,136,134,0.35)",
              borderLeft: "1px solid rgba(138,136,134,0.35)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-12 h-12"
            style={{
              borderTop: "1px solid rgba(138,136,134,0.35)",
              borderRight: "1px solid rgba(138,136,134,0.35)",
            }}
          />

          {/* Hero text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-5 pb-10 md:px-6 md:pb-14 max-w-4xl mx-auto w-full left-0 right-0">
            <span
              className="label text-[8px] tracking-[0.3em] block mb-5"
              style={{ color: "var(--gold)" }}
            >
              {article.category} · {article.date} · {article.readTime} read
            </span>
            <h1
              className="font-heading font-bold leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)",
                color: "rgba(244,244,243,0.95)",
                maxWidth: "780px",
              }}
            >
              {article.title}
            </h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div
          className="max-w-4xl mx-auto px-6 py-5"
          style={{ borderBottom: "1px solid rgba(138,136,134,0.1)" }}
        >
          <div className="flex items-center gap-3">
            <Link
              href="/journal"
              className="label text-[9px] tracking-widest transition-colors"
              style={{ color: "rgba(240,237,232,0.38)" }}
            >
              Journal
            </Link>
            <span className="label text-[9px]" style={{ color: "var(--gold)" }}>
              /
            </span>
            <span
              className="label text-[9px] tracking-widest"
              style={{ color: "rgba(240,237,232,0.55)" }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
          {/* Lede / excerpt */}
          <RevealSection>
            <p
              className="font-heading font-bold italic leading-snug mb-12"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                color: "rgba(240,237,232,0.70)",
                maxWidth: "680px",
              }}
            >
              {article.excerpt}
            </p>
          </RevealSection>

          <GoldRule className="mb-12" />

          {/* Content blocks */}
          <RevealSection>
            <article>
              {article.content.map((block, i) => renderBlock(block, i))}
            </article>
          </RevealSection>
        </div>

        {/* CTA block */}
        <RevealSection>
          <div
            className="max-w-4xl mx-auto px-6 pt-8 pb-24"
            style={{ borderTop: "1px solid rgba(138,136,134,0.1)" }}
          >
            <div
              className="p-10 md:p-14 text-center"
              style={{ backgroundColor: "rgba(138,136,134,0.06)" }}
            >
              <GoldRule className="mx-auto mb-8" />
              <p
                className="font-heading font-bold italic mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                  color: "var(--kohl)",
                }}
              >
                Every piece begins with a conversation.
              </p>
              <p
                className="text-sm mb-8 mx-auto"
                style={{
                  color: "rgba(240,237,232,0.55)",
                  maxWidth: "440px",
                  lineHeight: "1.85",
                }}
              >
                View the collection or commission a bespoke object for a
                principal residence, private office, or as a gift of distinction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/collections"
                  className="label text-[10px] tracking-widest px-10 py-4 border inline-block transition-all duration-500"
                  style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                >
                  View the Collection
                </Link>
                <Link
                  href="/bespoke"
                  className="label text-[10px] tracking-widest px-10 py-4 inline-block transition-all duration-500"
                  style={{
                    color: "rgba(240,237,232,0.55)",
                    border: "1px solid rgba(138,136,134,0.2)",
                  }}
                >
                  Commission a Bespoke Piece
                </Link>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Back to journal */}
        <div
          className="max-w-4xl mx-auto px-6 pb-16"
          style={{ borderTop: "1px solid rgba(138,136,134,0.08)" }}
        >
          <Link
            href="/journal"
            className="label text-[9px] tracking-widest inline-flex items-center gap-3 pt-8 transition-opacity hover:opacity-60"
            style={{ color: "rgba(240,237,232,0.45)" }}
          >
            <span
              className="block h-px w-6"
              style={{ backgroundColor: "var(--gold)", opacity: 0.6 }}
            />
            Back to Journal
          </Link>
        </div>
      </div>
    </>
  );
}
