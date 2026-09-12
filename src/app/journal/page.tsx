import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import articles from "@/data/journal-articles.json";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the workshop. Marble care, design ideas and the stories behind the stones.",
};

export default function JournalPage() {
  return (
    <div className="bg-marble">
      <section className="pt-40 pb-12 px-6 lg:px-10 marble-veined">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Journal</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.04 }}
          >
            Notes from <br />
            <span className="italic text-gold">the workshop.</span>
          </h1>
          <p className="mt-6 max-w-xl" style={{ fontSize: "1.02rem" }}>
            Care guides, design conversations and short stories about the stones we shape.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="group block">
            <div
              className="relative aspect-[4/3] overflow-hidden shadow-stone group-hover:shadow-stone-hover transition-shadow duration-500"
              style={{ borderRadius: "4px" }}
            >
              <Image
                src={a.image}
                alt={a.title}
                fill
                preload={i === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <span
                className="absolute top-4 left-4 label-sm px-3 py-1 glass"
                style={{ borderRadius: "999px", color: "var(--ink)" }}
              >
                {a.category}
              </span>
            </div>
            <p className="label-sm mt-5" style={{ color: "var(--ink-mute)" }}>
              {a.date} · {a.readTime} read
            </p>
            <h2
              className="font-display italic mt-2 text-ink"
              style={{ fontSize: "1.3rem", lineHeight: 1.25 }}
            >
              {a.title}
            </h2>
            <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
              {a.excerpt}
            </p>
            <span className="label-sm hover-rule inline-block mt-4" style={{ color: "var(--gold)" }}>
              Read the piece
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
