import data from "@/data/products.json";

export interface Product {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  subtitle: string;
  tag: "Automotive" | "Maritime" | "Bespoke" | "Architectural";
  narrative: string;
  material: string;
  dimensions: string;
  weight: string;
  scale: string;
  finishOptions: string[];
  leadTime: string;
  highlights: string[];
  customisationOptions: string[];
  featured: boolean;
  image: string;
  images: string[];
}

export const products: Product[] = data as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
