import type { Metadata } from "next";
import { LegalDocument, type LegalDoc } from "@/components/ui/LegalDocument";
import doc from "@/data/legal-terms.json";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing the purchase and commission of our marble pieces.",
};

export default function TermsPage() {
  return <LegalDocument doc={doc as LegalDoc} />;
}
