import type { MarbleType } from "@/data/products";

export type MarbleSwatch = {
  name: MarbleType;
  swatch: string;
  vein: string;
  origin: string;
  note: string;
};

// Approximate swatch colours for chip indicators on cards.
// The 'swatch' is the base tone; 'vein' is a secondary line used in the gradient.
export const marbleProfiles: Record<MarbleType, MarbleSwatch> = {
  "Carrara White": {
    name: "Carrara White",
    swatch: "#E8E2D6",
    vein: "#9F9A8E",
    origin: "Tuscany, Italy",
    note: "Soft, warm white with grey veining. The most familiar of the Italian whites.",
  },
  "Calacatta Gold": {
    name: "Calacatta Gold",
    swatch: "#EFE7D0",
    vein: "#B58E3D",
    origin: "Apuan Alps, Italy",
    note: "Bright white with dramatic gold and amber veining. Rare and statement-making.",
  },
  Statuario: {
    name: "Statuario",
    swatch: "#F2EFE7",
    vein: "#4D4842",
    origin: "Carrara region, Italy",
    note: "A pure crystalline white with sharp dark veins. The classical sculptural marble.",
  },
  "Makrana White": {
    name: "Makrana White",
    swatch: "#F2EEE2",
    vein: "#C7C0AC",
    origin: "Makrana, Rajasthan",
    note: "The stone of the Taj Mahal. Dense, luminous and resistant to yellowing.",
  },
  "Nero Marquina": {
    name: "Nero Marquina",
    swatch: "#1F1B17",
    vein: "#E5DDC6",
    origin: "Biscay, Spain",
    note: "A deep black marble with bright white veining. Striking against brass and gold.",
  },
  "Verde Guatemala": {
    name: "Verde Guatemala",
    swatch: "#1F3A26",
    vein: "#A8B49E",
    origin: "Kerala / Guatemala",
    note: "A rich forest green with pale veining. Cool to the touch and full of depth.",
  },
  "Travertine Beige": {
    name: "Travertine Beige",
    swatch: "#D9C7A6",
    vein: "#9B8463",
    origin: "Tivoli, Italy",
    note: "Warm, porous and textural. The honest stone of Roman baths and modern interiors.",
  },
  "Onyx Honey": {
    name: "Onyx Honey",
    swatch: "#D4A55E",
    vein: "#7A4F1F",
    origin: "Iran / Pakistan",
    note: "Translucent honey-amber. Glows under direct light and works with warm metals.",
  },
};

export function marbleSwatch(name: MarbleType) {
  return marbleProfiles[name].swatch;
}

export function marbleVein(name: MarbleType) {
  return marbleProfiles[name].vein;
}

export function marbleProfile(name: MarbleType) {
  return marbleProfiles[name];
}
