import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Legal and policy copy is held as data so the wording stays in one place and
 * every document renders identically. Blocks map one-to-one onto the source
 * documents: headings, prose, bulleted lists and label/value tables.
 */
export type LegalBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: [string, string][] };

export type LegalDoc = {
  eyebrow: string;
  title: string;
  titleItalic: string;
  description: string;
  lastUpdated: string;
  blocks: LegalBlock[];
};

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <div className="bg-marble">
      <section className="pt-40 pb-12 px-6 lg:px-10 marble-veined">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{doc.eyebrow}</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.04 }}
          >
            {doc.title} <span className="italic text-gold">{doc.titleItalic}</span>
          </h1>
          {doc.lastUpdated && (
            <p className="label-sm mt-5" style={{ color: "var(--ink-mute)" }}>
              {doc.lastUpdated}
            </p>
          )}
        </div>
      </section>

      <section className="py-14 md:py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {doc.blocks.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="font-display italic text-ink border-t border-line pt-8 mt-10 first:mt-0 first:border-0 first:pt-0"
                  style={{ fontSize: "1.5rem" }}
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p key={i} className="mt-4" style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={i} className="mt-5 flex flex-col gap-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ fontSize: "0.98rem", color: "var(--ink-soft)" }}
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
              <dl key={i} className="mt-6 flex flex-col">
                {block.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-1 sm:gap-6 py-3 border-b border-line"
                  >
                    <dt className="label-sm" style={{ color: "var(--ink-mute)" }}>
                      {label}
                    </dt>
                    <dd style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{value}</dd>
                  </div>
                ))}
              </dl>
            );
          })}

          <p
            className="mt-14 border-t border-line pt-8"
            style={{ fontSize: "1rem", color: "var(--ink-soft)" }}
          >
            Questions about this document? Write to{" "}
            <a href="mailto:hello@marble.sangetaj.com" className="hover-rule text-gold">
              hello@marble.sangetaj.com
            </a>{" "}
            or{" "}
            <Link href="/contact" className="hover-rule text-gold">
              contact the atelier
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
