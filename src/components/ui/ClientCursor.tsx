"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr:false must live in a Client Component
const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

export function ClientCursor() {
  return <CustomCursor />;
}
