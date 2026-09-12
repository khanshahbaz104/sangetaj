import type { Metadata } from "next";
import { LegalDocument, type LegalDoc } from "@/components/ui/LegalDocument";
import doc from "@/data/legal-shipping.json";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: "Lead times, packaging, customs and delivery coverage across the Gulf and worldwide.",
};

export default function ShippingPage() {
  return <LegalDocument doc={doc as LegalDoc} />;
}
