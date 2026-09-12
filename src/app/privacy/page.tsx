import type { Metadata } from "next";
import { LegalDocument, type LegalDoc } from "@/components/ui/LegalDocument";
import doc from "@/data/legal-privacy.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return <LegalDocument doc={doc as LegalDoc} />;
}
