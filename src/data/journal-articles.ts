export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured: boolean;
  metaDescription: string;
  keywords: string[];
  content: ContentBlock[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "why-makrana-marble-has-never-been-replicated",
    title:
      "Why Makrana Marble Has Never Been Replicated — And What That Means for the Objects You Choose to Keep",
    category: "Material Heritage",
    date: "April 2025",
    readTime: "6 min",
    excerpt:
      "There is a question that serious collectors eventually ask: why does this marble stay white when everything else yellows? The answer lies 400 million years in the past.",
    image: "/images/car/marble-auto-01.png",
    featured: true,
    metaDescription:
      "Why Makrana marble does not yellow or crack — the geological science behind the stone that built the Taj Mahal, and what it means for luxury interior objects in UAE and Gulf residences.",
    keywords: [
      "Makrana marble unique properties",
      "why Makrana marble doesn't yellow",
      "Makrana marble vs Italian marble",
      "luxury marble interior UAE",
      "Makrana marble durability",
      "Taj Mahal marble stone",
      "رخام مكرانة",
      "رخام فاخر للمنازل",
      "luxury interior object Dubai",
      "permanent interior showpiece Gulf",
    ],
    content: [
      {
        type: "paragraph",
        text: "There is a question that serious collectors eventually ask: why does this marble stay white when everything else yellows? The answer lies 400 million years in the past — and it explains why the Taj Mahal looks the way it does today, and why Makrana marble commands rooms that other materials merely occupy.",
      },
      {
        type: "subheading",
        text: "The Geology of Permanence",
      },
      {
        type: "paragraph",
        text: "Most marbles are limestone subjected to heat and pressure over millions of years. The process drives out impurities, recrystallises the calcium carbonate, and produces the interlocking crystal structure we call marble. What makes Makrana different is the purity of the source limestone, and the conditions under which it was transformed.",
      },
      {
        type: "paragraph",
        text: "The Aravalli Range in Rajasthan is one of the oldest mountain systems on Earth — older than the Himalayas by hundreds of millions of years. The limestone deposits at Makrana formed roughly 480 million years ago during the Cambrian period, when the region was an ancient seabed. Over the following eons, tectonic pressure and geothermal heat acted on deposits of exceptional chemical purity, producing a marble with a calcite content of 98.8% — among the highest ever recorded in any natural stone.",
      },
      {
        type: "pullquote",
        text: "Makrana marble carries a calcite content of 98.8% — among the highest ever recorded in any natural stone. That single number explains everything.",
      },
      {
        type: "subheading",
        text: "Why Most Marble Yellows — And Why Makrana Does Not",
      },
      {
        type: "paragraph",
        text: "The yellowing and darkening observed in Italian marbles, Chinese marbles, and Indian marbles from other regions is caused by the same thing: mineral impurities in the stone. Iron compounds — common in most limestone deposits — oxidise over time when exposed to air and moisture. The result is a slow but irreversible colour shift toward cream, amber, and eventually brown.",
      },
      {
        type: "paragraph",
        text: "Makrana marble contains iron at trace levels so low they are essentially undetectable. Without iron to oxidise, there is no mechanism for yellowing. The stone's crystalline structure is also unusually dense and interlocked, with almost no micro-porosity. Moisture does not penetrate. Organic compounds have nowhere to collect.",
      },
      {
        type: "paragraph",
        text: "This is why the Taj Mahal, completed in 1653 and constructed entirely from Makrana White, appears in modern photographs as luminously white as it did in seventeenth-century Mughal miniatures. After nearly four centuries of exposure to sun, monsoon, and pollution, the stone has not yellowed. It has not cracked. In the sections preserved from surface restoration, it looks new.",
      },
      {
        type: "subheading",
        text: "What the Taj Mahal Actually Tells Collectors",
      },
      {
        type: "paragraph",
        text: "The Taj Mahal is not merely a historical building. For a collector of permanent interior objects, it is evidence — the longest-running test of any decorative stone in recorded history. 370 years of data, in one of the world's most demanding environments.",
      },
      {
        type: "paragraph",
        text: "No synthetic material has been tested against time in anything approaching the same way. Engineered quartz, resin composites, and treated limestones are sold with warranties measured in years. Makrana marble has a track record measured in centuries.",
      },
      {
        type: "pullquote",
        text: "Engineered quartz comes with a warranty measured in years. Makrana marble has a track record measured in centuries.",
      },
      {
        type: "paragraph",
        text: "This distinction matters enormously when an object is intended to outlast its buyer — to become part of an estate, to be placed in a principal residence or a private office and remain there unchanged for generations.",
      },
      {
        type: "subheading",
        text: "Why Replication Has Failed",
      },
      {
        type: "paragraph",
        text: "Multiple attempts have been made over the past century to replicate Makrana's optical properties in other materials. None have succeeded. The specific combination of calcite purity, crystal structure, and the regional conditions that produced it cannot be recreated artificially. The Aravalli deposits represent a geological event that took 480 million years and will not repeat.",
      },
      {
        type: "paragraph",
        text: "Quarrying from this specific belt is limited by both the finite nature of the deposit and regulations governing its extraction. What this means practically: any object carved from Makrana marble is already drawing on a finite and irreplaceable resource. The material itself will become rarer over coming decades, not more common.",
      },
      {
        type: "subheading",
        text: "What This Means for an Object in Your Interior",
      },
      {
        type: "paragraph",
        text: "An interior object carved from Makrana marble is not simply decorative. It is a physical argument made in the most enduring material available to human craft.",
      },
      {
        type: "list",
        items: [
          "It will not require resealing every five years like engineered stone",
          "It will not fade under UV light the way coloured marble does",
          "It will not develop micro-fractures from thermal cycling in air-conditioned interiors",
          "Cleaned with a dry cloth, it requires nothing more",
        ],
      },
      {
        type: "paragraph",
        text: "Placed in a reception hall, a private study, or an executive office, it will outlast every other object in the room. The furniture will be recovered, the rugs replaced, the artwork rotated. The marble piece will remain, unchanged — accumulating meaning rather than losing it.",
      },
      {
        type: "paragraph",
        text: "That is not a marketing claim. It is what 480 million years of geological record, and 370 years of observable performance at the Taj Mahal, demonstrates.",
      },
    ],
  },

  {
    slug: "the-language-of-gifting-in-the-gulf",
    title:
      "The Language of Gifting in the Gulf — What an Object Communicates That Words Cannot",
    category: "Culture",
    date: "March 2025",
    readTime: "5 min",
    excerpt:
      "In Gulf culture, a gift is not a transaction. It is a declaration. It says: I considered you. I knew your taste. I found the only thing worthy.",
    image: "/images/ship/blackperl.png",
    featured: false,
    metaDescription:
      "Gifting culture in the Gulf — UAE, Saudi Arabia, Qatar, Kuwait. What a permanent marble object communicates in Gulf business relationships, and why it outlasts any consumable luxury gift.",
    keywords: [
      "luxury gifts UAE",
      "corporate gifts Dubai",
      "gifting etiquette Gulf",
      "luxury corporate gift Saudi Arabia",
      "executive gift Qatar",
      "premium gift Kuwait",
      "هدايا فاخرة الإمارات",
      "هدايا شركات السعودية",
      "marble gift Gulf",
      "bespoke gift UAE",
      "luxury gifting culture GCC",
    ],
    content: [
      {
        type: "paragraph",
        text: "In Gulf culture, a gift is not a transaction. It is a declaration. It says: I considered you. I knew your taste. I found the only thing worthy. In the hierarchy of gifts, what you give determines how you are remembered — and how seriously you will be taken in the relationship that follows.",
      },
      {
        type: "subheading",
        text: "The Gift as a Statement of Calibre",
      },
      {
        type: "paragraph",
        text: "Across the GCC — in Riyadh, Dubai, Kuwait City, Doha — gifting occupies a position in business and personal relationships that is difficult for outsiders to fully appreciate. The exchange of gifts marks the opening of negotiations, the closing of partnerships, the honouring of milestones. What matters is not only what is given, but what the gift communicates about the giver.",
      },
      {
        type: "paragraph",
        text: "A gift chosen quickly, from a hotel boutique or a duty-free catalogue, communicates something. It says: I thought of you at the last moment. I valued the relationship enough to give something — but not enough to search for something worthy.",
      },
      {
        type: "pullquote",
        text: "A gift chosen slowly, from knowledge of the recipient — that says: I have thought about you before today. I know what you value. I found the one thing that matches what you have built.",
      },
      {
        type: "subheading",
        text: "Why Objects Endure Where Consumables Do Not",
      },
      {
        type: "paragraph",
        text: "The most common luxury gifts in Gulf corporate relationships are consumable or depreciable: watches that mark wealth but become common in rooms where everyone wears one, perfumes that last a season, hampers that are consumed and forgotten. These have their place. But they do not endure.",
      },
      {
        type: "paragraph",
        text: "An object that occupies a permanent position in a room — on a desk, on a cabinet, on a console at the entrance to a private office — does something different. It remains. Every visitor notices it. Every meeting happens in its presence. The giver is represented in the room indefinitely.",
      },
      {
        type: "paragraph",
        text: "In a culture where relationships are long and where physical spaces communicate status, a permanent object is not simply a gift. It is a long-term presence. It says, in every meeting that follows: this was placed here by someone who understood.",
      },
      {
        type: "subheading",
        text: "What Makrana Marble Communicates Specifically",
      },
      {
        type: "paragraph",
        text: "In the Gulf, stone has a particular resonance. The great mosques, the foundational institutions, the family seats of the most established families — they are built in stone. Stone communicates permanence, rootedness, and the kind of wealth that does not need to be spoken about.",
      },
      {
        type: "paragraph",
        text: "Makrana marble carries its own specific provenance. The stone that built the Taj Mahal — the most expensive commission in Mughal history, the structure that emperors used to communicate the permanence of dynasties — is now available in hand-carved form, as a private interior object. The historical association is not an invention. It is a material fact. The stone is the same. The quarries are the same. The carving tradition is a direct continuation of artisans whose predecessors shaped the Taj's inlaid panels.",
      },
      {
        type: "paragraph",
        text: "For a recipient who understands this — and in the Gulf's most cultivated circles, many do — a Makrana marble showpiece is immediately legible as a serious object. Not expensive decoration. Something with weight in every sense of the word.",
      },
      {
        type: "subheading",
        text: "Occasions That Demand an Object of This Register",
      },
      {
        type: "paragraph",
        text: "There are moments in Gulf business and personal life when any ordinary gift would be an insult to the occasion:",
      },
      {
        type: "list",
        items: [
          "The completion of a major real estate development",
          "The listing of a family company",
          "The appointment of a son or daughter to a board",
          "The opening of a new headquarters or showroom",
          "The signing of a partnership that both families will build on for decades",
        ],
      },
      {
        type: "paragraph",
        text: "In these moments, the object given will be judged against the scale of the occasion. A watch, even a significant one, is still a watch. A marble object, hand-carved in Makrana, personalised with a name or a date in Arabic calligraphy — that is a commission. That is a gift that took time, knowledge, and effort to source.",
      },
      {
        type: "pullquote",
        text: "That is a gift that will be placed somewhere visible and remain there for twenty years.",
      },
      {
        type: "subheading",
        text: "A Note on Bespoke",
      },
      {
        type: "paragraph",
        text: "For relationships that are truly foundational — family partnerships, generational business relationships, the acknowledgement of extraordinary personal events — the option of commissioning a bespoke piece carries its own meaning.",
      },
      {
        type: "paragraph",
        text: "A bespoke Sang-e-Taj piece is not ordered from a catalogue. It begins with a conversation, a brief, an understanding of the recipient and the space the object will inhabit. It is then carved to that brief by artisans who have spent their lives working with this specific stone.",
      },
      {
        type: "paragraph",
        text: "The result is singular. There is no other object like it in the world. That singularity is part of what you give.",
      },
    ],
  },

  {
    slug: "from-the-quarry-to-the-atelier",
    title:
      "From Quarry to Atelier — A Day in Makrana with Our Master Carver",
    category: "Craft",
    date: "February 2025",
    readTime: "6 min",
    excerpt:
      "Ramji Lal has been carving marble since he was eleven. His father carved before him. His grandfather before that. We spent a day watching his hands.",
    image: "/images/car/marble-auto-02.png",
    featured: false,
    metaDescription:
      "A day inside the Makrana marble atelier — how hand-carved marble showpieces are made from quarry block to finished interior object. The craft behind Sang-e-Taj pieces for Gulf residences.",
    keywords: [
      "Makrana marble quarry",
      "marble carving India",
      "Makrana marble artisan",
      "hand carved marble process",
      "marble sculpture making",
      "رخام مكرانة نحت يدوي",
      "صناعة منحوتات الرخام",
      "marble showpiece making UAE",
      "luxury craft India Gulf",
      "Rajasthan marble carving",
    ],
    content: [
      {
        type: "paragraph",
        text: "Ramji Lal has been carving marble since he was eleven. His father carved before him. His grandfather before that. Three generations of hands shaped by the same stone, in the same town, working by the same methods — except that Ramji Lal's grandfather carved for temples and his father carved for palaces, and Ramji Lal carves for rooms across the Gulf that neither of them could have imagined.",
      },
      {
        type: "paragraph",
        text: "We spent a day with him in Makrana, watching his hands.",
      },
      {
        type: "subheading",
        text: "The Town at Five in the Morning",
      },
      {
        type: "paragraph",
        text: "Makrana wakes early. By five o'clock, the trucks are already moving on the roads around the quarry belt — long, flat-bed vehicles carrying blocks of stone out toward Jodhpur and Delhi, to the workshops, to the railways, to the shipping containers that will take Makrana marble to sites across Asia, the Middle East, and Europe.",
      },
      {
        type: "paragraph",
        text: "The town's economy is stone. It has been for centuries. The quarries that supplied the Taj Mahal are still operating — some of the same pits, now cut deeper, producing the same calcite-pure white that Shah Jahan's architects specified in the seventeenth century. There are no other quarries anywhere in the world that produce stone with this specific combination of whiteness, hardness, and translucency.",
      },
      {
        type: "paragraph",
        text: "Ramji Lal's workshop is a short walk from the main quarry road. By the time we arrive at six, he is already working.",
      },
      {
        type: "subheading",
        text: "The Block",
      },
      {
        type: "paragraph",
        text: "Everything begins with the block. Not every block of Makrana marble is suitable for figurative carving — the kind of three-dimensional sculptural work that Sang-e-Taj produces requires specific qualities. The grain must be consistent. There must be no veining, no colour variation, no micro-fractures that could propagate under the stress of detailed carving.",
      },
      {
        type: "paragraph",
        text: "Ramji Lal inspects every block before he agrees to work it. He runs his fingers along the surface, taps it with a small hammer and listens to the resonance. A block with hidden fractures sounds different. A block with inconsistent grain has subtle variations in colour that catch the light at the wrong angle.",
      },
      {
        type: "pullquote",
        text: "\"This one will carve cleanly,\" he says, using the kind of confident brevity that takes forty years to earn.",
      },
      {
        type: "subheading",
        text: "The Process",
      },
      {
        type: "paragraph",
        text: "Makrana marble carving does not begin with machines. It begins with a paper template, traced onto the block with chalk. Then the rough shaping begins — removing large sections of stone with angle grinders and chisels to produce what carvers call the ghost: the approximate three-dimensional form of the finished piece, with all detail still buried inside the remaining marble.",
      },
      {
        type: "paragraph",
        text: "This stage takes days, sometimes weeks, depending on the complexity of the design. An automotive form — the precise curves of a car body at scale — has compound curves that must be cut with extraordinary accuracy, because the marble has no tolerance for correction. Wood can be filled. Clay can be reworked. Marble can only be removed.",
      },
      {
        type: "paragraph",
        text: "The intermediate stage involves hand chisels in a range of sizes: large ones for removing material, smaller ones for establishing planes, tiny ones — some no wider than a few millimetres — for detail work. The sound of a Makrana marble workshop is constant: a dry, percussive tapping, punctuated by the longer strokes of the angle grinder when a new section is being rough-cut.",
      },
      {
        type: "subheading",
        text: "The Detail",
      },
      {
        type: "paragraph",
        text: "The surface detail is where the time goes. On a finished Sang-e-Taj piece, the surface texture communicates not just form but material knowledge — the suggestion of tension in a vehicle's bodywork, the play of light across the curve of a hull. This comes from abrasive finishing: a sequence of sandpaper grits, from coarse to ultra-fine, that gradually closes the crystal structure of the marble and produces the characteristic luminosity.",
      },
      {
        type: "paragraph",
        text: "Makrana marble does something at this stage that no other stone does in quite the same way. As the surface closes, it begins to transmit light rather than simply reflecting it. The marble appears to glow from within — not because of any treatment applied to it, but because the calcite crystals themselves become semi-translucent when polished. The effect is why the Taj Mahal's interior appears lit even in the absence of direct sunlight.",
      },
      {
        type: "pullquote",
        text: "Ramji Lal holds a finished panel up to the window. The afternoon light falls through the stone. \"This is the quality,\" he says. \"Either the stone has it or it doesn't.\"",
      },
      {
        type: "subheading",
        text: "What Leaves the Atelier",
      },
      {
        type: "paragraph",
        text: "By the time a piece is ready to leave Makrana, it has been through six to ten weeks of continuous work, depending on complexity. Ramji Lal's hands carry the marks of the work: callused, precise, with a characteristic economy of movement that comes from knowing exactly how much force a chisel needs and never using more.",
      },
      {
        type: "paragraph",
        text: "The finished piece is wrapped in cloth, then foam, then a custom crate built specifically for its dimensions. It travels from Rajasthan to the Gulf in conditions designed for objects of museum quality.",
      },
      {
        type: "paragraph",
        text: "What arrives at a private residence or executive office in Dubai, Riyadh, or Doha is not decorative stonework. It is the product of three generations of inherited knowledge, a geological event 480 million years in the making, and six to ten weeks of hands that know this material better than anyone alive.",
      },
      {
        type: "paragraph",
        text: "That is what you place in a room. That is what remains there.",
      },
    ],
  },
  {
    slug: "the-dhow-in-gulf-heritage",
    title: "The Dhow in Gulf Heritage — Why the Ship Endures as the Region's Most Powerful Symbol",
    category: "Culture",
    date: "January 2025",
    readTime: "5 min",
    excerpt:
      "The dhow is not a boat. It is a argument — made in wood and sail — about who the Gulf is, where it came from, and what it built. No object carries more meaning in this part of the world.",
    image: "/images/ship/dhow/D-01.png",
    featured: false,
    metaDescription:
      "The cultural significance of the dhow in UAE, Saudi Arabia, Qatar, and Gulf heritage. Why the dhow endures as the defining symbol of Gulf identity — and what it means as a permanent interior object.",
    keywords: [
      "dhow Gulf heritage",
      "dhow symbol UAE",
      "dhow cultural meaning Gulf",
      "maritime heritage UAE",
      "dhow history Arabia",
      "سفينة الخليج",
      "قارب الخليج التراث",
      "التراث البحري الإماراتي",
      "dhow sculpture marble",
      "luxury maritime interior Gulf",
    ],
    content: [
      {
        type: "paragraph",
        text: "The dhow is not a boat. It is an argument — made in wood and sail — about who the Gulf is, where it came from, and what it built across six centuries of Indian Ocean trade. Before oil, before steel, before the skylines that now define Dubai and Doha and Riyadh, there was the dhow. And the families who sailed them.",
      },
      {
        type: "subheading",
        text: "What the Dhow Actually Was",
      },
      {
        type: "paragraph",
        text: "The term dhow covers a family of vessels — the sambuk, the jalboot, the baggala, the boom — each with specific hull forms adapted to the trade routes they ran. What united them was the lateen rig: a triangular sail on a long yard, angled to catch the monsoon winds that made the Indian Ocean a highway rather than a barrier. These winds blew reliably — southwest in summer, northeast in winter — and the dhow was built around them.",
      },
      {
        type: "paragraph",
        text: "For centuries, Gulf merchants ran routes from Basra to Zanzibar, from Muscat to Calicut, from Bahrain's pearl banks to the markets of Bombay. They traded dates and pearls outward, teak and spices inward. The dhow was the engine of this economy — which is to say, it was the engine of everything. The merchant families who owned fleets became the founding families of the Gulf's modern states. Their names are on the buildings now.",
      },
      {
        type: "pullquote",
        text: "Before oil, before steel, before the skylines that now define Dubai and Doha, there was the dhow. And the families who sailed them.",
      },
      {
        type: "subheading",
        text: "Pearl Diving and the Weight of the Sea",
      },
      {
        type: "paragraph",
        text: "The pearl diving season ran from May to September — four months of open water, with men diving to depths of thirty metres on a single breath, working from before sunrise to after sunset, filling mesh bags with oysters in the hope of finding what made the Gulf famous across the world. The nakhoda — the captain — commanded the vessel and the dive. His word was absolute. His relationship with his crew was one of the oldest forms of trust in the region.",
      },
      {
        type: "paragraph",
        text: "The collapse of the natural pearl industry in the 1930s — when Japanese cultured pearls entered the market at a fraction of the price — was catastrophic for the Gulf economy. Entire communities were displaced overnight. But it was also the moment that made clear what the dhow and the sea had actually been building: not just wealth, but the habits of endurance, navigation, and trust that would define the Gulf's response to every subsequent challenge.",
      },
      {
        type: "subheading",
        text: "Why the Symbol Persists",
      },
      {
        type: "paragraph",
        text: "Every Gulf state has the dhow on its currency, its institutions, its public art. The UAE's dirham carries it. Qatar's national museum is built around it. Abu Dhabi's Corniche is lined with them. This is not nostalgia. It is a specific and deliberate claim: that what the Gulf built before oil is as foundational as what came after.",
      },
      {
        type: "paragraph",
        text: "In Gulf family culture, the dhow carries a more personal weight. For families whose grandfathers captained vessels or owned fleets, a dhow in the home is not decoration. It is a reference to lineage. It says: we were here before this was modern, and we built what you are standing in.",
      },
      {
        type: "pullquote",
        text: "A dhow in the home is not decoration. It is a reference to lineage. It says: we were here before this was modern.",
      },
      {
        type: "subheading",
        text: "What It Means in Makrana Marble",
      },
      {
        type: "paragraph",
        text: "When the dhow is carved from Makrana marble — the same stone that built the Taj Mahal, in a single unjointed block, with sails and rigging emerging from the same material as the hull — two things happen. The form is preserved with a permanence that no wooden model can claim. And the material adds its own layer of meaning: a stone from the Indian subcontinent, shaped by the same trade routes that the dhow once sailed.",
      },
      {
        type: "paragraph",
        text: "The Indian Ocean connected the Gulf to India long before it connected either to the West. The dhow sailed those waters. The stone comes from that same geography. Placed in a majlis, a reception hall, or a private study, a Makrana marble dhow is not a replica of history. It is a continuation of it — in the most permanent material available to the craft.",
      },
    ],
  },

  {
    slug: "what-to-place-in-a-majlis",
    title: "What to Place in a Majlis — The Object That Commands the Most Important Room in a Gulf Home",
    category: "Interior",
    date: "December 2024",
    readTime: "5 min",
    excerpt:
      "The majlis is not a living room. It is where the family meets the world. What you place in it communicates everything about who you are — before a single word is spoken.",
    image: "/images/ship/blackperl.png",
    featured: false,
    metaDescription:
      "How to choose a permanent showpiece for a Gulf majlis. What the most important reception room in a Gulf home communicates — and why the object you place in it matters more than the furniture.",
    keywords: [
      "majlis interior design UAE",
      "luxury majlis decor",
      "majlis showpiece Gulf",
      "ديكور المجلس",
      "قطع ديكور فاخرة للمجلس",
      "مجلس فاخر الإمارات",
      "luxury interior Gulf home",
      "what to put in a majlis",
      "Gulf interior design",
      "permanent interior object majlis",
    ],
    content: [
      {
        type: "paragraph",
        text: "The majlis is not a living room. It is not a lounge, a sitting room, or a reception area in the Western sense of any of those words. It is the room where the family meets the world — where guests arrive, where business is discussed over coffee, where relationships that will last decades begin. What you place in it communicates everything about who you are before a single word is spoken.",
      },
      {
        type: "subheading",
        text: "The Room That Does the Talking",
      },
      {
        type: "paragraph",
        text: "In Gulf culture, the majlis is where status is read. Not stated — read. A visitor entering your majlis takes in the space in the first seconds: the height of the ceiling, the quality of the light, the weight of the objects. They are forming an impression that will colour every conversation that follows. This is understood on both sides. The guest knows they are reading the room. The host knows they are being read.",
      },
      {
        type: "paragraph",
        text: "The furniture in a majlis is expected to be fine. The carpets are expected to be fine. These are baseline signals — necessary but not sufficient. What distinguishes a majlis that commands respect from one that merely displays wealth is the presence of objects that carry genuine meaning. Objects that could only have been chosen by someone who knows what they are looking at.",
      },
      {
        type: "pullquote",
        text: "What distinguishes a majlis that commands respect from one that merely displays wealth is the presence of objects that carry genuine meaning.",
      },
      {
        type: "subheading",
        text: "What a Permanent Object Does That Furniture Cannot",
      },
      {
        type: "paragraph",
        text: "Furniture is replaced. Rugs are restored. Art is rotated. But a permanent showpiece — a hand-carved marble object that weighs several kilograms and occupies its position as though it was always meant to be there — does not change. It accumulates meaning. Every meeting held in its presence adds to what it represents. After five years in a majlis, it has become part of the room's identity.",
      },
      {
        type: "paragraph",
        text: "This is why the objects that matter most in the finest Gulf interiors are not the most expensive pieces of furniture. They are the things that were clearly chosen — not acquired. There is a difference, and any cultivated visitor can see it immediately.",
      },
      {
        type: "subheading",
        text: "Scale and Placement",
      },
      {
        type: "paragraph",
        text: "In a majlis, scale matters more than it does in any other room. A piece that is too small disappears. A piece that is too large becomes the room rather than anchoring it. The objects that work best are those that command their specific position — on a console behind the seating area, on a plinth at the entrance, on the central table where coffee is served.",
      },
      {
        type: "list",
        items: [
          "Console behind the main seating: a maritime form at 45–50 cm commands without overwhelming",
          "Entrance position: a larger piece that guests see first as they enter — the first impression sets the tone for the room",
          "Central table: a smaller, finely detailed piece that guests can examine closely during conversation",
          "Window position: where changing light throughout the day reveals the translucency of the marble",
        ],
      },
      {
        type: "subheading",
        text: "Why Stone Reads Differently in a Majlis",
      },
      {
        type: "paragraph",
        text: "In the Gulf, stone is the material of permanence. Mosques are built in stone. The foundational buildings of every Gulf city — the forts, the watchtowers, the early merchant houses — were stone. A marble object in a majlis reads against this cultural background. It does not need to be explained. The material communicates its own meaning: this is not temporary. This was chosen to last.",
      },
      {
        type: "paragraph",
        text: "Makrana White specifically carries an additional layer. It is the stone of the Taj Mahal — the most famous commission in the history of Islamic architecture, built to last indefinitely by an emperor who understood that a building is also a statement. That provenance is visible in the stone itself: in the luminosity that comes from a calcite purity found nowhere else, in the whiteness that does not yellow, in the density that means the piece will look the same in thirty years as it does today.",
      },
      {
        type: "pullquote",
        text: "A marble object in a majlis does not need to be explained. The material communicates its own meaning: this is not temporary. This was chosen to last.",
      },
      {
        type: "subheading",
        text: "The Conversation the Object Starts",
      },
      {
        type: "paragraph",
        text: "Every object in a majlis that is worth placing there becomes a point of conversation. A guest notices it, asks about it, and the answer tells them something about the host they would not otherwise have known. A hand-carved marble dhow from Makrana opens a specific conversation: about maritime heritage, about the Gulf's relationship with India across centuries of trade, about the craft tradition that produced it and the stone from which it came.",
      },
      {
        type: "paragraph",
        text: "That conversation reflects well on the person who commissioned the piece. It shows knowledge, taste, and an understanding of history that goes beyond the transactional. In a room where relationships are built, that is not a small thing.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): JournalArticle | undefined {
  return journalArticles.find((a) => a.featured);
}

export function getNonFeaturedArticles(): JournalArticle[] {
  return journalArticles.filter((a) => !a.featured);
}
