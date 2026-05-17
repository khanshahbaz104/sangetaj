import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Private Enquiries",
  description:
    "Enquire privately about Sang-e-Taj Makrana marble showpieces. All inquiries receive a personal response within 24 hours. Available across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
  keywords: [
    "contact marble showpiece UAE", "marble sculpture enquiry Dubai", "luxury marble enquiry Gulf",
    "Sang-e-Taj contact", "marble showpiece inquiry Saudi Arabia", "luxury interior enquiry Qatar",
    "marble sculpture price Kuwait", "Makrana marble contact GCC", "استفسار رخام الإمارات",
  ],
  openGraph: {
    title: "Private Enquiries | Sang-e-Taj",
    description:
      "Enquire privately about Makrana marble showpieces. Personal response within 24 hours.",
    type: "website",
    url: "https://sangetaj.com/contact",
  },
  alternates: { canonical: "https://sangetaj.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
