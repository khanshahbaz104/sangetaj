import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import articles from "@/data/journal-articles.json";

type Params = { slug: string };

type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "list"; items: string[] };

const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.metaDescription ?? article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription ?? article.excerpt,
      images: [article.image],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription ?? article.excerpt,
    image: article.image,
    articleSection: article.category,
    publisher: { "@type": "Organization", name: "Sange Taj Marble" },
  };

  return (
    <div className="bg-marble">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-6">
        <nav className="label-sm flex items-center gap-2 flex-wrap" style={{ color: "var(--ink-mute)" }}>
          <Link href="/" className="hover-rule">Home</Link>
          <span>·</span>
          <Link href="/journal" className="hover-rule">Journal</Link>
          <span>·</span>
          <span style={{ color: "var(--ink)" }}>{article.category}</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-20">
        <SectionLabel>{article.category}</SectionLabel>
        <h1
          className="font-display mt-4"
          style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)", lineHeight: 1.08 }}
        >
          {article.title}
        </h1>
        <p className="label-sm mt-5" style={{ color: "var(--ink-mute)" }}>
          {article.date} · {article.readTime} read
        </p>

        <div
          className="relative aspect-[16/9] mt-10 overflow-hidden shadow-stone"
          style={{ borderRadius: "6px" }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <p
          className="font-display italic mt-10"
          style={{ fontSize: "1.25rem", lineHeight: 1.5, color: "var(--ink)" }}
        >
          {article.excerpt}
        </p>

        <div className="mt-8">
          {(article.content as Block[]).map((block, i) => {
            if (block.type === "subheading") {
              return (
                <h2
                  key={i}
                  className="font-display italic text-ink border-t border-line pt-8 mt-10"
                  style={{ fontSize: "1.5rem" }}
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "pullquote") {
              return (
                <blockquote
                  key={i}
                  className="my-10 pl-6"
                  style={{ borderLeft: "1px solid var(--gold)" }}
                >
                  <p
                    className="font-display italic"
                    style={{ fontSize: "1.3rem", lineHeight: 1.45, color: "var(--ink)" }}
                  >
                    {block.text}
                  </p>
                </blockquote>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={i} className="mt-5 flex flex-col gap-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ fontSize: "1rem", color: "var(--ink-soft)" }}
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 block shrink-0"
                        style={{ width: "14px", height: "1px", background: "var(--gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={i} className="mt-5" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
            Interested in commissioning a piece?{" "}
            <Link href="/contact" className="hover-rule text-gold">
              Speak to the atelier
            </Link>{" "}
            or browse{" "}
            <Link href="/collections/luxe" className="hover-rule text-gold">
              the Luxe Collection
            </Link>
            .
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
          <div className="border-t border-line pt-12 mb-10">
            <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}>
              More from the journal
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((a) => (
              <Link key={a.slug} href={`/journal/${a.slug}`} className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden shadow-stone group-hover:shadow-stone-hover transition-shadow duration-500"
                  style={{ borderRadius: "4px" }}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <p className="label-sm mt-4" style={{ color: "var(--ink-mute)" }}>
                  {a.category} · {a.readTime} read
                </p>
                <h3
                  className="font-display italic mt-2 text-ink"
                  style={{ fontSize: "1.2rem", lineHeight: 1.25 }}
                >
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
