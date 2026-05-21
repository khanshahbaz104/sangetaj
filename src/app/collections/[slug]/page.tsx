import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { ProductInquiryForm } from "@/components/sections/ProductInquiryForm";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";
import { ProductGallery } from "@/components/ui/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const SITE_URL = "https://sangetaj.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const isAutomotive = product.tag === "Automotive";
  const isMaritime   = product.tag === "Maritime";
  const description  = `${product.narrative.slice(0, 145)}...`;

  return {
    title: `${product.name} — Makrana Marble Showpiece`,
    description,
    keywords: [
      `${product.name}`, "Makrana marble showpiece", "luxury interior UAE",
      `marble showpiece Dubai`, `marble sculpture Abu Dhabi`,
      `luxury ${isAutomotive ? "automotive sculpture" : "maritime sculpture"} Gulf`,
      "luxury interior Saudi Arabia", "marble showpiece Riyadh",
      "marble sculpture Qatar", "luxury showpiece Kuwait",
      "bespoke marble GCC", "luxury interior object Gulf",
      ...(isAutomotive ? ["marble car sculpture", "automotive marble art", "car showpiece UAE", "luxury marble desk sculpture"] : []),
      ...(isMaritime    ? ["dhow marble sculpture", "maritime heritage Gulf", "boat sculpture UAE", "تمثال ذو رخام", "سفينة رخام"] : []),
      "رخام مكرانة", "منحوتة رخام فاخرة",
      "handcarved marble showpiece", "Makrana marble sculpture luxury", "Makrana white marble sculpture",
      "marble sculpture gift Dubai", "custom marble showpiece UAE",
    ],
    openGraph: {
      title: `${product.name} | Sang-e-Taj`,
      description,
      type: "website",
      url: `${SITE_URL}/collections/${product.slug}`,
      images: [
        {
          url: `${SITE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: `${product.name} — Hand-carved Makrana marble showpiece`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sang-e-Taj`,
      description,
      images: [`${SITE_URL}${product.image}`],
    },
    alternates: {
      canonical: `${SITE_URL}/collections/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the Sang-e-Taj ${product.name}. Could you please provide more information and a private quotation?`
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.narrative,
    image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/collections/${product.slug}`,
    brand: { "@type": "Brand", name: "Sang-e-Taj" },
    material: "Makrana White Marble",
    manufacturer: {
      "@type": "Organization",
      name: "Sang-e-Taj",
      address: { "@type": "PostalAddress", addressRegion: "Rajasthan", addressCountry: "IN" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD" },
      seller: { "@type": "Organization", name: "Sang-e-Taj" },
      areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Dimensions", value: product.dimensions },
      { "@type": "PropertyValue", name: "Weight",     value: product.weight },
      { "@type": "PropertyValue", name: "Scale",      value: product.scale },
      { "@type": "PropertyValue", name: "Lead Time",  value: product.leadTime },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",        item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Collections", item: `${SITE_URL}/collections` },
      { "@type": "ListItem", position: 3, name: product.name,  item: `${SITE_URL}/collections/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <div className="pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <RevealSection>
            <div
              className="flex items-center gap-3 py-6 mb-4"
              style={{ borderBottom: "1px solid rgba(138,136,134,0.12)" }}
            >
              <Link
                href="/collections"
                className="label text-[9px] tracking-widest transition-colors"
                style={{ color: "rgba(240,237,232,0.4)" }}
              >
                Collections
              </Link>
              <span className="label text-[9px]" style={{ color: "var(--gold)" }}>/</span>
              <span className="label text-[9px] tracking-widest" style={{ color: "var(--kohl)" }}>
                {product.name}
              </span>
            </div>
          </RevealSection>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-24">
          {/* Left — Image gallery */}
          <RevealSection>
            <ProductGallery
              images={product.images}
              name={product.name}
              subtitle={product.subtitle}
            />
          </RevealSection>

          {/* Right — Product details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <RevealSection>
              {/* Tag */}
              <span
                className="label text-[9px] tracking-widest px-3 py-1.5 inline-block mb-6"
                style={{ backgroundColor: "rgba(138,136,134,0.1)", color: "var(--gold)" }}
              >
                {product.tag}
              </span>

              {/* Name */}
              <h1
                className="font-heading font-bold mb-1"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                {product.name}
              </h1>
              <p
                className="font-heading font-bold italic mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.5rem",
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.arabicName}
              </p>
              <p className="label text-[9px] tracking-widest mb-8" style={{ color: "rgba(240,237,232,0.45)" }}>
                {product.subtitle}
              </p>

              {product.tag === "Automotive" && (
                <p
                  className="label text-[8px] tracking-widest mb-8 leading-relaxed"
                  style={{ color: "rgba(240,237,232,0.28)" }}
                >
                  {product.name} is an original work of decorative art hand-carved in Makrana White marble. It is not a licensed, endorsed, or affiliated product of any automotive manufacturer. All design elements are interpreted artistically and are proprietary to Sang-e-Taj.
                </p>
              )}

              <GoldRule className="mb-6" />

              {/* Highlights — 3 quick differentiators unique to this product */}
              <div className="flex flex-col gap-2 mb-6">
                {product.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span style={{ color: "var(--gold)", fontSize: "0.6rem", marginTop: "4px" }}>◆</span>
                    <p className="text-sm" style={{ color: "rgba(240,237,232,0.85)" }}>{h}</p>
                  </div>
                ))}
              </div>

              <GoldRule className="mb-6" />

              {/* Narrative */}
              <p className="text-base leading-loose mb-6" style={{ color: "rgba(240,237,232,0.68)" }}>
                {product.narrative}
              </p>

              <GoldRule full className="mb-8" />

              {/* Specs */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-8">
                {[
                  { label: "Material", value: product.material },
                  { label: "Dimensions", value: product.dimensions },
                  { label: "Weight", value: product.weight },
                  { label: "Scale", value: product.scale },
                  { label: "Lead Time", value: product.leadTime, full: true },
                ].map((spec) => (
                  <div key={spec.label} className={spec.full ? "col-span-2" : ""}>
                    <p className="label text-[8px] tracking-widest mb-1" style={{ color: "var(--gold)" }}>
                      {spec.label}
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.68)" }}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <GoldRule full className="mb-8" />

              {/* Finish options */}
              <div className="mb-8">
                <p className="label text-[8px] tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                  Finish Options
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.finishOptions.map((finish) => (
                    <span
                      key={finish}
                      className="label text-[9px] tracking-widest px-4 py-2 border"
                      style={{ borderColor: "rgba(138,136,134,0.3)", color: "rgba(240,237,232,0.7)" }}
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Make it singular */}
              <div
                className="p-6 mb-8"
                style={{ backgroundColor: "rgba(138,136,134,0.06)", borderLeft: "2px solid var(--gold)" }}
              >
                <p className="label text-[9px] tracking-widest mb-3" style={{ color: "var(--gold)" }}>
                  Make It Singular
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(240,237,232,0.62)" }}>
                  Each personalisation is handled by a dedicated artisan. Lead time extends by 2–4 weeks.
                </p>
                <div className="flex flex-col gap-2">
                  {product.customisationOptions.map((opt) => (
                    <div key={opt} className="flex items-start gap-2">
                      <span className="mt-1 text-[8px]" style={{ color: "var(--gold)" }}>◈</span>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.62)" }}>{opt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/917014558962?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-[10px] tracking-widest w-full py-4 flex items-center justify-center gap-3 transition-all duration-300"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <p className="text-center label text-[8px] tracking-widest" style={{ color: "rgba(240,237,232,0.62)" }}>
                  or scroll down to submit a private inquiry
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm italic" style={{ color: "rgba(240,237,232,0.65)" }}>
                  Pricing provided privately upon inquiry. Corporate and institutional quotations available on request.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>

        <ProductInquiryForm productName={product.name} />
      </div>
    </div>
    </>
  );
}
