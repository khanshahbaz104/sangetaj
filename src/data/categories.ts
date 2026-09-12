export type CollectionGroup =
  | "luxe"
  | "home-decor"
  | "bathroom"
  | "kitchen-dining"
  | "furniture"
  | "lighting"
  | "office"
  | "garden-outdoor"
  | "hospitality"
  | "decorative"
  | "living"
  | "gifts"
  | "architectural"
  | "lifestyle"
  | "luxury-accessories";

export type Category = {
  slug: string;
  name: string;
  group: CollectionGroup;
  blurb: string;
  image: string;
};

/**
 * Every image lives in `public/images/categories/<group>/<file>.webp`.
 * File names are kept in sync with the category slugs below, so the
 * argument order reads the same way the folder is laid out on disk.
 */
const img = (group: CollectionGroup, file: string) =>
  `/images/categories/${group}/${file}.webp`;

const cover = (group: CollectionGroup) => img(group, "cover");

export const collectionGroups: {
  slug: CollectionGroup;
  name: string;
  blurb: string;
  image: string;
}[] = [
  {
    slug: "luxe",
    name: "The Luxe Collection",
    blurb:
      "Signature commissions carved from a single block of Makrana White. Automotive and maritime forms, made to be lived with rather than used.",
    image: cover("luxe"),
  },
  {
    slug: "home-decor",
    name: "Marble Home Decor",
    blurb: "Trays, vases, bowls, candle holders, frames, boxes and the smaller pieces that finish a room.",
    image: cover("home-decor"),
  },
  {
    slug: "bathroom",
    name: "Bathroom Accessories",
    blurb: "Vanity sets, dispensers, holders and the everyday objects that earn a daily ritual.",
    image: cover("bathroom"),
  },
  {
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    blurb: "Boards, platters, mortars, coasters and the surfaces that go to the table.",
    image: cover("kitchen-dining"),
  },
  {
    slug: "furniture",
    name: "Marble Furniture",
    blurb: "Coffee tables, side tables, dining tables and the heirloom pieces of the home.",
    image: cover("furniture"),
  },
  {
    slug: "lighting",
    name: "Marble Lighting",
    blurb: "Table lamps, floor lamps and lantern bases shaped from veined stone.",
    image: cover("lighting"),
  },
  {
    slug: "office",
    name: "Office Accessories",
    blurb: "Desk objects, paperweights and pen stands with real weight.",
    image: cover("office"),
  },
  {
    slug: "garden-outdoor",
    name: "Garden & Outdoor",
    blurb: "Planters, water fountains and benches finished to weather a season outside.",
    image: cover("garden-outdoor"),
  },
  {
    slug: "hospitality",
    name: "Hotel & Hospitality",
    blurb: "Reception, amenity and restaurant pieces made to volume without losing the hand.",
    image: cover("hospitality"),
  },
  {
    slug: "decorative",
    name: "Decorative Collection",
    blurb: "Geometric and abstract forms — spheres, cubes, obelisks and centrepieces.",
    image: cover("decorative"),
  },
  {
    slug: "living",
    name: "Living Collection",
    blurb: "Coffee table, console and accent pieces curated for the open rooms of the home.",
    image: cover("living"),
  },
  {
    slug: "gifts",
    name: "Gift Collection",
    blurb: "Wedding, corporate and personalised marble gifts, boxed and engraved on request.",
    image: cover("gifts"),
  },
  {
    slug: "architectural",
    name: "Architectural Products",
    blurb: "Tiles, cladding, columns, jali, vanity and counter tops for project-scale work.",
    image: cover("architectural"),
  },
  {
    slug: "lifestyle",
    name: "Lifestyle Products",
    blurb: "Watch stands, ring holders, vanity organisers and the small luxuries of a dressing table.",
    image: cover("lifestyle"),
  },
  {
    slug: "luxury-accessories",
    name: "Luxury Accessories",
    blurb: "Chess sets, backgammon boards, wine chillers and desk sets in considered stone.",
    image: cover("luxury-accessories"),
  },
];

export const groupLabels: Record<CollectionGroup, string> = Object.fromEntries(
  collectionGroups.map((g) => [g.slug, g.name])
) as Record<CollectionGroup, string>;

export const categories: Category[] = [
  // The Luxe Collection — signature commission pieces, sold to enquiry
  { slug: "automotive-sculptures", name: "Automotive Sculptures", group: "luxe", blurb: "Saloon and high-riding forms carved at 1:18 from a single block.", image: img("luxe", "automotive-sculptures") },
  { slug: "maritime-sculptures", name: "Maritime Sculptures", group: "luxe", blurb: "Heritage dhows and full-rigged ships, rigging and all, in Makrana White.", image: img("luxe", "maritime-sculptures") },

  // 1 — Marble Home Decor
  { slug: "decorative-trays", name: "Decorative Trays", group: "home-decor", blurb: "Hand-finished trays in single-block marble.", image: img("home-decor", "decorative-trays") },
  { slug: "serving-trays", name: "Serving Trays", group: "home-decor", blurb: "Heavy serving trays with brushed metal handles.", image: img("home-decor", "serving-trays") },
  { slug: "fruit-bowls", name: "Fruit Bowls", group: "home-decor", blurb: "Generous low bowls for kitchen islands and centres.", image: img("home-decor", "fruit-bowls") },
  { slug: "decorative-bowls", name: "Decorative Bowls", group: "home-decor", blurb: "Sculptural vessels for coffee tables and consoles.", image: img("home-decor", "decorative-bowls") },
  { slug: "candle-holders", name: "Candle Holders", group: "home-decor", blurb: "Stepped holders for taper, pillar and tea lights.", image: img("home-decor", "candle-holders") },
  { slug: "tea-light-holders", name: "Tea Light Holders", group: "home-decor", blurb: "Smaller, weighted holders for tea lights.", image: img("home-decor", "tea-light-holders") },
  { slug: "lantern-bases", name: "Lantern Bases", group: "home-decor", blurb: "Bases that lift a lantern off the surface.", image: img("home-decor", "lantern-bases") },
  { slug: "vases", name: "Vases", group: "home-decor", blurb: "Sculpted forms for fresh and dried arrangements.", image: img("home-decor", "vases") },
  { slug: "decorative-plates", name: "Decorative Plates", group: "home-decor", blurb: "Wide, shallow plates for centrepieces and styling.", image: img("home-decor", "decorative-plates") },
  { slug: "book-ends", name: "Book Ends", group: "home-decor", blurb: "Geometric book ends with real weight.", image: img("home-decor", "book-ends") },
  { slug: "decorative-boxes", name: "Decorative Boxes", group: "home-decor", blurb: "Lidded boxes for the console and the dressing table.", image: img("home-decor", "decorative-boxes") },
  { slug: "jewelry-boxes", name: "Jewelry Boxes", group: "home-decor", blurb: "Compartmented marble boxes for fine jewellery.", image: img("home-decor", "jewelry-boxes") },
  { slug: "keepsake-boxes", name: "Keepsake Boxes", group: "home-decor", blurb: "Small boxes for the things you keep close.", image: img("home-decor", "keepsake-boxes") },
  { slug: "tissue-box-covers", name: "Tissue Box Covers", group: "home-decor", blurb: "Weighty marble covers for the vanity and the desk.", image: img("home-decor", "tissue-box-covers") },
  { slug: "photo-frames", name: "Photo Frames", group: "home-decor", blurb: "Cut-marble frames in tabletop and wall sizes.", image: img("home-decor", "photo-frames") },
  { slug: "marble-clocks", name: "Marble Clocks", group: "home-decor", blurb: "Geometric desk and wall clocks in solid stone.", image: img("home-decor", "marble-clocks") },
  { slug: "pen-holders", name: "Pen Holders", group: "home-decor", blurb: "Cylindrical and squared holders for the desk.", image: img("home-decor", "pen-holders") },
  { slug: "luxury-gift-sets", name: "Luxury Gift Sets", group: "home-decor", blurb: "Boxed sets curated for special occasions.", image: img("home-decor", "luxury-gift-sets") },
  { slug: "decorative-pedestals", name: "Decorative Pedestals", group: "home-decor", blurb: "Plinths for art, plants and statement objects.", image: img("living", "pedestals") },
  { slug: "marble-display-stands", name: "Marble Display Stands", group: "home-decor", blurb: "Low stands and risers for shelf styling.", image: img("home-decor", "marble-display-stands") },

  // 2 — Bathroom Accessories
  { slug: "soap-dispensers", name: "Soap Dispensers", group: "bathroom", blurb: "Solid stone bodies with brushed metal pumps.", image: img("bathroom", "soap-dispensers") },
  { slug: "soap-dishes", name: "Soap Dishes", group: "bathroom", blurb: "Channelled dishes that drain naturally.", image: img("bathroom", "soap-dishes") },
  { slug: "toothbrush-holders", name: "Toothbrush Holders", group: "bathroom", blurb: "Compact, weighty holders for the basin.", image: img("bathroom", "toothbrush-holders") },
  { slug: "tumbler-holders", name: "Tumbler Holders", group: "bathroom", blurb: "Marble tumblers and rinse cups.", image: img("bathroom", "tumbler-holders") },
  { slug: "bathroom-trays", name: "Bathroom Trays", group: "bathroom", blurb: "Trays for the vanity and the bath edge.", image: img("bathroom", "bathroom-trays") },
  { slug: "vanity-organizers", name: "Vanity Organizers", group: "bathroom", blurb: "Compartmented stone organisers for the dressing area.", image: img("bathroom", "vanity-organizers") },
  { slug: "cotton-jars", name: "Cotton Jars", group: "bathroom", blurb: "Lidded jars for cotton and small essentials.", image: img("bathroom", "cotton-jars") },
  { slug: "storage-canisters", name: "Storage Canisters", group: "bathroom", blurb: "Larger lidded canisters for the bath.", image: img("bathroom", "storage-canisters") },
  { slug: "toilet-brush-holders", name: "Toilet Brush Holders", group: "bathroom", blurb: "Heavy marble holders with replaceable inserts.", image: img("bathroom", "toilet-brush-holders") },
  { slug: "waste-bins", name: "Waste Bins", group: "bathroom", blurb: "Marble bins for the powder room and the suite.", image: img("bathroom", "waste-bins") },
  { slug: "bathroom-shelves", name: "Bathroom Shelves", group: "bathroom", blurb: "Cut-stone shelves for soap, scent and stack.", image: img("bathroom", "bathroom-shelves") },
  { slug: "bathroom-sets", name: "Complete Bathroom Sets", group: "bathroom", blurb: "Matched five and seven-piece bathroom sets.", image: img("bathroom", "bathroom-sets") },

  // 3 — Kitchen & Dining
  { slug: "cheese-boards", name: "Cheese Boards", group: "kitchen-dining", blurb: "Cool stone boards for charcuterie and patisserie.", image: img("kitchen-dining", "cheese-boards") },
  { slug: "chopping-boards", name: "Chopping Boards", group: "kitchen-dining", blurb: "Heavy boards for the kitchen island.", image: img("kitchen-dining", "chopping-boards") },
  { slug: "serving-boards", name: "Serving Boards", group: "kitchen-dining", blurb: "Long boards built for grazing and gathering.", image: img("kitchen-dining", "serving-boards") },
  { slug: "pizza-boards", name: "Pizza Boards", group: "kitchen-dining", blurb: "Round serving boards sized for pizza and bread.", image: img("kitchen-dining", "pizza-boards") },
  { slug: "cake-stands", name: "Cake Stands", group: "kitchen-dining", blurb: "Footed stands for cakes, pastries and centrepieces.", image: img("kitchen-dining", "cake-stands") },
  { slug: "lazy-susans", name: "Lazy Susan Turntables", group: "kitchen-dining", blurb: "Rotating marble turntables for shared dining.", image: img("kitchen-dining", "lazy-susans") },
  { slug: "coasters", name: "Coasters", group: "kitchen-dining", blurb: "Cut sets in white, green and grey marble.", image: img("kitchen-dining", "coasters") },
  { slug: "napkin-holders", name: "Napkin Holders", group: "kitchen-dining", blurb: "Weighted holders that hold linen in place.", image: img("kitchen-dining", "napkin-holders") },
  { slug: "salt-pepper-cellars", name: "Salt & Pepper Cellars", group: "kitchen-dining", blurb: "Lidded cellars for the dining table.", image: img("kitchen-dining", "salt-pepper-cellars") },
  { slug: "spice-containers", name: "Spice Containers", group: "kitchen-dining", blurb: "Stackable lidded jars for the spice shelf.", image: img("kitchen-dining", "spice-containers") },
  { slug: "mortar-pestle", name: "Mortar & Pestle", group: "kitchen-dining", blurb: "Heavy mortars hand-finished from solid marble.", image: img("kitchen-dining", "mortar-pestle") },
  { slug: "rolling-pins", name: "Rolling Pins (Belan)", group: "kitchen-dining", blurb: "Cool stone pins that keep dough cold.", image: img("kitchen-dining", "rolling-pins") },
  { slug: "chakla", name: "Chakla", group: "kitchen-dining", blurb: "Round rolling boards in white and grey marble.", image: img("kitchen-dining", "chakla") },
  { slug: "butter-dishes", name: "Butter Dishes", group: "kitchen-dining", blurb: "Lidded marble dishes for the breakfast table.", image: img("kitchen-dining", "butter-dishes") },
  { slug: "serving-platters", name: "Serving Platters", group: "kitchen-dining", blurb: "Wide platters for hosting at scale.", image: img("kitchen-dining", "serving-platters") },
  { slug: "snack-bowls", name: "Snack Bowls", group: "kitchen-dining", blurb: "Small footed bowls for nuts and olives.", image: img("kitchen-dining", "snack-bowls") },
  { slug: "dry-fruit-bowls", name: "Dry Fruit Bowls", group: "kitchen-dining", blurb: "Sectioned bowls for an Eid or wedding spread.", image: img("kitchen-dining", "dry-fruit-bowls") },
  { slug: "cake-display-stands", name: "Cake Display Stands", group: "kitchen-dining", blurb: "Tall cake stands for ceremonies and occasions.", image: img("kitchen-dining", "cake-display-stands") },
  { slug: "wine-bottle-holders", name: "Wine Bottle Holders", group: "kitchen-dining", blurb: "Single-bottle marble holders for the bar.", image: img("kitchen-dining", "wine-bottle-holders") },

  // 4 — Furniture
  { slug: "coffee-tables", name: "Coffee Tables", group: "furniture", blurb: "Marble tops on hand-shaped bases.", image: img("furniture", "coffee-tables") },
  { slug: "side-tables", name: "Side Tables", group: "furniture", blurb: "Slim, sculptural tables for sofas and bedsides.", image: img("furniture", "end-tables") },
  { slug: "console-tables", name: "Console Tables", group: "furniture", blurb: "Long marble consoles for entryways and halls.", image: img("furniture", "console-tables") },
  { slug: "dining-tables", name: "Dining Tables", group: "furniture", blurb: "Heirloom marble dining tables.", image: img("furniture", "dining-tables") },
  { slug: "nesting-tables", name: "Nesting Tables", group: "furniture", blurb: "Stacking sets of two and three marble tables.", image: img("furniture", "nesting-tables") },
  { slug: "center-tables", name: "Center Tables", group: "furniture", blurb: "Statement centre tables for living and reception.", image: img("furniture", "center-tables") },
  { slug: "end-tables", name: "End Tables", group: "furniture", blurb: "Compact end tables in solid stone.", image: img("furniture", "end-tables") },
  { slug: "bedside-tables", name: "Bedside Tables", group: "furniture", blurb: "Cool marble tops for the bedside.", image: img("furniture", "bedside-tables") },
  { slug: "benches", name: "Marble Benches", group: "furniture", blurb: "Sculpted benches for halls and entryways.", image: img("furniture", "benches") },
  { slug: "stools", name: "Stools", group: "furniture", blurb: "Low marble stools as seating or pedestals.", image: img("furniture", "stools") },
  { slug: "table-tops", name: "Marble Table Tops", group: "furniture", blurb: "Made-to-measure tops for restoration and retrofit.", image: img("furniture", "table-tops") },
  { slug: "office-tables", name: "Office Tables", group: "furniture", blurb: "Director and meeting tables in solid stone.", image: img("furniture", "office-tables") },

  // 5 — Lighting
  { slug: "table-lamps", name: "Table Lamps", group: "lighting", blurb: "Marble bases paired with linen and silk shades.", image: img("lighting", "table-lamps") },
  { slug: "floor-lamps", name: "Floor Lamps", group: "lighting", blurb: "Tall, sculpted floor lamps on weighted bases.", image: img("lighting", "floor-lamps") },
  { slug: "pendant-bases", name: "Pendant Light Bases", group: "lighting", blurb: "Sculpted marble forms for pendant fittings.", image: img("lighting", "pendant-bases") },
  { slug: "lamp-bases", name: "Lamp Bases", group: "lighting", blurb: "Stone bases shaped for custom lamp builds.", image: img("lighting", "lamp-bases") },
  { slug: "candle-lanterns", name: "Candle Lanterns", group: "lighting", blurb: "Lanterns finished with glass and marble.", image: img("lighting", "candle-lanterns") },
  { slug: "light-stands", name: "Decorative Light Stands", group: "lighting", blurb: "Pedestal stands for hurricane lamps and candles.", image: img("lighting", "light-stands") },

  // 6 — Office Accessories
  { slug: "desk-organizers", name: "Desk Organizers", group: "office", blurb: "Compartmented marble organisers for the desk.", image: img("office", "desk-organizers") },
  { slug: "pen-stands", name: "Pen Stands", group: "office", blurb: "Tall stands for pens, scissors and rulers.", image: img("office", "pen-stands") },
  { slug: "business-card-holders", name: "Business Card Holders", group: "office", blurb: "Slim marble holders for the desk and reception.", image: img("office", "business-card-holders") },
  { slug: "paperweights", name: "Paperweights", group: "office", blurb: "Geometric paperweights with real heft.", image: img("office", "paperweights") },
  { slug: "letter-trays", name: "Letter Trays", group: "office", blurb: "Stacking trays for incoming and outgoing papers.", image: img("office", "letter-trays") },
  { slug: "desktop-clocks", name: "Desktop Clocks", group: "office", blurb: "Geometric stone clocks for the desk.", image: img("office", "desktop-clocks") },
  { slug: "laptop-stands", name: "Laptop Stands", group: "office", blurb: "Cool marble stands that vent and lift the screen.", image: img("office", "laptop-stands") },
  { slug: "office-gift-sets", name: "Office Gift Sets", group: "office", blurb: "Boxed desk sets for executive gifting.", image: img("office", "office-gift-sets") },

  // 7 — Garden & Outdoor
  { slug: "garden-benches", name: "Garden Benches", group: "garden-outdoor", blurb: "Heavy stone benches for terraces and gardens.", image: img("garden-outdoor", "garden-benches") },
  { slug: "outdoor-tables", name: "Outdoor Tables", group: "garden-outdoor", blurb: "Garden tables built to weather a season.", image: img("garden-outdoor", "outdoor-tables") },
  { slug: "planters", name: "Planters", group: "garden-outdoor", blurb: "Cool stone planters for indoor and outdoor use.", image: img("garden-outdoor", "planters") },
  { slug: "bird-baths", name: "Bird Baths", group: "garden-outdoor", blurb: "Wide marble basins for the garden.", image: img("garden-outdoor", "bird-baths") },
  { slug: "water-fountains", name: "Water Fountains", group: "garden-outdoor", blurb: "Geometric and tiered fountains for courtyards.", image: img("garden-outdoor", "bird-baths") },
  { slug: "garden-lanterns", name: "Garden Lanterns", group: "garden-outdoor", blurb: "Marble lanterns for terraces and paths.", image: img("garden-outdoor", "garden-lanterns") },
  { slug: "outdoor-coffee-tables", name: "Outdoor Coffee Tables", group: "garden-outdoor", blurb: "Coffee tables for verandahs and outdoor sets.", image: img("garden-outdoor", "outdoor-coffee-tables") },
  { slug: "garden-edging", name: "Garden Edging", group: "garden-outdoor", blurb: "Cut marble edging for beds and walkways.", image: img("garden-outdoor", "garden-edging") },
  { slug: "stone-planters", name: "Decorative Stone Planters", group: "garden-outdoor", blurb: "Statement planters for corners and entryways.", image: img("garden-outdoor", "stone-planters") },

  // 8 — Hotel & Hospitality
  { slug: "hotel-bathroom-accessories", name: "Hotel Bathroom Accessories", group: "hospitality", blurb: "Volume-made suites of bathroom marble.", image: img("hospitality", "hotel-bathroom-accessories") },
  { slug: "reception-decor", name: "Reception Counter Decor", group: "hospitality", blurb: "Reception trays, plinths and signage in marble.", image: img("hospitality", "reception-decor") },
  { slug: "amenity-trays", name: "Room Amenity Trays", group: "hospitality", blurb: "In-room trays for water, key cards and welcome notes.", image: img("hospitality", "amenity-trays") },
  { slug: "restaurant-accessories", name: "Restaurant Table Accessories", group: "hospitality", blurb: "Cellars, holders and coasters for the front-of-house.", image: img("hospitality", "restaurant-accessories") },
  { slug: "buffet-stands", name: "Buffet Display Stands", group: "hospitality", blurb: "Tiered and footed stands for buffet lines.", image: img("hospitality", "buffet-stands") },
  { slug: "luxury-serving-trays", name: "Luxury Serving Trays", group: "hospitality", blurb: "Heavy trays for restaurant and lounge service.", image: img("hospitality", "luxury-serving-trays") },
  { slug: "hotel-signage", name: "Hotel Signage", group: "hospitality", blurb: "Engraved room numbers, plaques and wayfinding.", image: img("hospitality", "hotel-signage") },
  { slug: "concierge-accessories", name: "Concierge Desk Accessories", group: "hospitality", blurb: "Letter trays, card holders and clocks for the desk.", image: img("hospitality", "concierge-accessories") },

  // 9 — Decorative Collection
  { slug: "geometric-decor", name: "Geometric Decor Pieces", group: "decorative", blurb: "Cubes, prisms and pyramids in solid stone.", image: img("decorative", "geometric-decor") },
  { slug: "abstract-marble-art", name: "Abstract Marble Art", group: "decorative", blurb: "Non-figurative carved forms and reliefs.", image: img("decorative", "abstract-marble-art") },
  { slug: "marble-spheres", name: "Marble Spheres", group: "decorative", blurb: "Polished spheres in graduated sizes.", image: img("decorative", "marble-spheres") },
  { slug: "marble-cubes", name: "Marble Cubes", group: "decorative", blurb: "Solid cubes for shelving and stacking.", image: img("decorative", "marble-cubes") },
  { slug: "marble-pyramids", name: "Marble Pyramids", group: "decorative", blurb: "Cut pyramids as paperweights and decor.", image: img("decorative", "marble-pyramids") },
  { slug: "obelisks", name: "Decorative Obelisks", group: "decorative", blurb: "Tall, slender obelisks for consoles and shelves.", image: img("decorative", "obelisks") },
  { slug: "candle-collections", name: "Marble Candle Collections", group: "decorative", blurb: "Boxed collections of marble candle holders.", image: img("decorative", "candle-collections") },
  { slug: "luxury-centerpieces", name: "Luxury Centerpieces", group: "decorative", blurb: "Centre-of-the-table pieces for the dining room.", image: img("decorative", "luxury-centerpieces") },
  { slug: "decorative-blocks", name: "Decorative Stone Blocks", group: "decorative", blurb: "Cut blocks for shelf styling and stacking.", image: img("decorative", "decorative-blocks") },

  // 10 — Living Collection
  { slug: "coffee-table-accessories", name: "Coffee Table Accessories", group: "living", blurb: "Bowls, trays and books for the centre table.", image: img("living", "coffee-table-accessories") },
  { slug: "console-decor", name: "Console Table Decor", group: "living", blurb: "Curated edits for entryway consoles.", image: img("living", "console-decor") },
  { slug: "pedestals", name: "Decorative Pedestals", group: "living", blurb: "Plinths for art, plants and statement objects.", image: img("living", "pedestals") },
  { slug: "columns", name: "Marble Columns", group: "living", blurb: "Sculptural columns for halls and corners.", image: img("living", "columns") },
  { slug: "accent-pieces", name: "Accent Pieces", group: "living", blurb: "Smaller styling pieces for shelves and surfaces.", image: img("living", "accent-pieces") },
  { slug: "decorative-urns", name: "Decorative Urns", group: "living", blurb: "Tall, lidded urns for the formal room.", image: img("living", "decorative-urns") },
  { slug: "home-accessories", name: "Luxury Home Accessories", group: "living", blurb: "A curated edit of small luxuries.", image: img("living", "home-accessories") },

  // 11 — Gift Collection
  { slug: "wedding-gifts", name: "Wedding Gifts", group: "gifts", blurb: "Pieces for the couple, the family and the home.", image: img("gifts", "wedding-gifts") },
  { slug: "corporate-gifts", name: "Corporate Gifts", group: "gifts", blurb: "Boxed, branded and engraved on request.", image: img("gifts", "corporate-gifts") },
  { slug: "anniversary-gifts", name: "Anniversary Gifts", group: "gifts", blurb: "Curated gifts for milestones and decades.", image: img("gifts", "anniversary-gifts") },
  { slug: "festival-gifts", name: "Festival Gifts", group: "gifts", blurb: "Boxed marble for Eid, Diwali, Christmas and Lunar New Year.", image: img("gifts", "festival-gifts") },
  { slug: "luxury-hampers", name: "Luxury Gift Hampers", group: "gifts", blurb: "Multi-piece marble hampers in keepsake boxes.", image: img("gifts", "luxury-hampers") },
  { slug: "personalized-gifts", name: "Personalized Marble Gifts", group: "gifts", blurb: "Engraved with names, dates and dedications.", image: img("gifts", "personalized-gifts") },
  { slug: "engraved-plaques", name: "Engraved Marble Plaques", group: "gifts", blurb: "Wall and tabletop plaques cut from solid marble.", image: img("gifts", "engraved-plaques") },
  { slug: "name-plates", name: "Custom Name Plates", group: "gifts", blurb: "Engraved name plates for homes and offices.", image: img("gifts", "name-plates") },

  // 12 — Architectural
  { slug: "flooring-tiles", name: "Flooring Tiles", group: "architectural", blurb: "Marble flooring tiles cut and finished to order.", image: img("architectural", "flooring-tiles") },
  { slug: "wall-cladding", name: "Wall Cladding", group: "architectural", blurb: "Large-format cladding panels for wall feature work.", image: img("architectural", "wall-cladding") },
  { slug: "staircases", name: "Staircases", group: "architectural", blurb: "Treads, risers and balustrade work in solid marble.", image: img("architectural", "staircases") },
  { slug: "architectural-columns", name: "Columns", group: "architectural", blurb: "Round and fluted columns for entryways and halls.", image: img("architectural", "architectural-columns") },
  { slug: "pillars", name: "Pillars", group: "architectural", blurb: "Load-bearing and decorative pillars turned from solid marble.", image: img("architectural", "pillars") },
  { slug: "balustrades", name: "Balustrades", group: "architectural", blurb: "Cut and turned balustrades for stairs and balconies.", image: img("architectural", "balustrades") },
  { slug: "window-sills", name: "Window Sills", group: "architectural", blurb: "Hard-wearing marble sills cut to measure.", image: img("architectural", "window-sills") },
  { slug: "door-frames", name: "Door Frames", group: "architectural", blurb: "Architraves and door surrounds in solid stone.", image: img("architectural", "door-frames") },
  { slug: "jali-panels", name: "Jali Panels", group: "architectural", blurb: "Pierced geometric screens, cut from a single slab.", image: img("architectural", "jali-panels") },
  { slug: "inlay-panels", name: "Inlay Panels", group: "architectural", blurb: "Stone-on-stone inlay panels in pietra dura traditions.", image: img("architectural", "inlay-panels") },
  { slug: "architectural-table-tops", name: "Table Tops", group: "architectural", blurb: "Made-to-measure tops for restoration and project work.", image: img("architectural", "architectural-table-tops") },
  { slug: "vanity-tops", name: "Vanity Tops", group: "architectural", blurb: "Vanity tops with shaped edges and integrated basins.", image: img("architectural", "vanity-tops") },
  { slug: "kitchen-countertops", name: "Kitchen Countertops", group: "architectural", blurb: "Single-slab countertops with matching backsplashes.", image: img("architectural", "kitchen-countertops") },

  // 13 — Lifestyle Products
  { slug: "watch-stands", name: "Watch Stands", group: "lifestyle", blurb: "Single and triple watch stands in solid stone.", image: img("lifestyle", "watch-stands") },
  { slug: "ring-holders", name: "Ring Holders", group: "lifestyle", blurb: "Channelled marble holders for rings and small jewellery.", image: img("lifestyle", "ring-holders") },
  { slug: "makeup-organizers", name: "Makeup Organizers", group: "lifestyle", blurb: "Sectioned trays and risers for cosmetics.", image: img("lifestyle", "makeup-organizers") },
  { slug: "perfume-trays", name: "Perfume Trays", group: "lifestyle", blurb: "Footed trays for fragrance bottles on the vanity.", image: img("lifestyle", "perfume-trays") },
  { slug: "lifestyle-vanity-organizers", name: "Vanity Organizers", group: "lifestyle", blurb: "Multi-compartment vanity organisers.", image: img("lifestyle", "lifestyle-vanity-organizers") },
  { slug: "cosmetic-storage", name: "Cosmetic Storage", group: "lifestyle", blurb: "Lidded storage for the dressing area.", image: img("lifestyle", "cosmetic-storage") },
  { slug: "sunglasses-holders", name: "Sunglasses Holders", group: "lifestyle", blurb: "Footed holders for sunglass collections.", image: img("lifestyle", "sunglasses-holders") },
  { slug: "key-holders", name: "Key Holders", group: "lifestyle", blurb: "Tray and wall-mounted marble key holders.", image: img("lifestyle", "key-holders") },
  { slug: "phone-stands", name: "Mobile Phone Stands", group: "lifestyle", blurb: "Marble stands for phone and tablet.", image: img("lifestyle", "phone-stands") },
  { slug: "charging-docks", name: "Charging Dock Organizers", group: "lifestyle", blurb: "Stone bases that hide cables and pads.", image: img("lifestyle", "charging-docks") },

  // 14 — Luxury Accessories
  { slug: "chess-sets", name: "Chess Sets", group: "luxury-accessories", blurb: "Abstract, minimalist marble chess sets.", image: img("luxury-accessories", "chess-sets") },
  { slug: "domino-sets", name: "Domino Sets", group: "luxury-accessories", blurb: "Cut marble domino sets in keepsake boxes.", image: img("luxury-accessories", "domino-sets") },
  { slug: "backgammon-boards", name: "Backgammon Boards", group: "luxury-accessories", blurb: "Inlaid marble backgammon boards.", image: img("luxury-accessories", "backgammon-boards") },
  { slug: "wine-chillers", name: "Wine Chillers", group: "luxury-accessories", blurb: "Single-block marble chillers for white and rosé.", image: img("luxury-accessories", "wine-chillers") },
  { slug: "ice-buckets", name: "Ice Buckets", group: "luxury-accessories", blurb: "Heavy ice buckets for the bar cart.", image: img("luxury-accessories", "ice-buckets") },
  { slug: "ashtrays", name: "Ashtrays", group: "luxury-accessories", blurb: "Weighted, channelled marble ashtrays.", image: img("luxury-accessories", "ashtrays") },
  { slug: "desk-sets", name: "Luxury Desk Sets", group: "luxury-accessories", blurb: "Boxed pen, paperweight and tray sets.", image: img("luxury-accessories", "desk-sets") },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function categoriesByGroup(group: CollectionGroup) {
  return categories.filter((c) => c.group === group);
}

export function getCollectionGroup(slug: string) {
  return collectionGroups.find((g) => g.slug === slug);
}

/** Hero shot for a category, falling back to its collection cover. */
export function categoryImage(slug: string) {
  return getCategory(slug)?.image ?? "/images/categories/home-decor/cover.webp";
}

/** The collection cover a category belongs to — used as a second gallery frame. */
export function categoryGroupCover(slug: string) {
  const group = getCategory(slug)?.group;
  return group ? `/images/categories/${group}/cover.webp` : "/images/categories/home-decor/cover.webp";
}
