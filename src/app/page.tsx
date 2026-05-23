import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyMakranaSection } from "@/components/sections/WhyMakranaSection";
import { CorporateGiftingCallout } from "@/components/sections/CorporateGiftingCallout";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";

export const metadata: Metadata = {
  title: "Sang-e-Taj | Makrana Marble Showpieces — Luxury Interior Objects for the Gulf",
  description:
    "Hand-carved from Makrana White — the stone that built the Taj Mahal. Permanent showpieces for palatial interiors, private residences, and prestige spaces across the Gulf. Each piece commands a room.",
  keywords: [
    "makrana marble showpiece", "makhrana marble", "makhrana marble showpiece",
    "makrana marble UAE", "makhrana marble Dubai", "makrana marble Gulf",
    "luxury marble showpiece UAE", "marble showpiece Dubai", "marble showpiece Gulf",
    "makrana white marble showpiece", "makhrana white marble", "marble interior object UAE",
    "luxury interior showpiece Dubai", "marble sculpture Gulf", "bespoke marble showpiece UAE",
    "رخام مكرانة", "رخام مكرانة دبي", "منحوتة رخام فاخرة الخليج",
    "makrana marble Taj Mahal", "Rajasthan marble showpiece", "luxury marble gift Gulf",
  ],
  openGraph: {
    title: "Sang-e-Taj | Makrana Marble Showpieces for the Gulf",
    description:
      "Hand-carved from Makrana White — the stone of the Taj Mahal. For palatial interiors across the Gulf.",
    type: "website",
    url: "https://sangetaj.com",
    images: [{ url: "https://sangetaj.com/images/makrana-marble-dhow-showpiece-sang-e-zafar.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://sangetaj.com" },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Makrana marble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Makrana marble — also written as Makhrana marble — is a rare white crystalline marble quarried exclusively in Makrana, Rajasthan, India. It is the stone from which the Taj Mahal was built in 1632. Its extraordinary purity, luminosity, and resistance to yellowing come from its unique calcite crystal structure formed over 500 million years. No other quarry on earth produces marble of equivalent quality.",
      },
    },
    {
      "@type": "Question",
      name: "What is Makhrana marble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Makhrana marble is the same stone as Makrana marble — both spellings refer to the same rare white marble from Makrana, Rajasthan. The spelling 'Makhrana' is widely used across the Gulf region. It is the world's finest white marble, famous for building the Taj Mahal and for its geological resistance to discolouration that no other white marble can match.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship marble showpieces to the UAE, Saudi Arabia, and the Gulf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sang-e-Taj ships to the UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah, Dammam), Qatar, Kuwait, Bahrain, and Oman. All pieces are custom-crated and insured for international transit. Contact us via WhatsApp to discuss delivery timelines for your location.",
      },
    },
    {
      "@type": "Question",
      name: "Can I commission a custom marble showpiece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Sang-e-Taj commission begins with a conversation about your vision, space, and brief. We work with you on scale, form, and finish — then our Rajasthani artisans execute the piece entirely by hand in Makrana White marble. Commission timelines typically range from 6 to 16 weeks depending on complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to hand-carve a marble showpiece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on scale and complexity, a Sang-e-Taj marble sculpture takes between 6 and 16 weeks to complete. Each piece passes through multiple artisan hands — rough form, surface refinement, detail carving, and final polish — before inspection and approval.",
      },
    },
    {
      "@type": "Question",
      name: "Is each marble sculpture unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because each sculpture is hand-carved from a single block of Makrana White marble by Rajasthani craftsmen, no two pieces are identical in surface pattern, light behaviour, or detail. Every Sang-e-Taj object is accompanied by a Certificate of Makrana Origin documenting the lead artisan's name, generation, and work period.",
      },
    },
    {
      "@type": "Question",
      name: "Are marble showpieces suitable as luxury gifts in the Gulf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sang-e-Taj marble showpieces are used as luxury gifts across the Gulf for board-level presentations, state occasions, client milestones, and royal gifts. Each piece comes with a hand-signed Certificate of Makrana Origin, custom crating, and the option for personalised documentation. Contact us for corporate and gifting enquiries.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HeroSection />
      <BrandStorySection />
      <FeaturedProductsSection />
      <WhyMakranaSection />
      <CorporateGiftingCallout />
      <ProcessSection />
      <TrustSection />
    </>
  );
}
