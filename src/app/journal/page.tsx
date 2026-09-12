import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the workshop. Marble care, design ideas and the stories behind the stones.",
};

const articles = [
  {
    slug: "marble-care-guide",
    title: "How to live with a marble piece, beautifully.",
    excerpt: "Sealing, polishing, what to wipe with and what to never put on the surface.",
    image: "/images/categories/home-decor/vases.webp",
    tag: "Care",
  },
  {
    slug: "interior-design-ideas",
    title: "Styling marble across a contemporary home.",
    excerpt: "Where to add stone, where to hold back, and the small details that lift a room.",
    image: "/images/categories/living/cover.webp",
    tag: "Design",
  },
  {
    slug: "different-marble-types",
    title: "A short field guide to natural marble.",
    excerpt: "Carrara, Calacatta, Statuario, Makrana and the rest. Where each one comes from and what it does best.",
    image: "/images/categories/architectural/wall-cladding.webp",
    tag: "Stones",
  },
  {
    slug: "marble-vs-granite",
    title: "Marble or granite. The honest comparison.",
    excerpt: "When each material is the right call, told without sales spin.",
    image: "/images/categories/architectural/kitchen-countertops.webp",
    tag: "Stones",
  },
  {
    slug: "bathroom-inspiration",
    title: "Six bathrooms we keep coming back to.",
    excerpt: "Marble in family bathrooms, hotel suites and powder rooms.",
    image: "/images/categories/bathroom/cover.webp",
    tag: "Design",
  },
  {
    slug: "gift-guides",
    title: "Marble gifts that age well.",
    excerpt: "A short list for weddings, milestones and the people who already have everything.",
    image: "/images/categories/gifts/cover.webp",
    tag: "Gifts",
  },
];

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
          <p className="mt-6 max-w-xl">
            Care guides, design conversations, gift edits and short stories about the stones we shape.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <Link
            key={a.slug}
            href={`/journal/${a.slug}`}
            className="group block"
          >
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
                {a.tag}
              </span>
            </div>
            <p
              className="font-display italic mt-5"
              style={{ fontSize: "1.4rem", color: "var(--ink)", lineHeight: 1.2 }}
            >
              {a.title}
            </p>
            <p className="mt-2" style={{ color: "var(--ink-soft)" }}>
              {a.excerpt}
            </p>
            <span className="label-sm mt-3 inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: "var(--gold)" }}>
              Read
              <span className="block h-px w-4 transition-all duration-300 group-hover:w-7" style={{ background: "var(--gold)" }} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
