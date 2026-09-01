/**
 * products.js — PRODUCT CATALOG
 * ------------------------------------------------------------
 * Add a new product by adding a new object to this array — nothing
 * else in the codebase needs to change.
 *
 * Fields:
 *   id            unique number
 *   name          product name
 *   category      must match a `slug` in categories.js
 *   price         display string, e.g. "€49.00"
 *   rating        number 0–5 (one decimal)
 *   description   one short sentence for the card
 *   details       longer paragraph for the product modal
 *   features      array of short bullet strings
 *   curatorNote   one short sentence — why this made the list
 *   badge         optional: "Editor's Pick" | "Best Seller" | "New" | null
 *   featured      true to appear in the "Editor's Selection" section
 *   amazonUrl     replace with the real affiliate link when ready
 *   image         optional real image URL — leave null to use the
 *                 generated placeholder art
 */

const products = [
  {
    id: 1,
    name: "Aluminum Desk Lamp",
    category: "office",
    price: "€79.00",
    rating: 4.7,
    description: "A quiet, adjustable task light with a warm colour temperature.",
    details:
      "Machined from a single aluminum extrusion, this lamp folds flat against the desk when not in use and holds its position at any angle without drifting. The warm 2700K LED is easy on the eyes for long evening sessions.",
    features: ["Stepless dimming", "2700K warm LED", "Folds flat", "USB-C powered"],
    curatorNote: "Three years in and ours hasn't flickered once.",
    badge: "Editor's Pick",
    featured: true,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 2,
    name: "Mechanical Travel Keyboard",
    category: "technology",
    price: "€129.00",
    rating: 4.6,
    description: "A compact 75% layout with low-profile switches for daily typing.",
    details:
      "Built for people who type all day, this keyboard trims the layout to essentials without losing the arrow cluster. Hot-swappable switches mean you can change the feel later without a soldering iron.",
    features: ["Hot-swap switches", "75% layout", "Bluetooth + USB-C", "Aluminum top plate"],
    curatorNote: "The one keyboard on this list we didn't have to break in.",
    badge: "Best Seller",
    featured: true,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 3,
    name: "Ceramic Pour-Over Set",
    category: "home",
    price: "€54.00",
    rating: 4.8,
    description: "A slow-drip dripper and matching carafe in matte stoneware.",
    details:
      "The double-walled ceramic keeps the brew hotter for longer than glass alternatives, and the wide spiral ribbing inside encourages even extraction without a paper filter fold to fuss over.",
    features: ["Double-walled ceramic", "Fits standard filters", "350ml carafe", "Dishwasher safe"],
    curatorNote: "Outperformed dripper twice its price in our side-by-side.",
    badge: null,
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 4,
    name: "Foldable Resistance Bands",
    category: "fitness",
    price: "€32.00",
    rating: 4.5,
    description: "A five-band set that packs into a bag smaller than a water bottle.",
    details:
      "Latex bands rated from 5kg to 40kg of resistance, colour-coded and stitched rather than glued at the seams — the usual point of failure in cheaper sets.",
    features: ["5 resistance levels", "Stitched seams", "Includes door anchor", "Travel pouch"],
    curatorNote: "Survived eighteen months of actual, not aspirational, use.",
    badge: null,
    featured: true,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 5,
    name: "Full-Grain Leather Card Holder",
    category: "accessories",
    price: "€45.00",
    rating: 4.7,
    description: "A slim, six-card holder that thins out as the leather softens.",
    details:
      "Vegetable-tanned leather that develops a patina rather than cracking. Holds up to six cards and a folded note without bulging in a front pocket.",
    features: ["Full-grain leather", "6-card capacity", "Develops patina", "Hand-stitched edges"],
    curatorNote: "Replaced a wallet three times its size and nobody noticed.",
    badge: "New",
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 6,
    name: "Packable Rain Shell",
    category: "travel",
    price: "€98.00",
    rating: 4.6,
    description: "A three-layer waterproof jacket that folds into its own pocket.",
    details:
      "Taped seams and a 20,000mm waterproof rating without the stiffness of cheaper shells. Packs down to the size of a grapefruit for a carry-on.",
    features: ["20,000mm waterproof", "Packs into pocket", "Pit zip ventilation", "Adjustable hood"],
    curatorNote: "Kept us dry through a full day of Scottish weather.",
    badge: null,
    featured: true,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 7,
    name: "Magnetic Phone Stand",
    category: "technology",
    price: "€28.00",
    rating: 4.4,
    description: "A pocketable stand that snaps to the back of compatible phones.",
    details:
      "Aircraft-grade aluminum hinge holds any angle from portrait video calls to landscape streaming, and folds flat enough to disappear in a laptop sleeve.",
    features: ["Magnetic alignment", "Folds flat", "Portrait & landscape", "Anodized aluminum"],
    curatorNote: "The small object we recommend most often to friends.",
    badge: null,
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 8,
    name: "Linen Throw Blanket",
    category: "home",
    price: "€68.00",
    rating: 4.8,
    description: "A stonewashed linen throw that softens with every wash.",
    details:
      "Woven from European flax and stonewashed before stitching, this throw arrives already soft rather than needing a year of washing to earn it.",
    features: ["100% European flax", "Stonewashed finish", "130x180cm", "Machine washable"],
    curatorNote: "The one item in the flat that guests always ask about.",
    badge: "Editor's Pick",
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 9,
    name: "Adjustable Kettlebell",
    category: "fitness",
    price: "€139.00",
    rating: 4.5,
    description: "A single kettlebell that replaces a rack of five.",
    details:
      "A dial adjusts the load from 8kg to 24kg in 4kg increments, with a locking collar that's held up to daily swings without loosening.",
    features: ["8–24kg adjustable", "Locking dial", "Compact footprint", "Textured grip"],
    curatorNote: "Cleared an entire corner of the garage.",
    badge: null,
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 10,
    name: "Merino Wool Beanie",
    category: "accessories",
    price: "€36.00",
    rating: 4.6,
    description: "An unlined merino beanie that regulates temperature, not just blocks wind.",
    details:
      "Fine-gauge merino means it breathes on milder days instead of turning into a sauna, and it packs flat enough to live in a coat pocket.",
    features: ["100% merino wool", "Unlined fit", "Machine washable", "One size"],
    curatorNote: "Stayed in rotation past three winters of daily wear.",
    badge: null,
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 11,
    name: "Compression Packing Cubes",
    category: "travel",
    price: "€42.00",
    rating: 4.7,
    description: "A four-piece set with a second zip that compresses each cube flat.",
    details:
      "The double-zip design lets you close the cube normally, then pull a second zipper to compress it by roughly a third — the difference between a carry-on that closes and one that doesn't.",
    features: ["4-piece set", "Dual-zip compression", "Water-resistant fabric", "Mesh top panel"],
    curatorNote: "Turned one overstuffed bag into a case with room to spare.",
    badge: "Best Seller",
    featured: false,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 12,
    name: "Walnut Monitor Stand",
    category: "office",
    price: "€89.00",
    rating: 4.8,
    description: "A solid walnut riser with storage for a keyboard underneath.",
    details:
      "Cut and finished from solid walnut rather than veneer, this riser lifts a monitor to eye height while leaving enough clearance beneath for a keyboard and a notebook.",
    features: ["Solid walnut", "Holds up to 15kg", "Cable channel", "Non-slip pads"],
    curatorNote: "The desk upgrade people notice before they notice the monitor.",
    badge: null,
    featured: true,
    amazonUrl: "AMAZON_AFFILIATE_LINK_HERE",
    image: null,
  },
  {
    id: 13,
    name: "CeraVe Blemish Control Gel Cleanser",
    category: "beauty",
    price: "consult on Amazon",
    rating: 4.6,
    description: "A salicylic acid gel cleanser for acne-prone, oily skin.",
    details:
      "Formulated with three essential ceramides, salicylic acid and niacinamide, this gel cleanser unclogs pores and reduces blackheads and breakouts while its oil-absorbing technology helps control shine — all without stripping the skin's protective barrier.",
    features: ["Salicylic acid", "3 essential ceramides", "Niacinamide", "Oil-absorbing technology"],
    curatorNote: "Dermatologist-developed and gentle enough for daily use.",
    badge: null,
    featured: true,
    amazonUrl: "https://link.amazon/B09krI9vP",
    image: "images/cerave-blemish-control-cleanser.jpg",
  },
  {
    id: 14,
    name: "Olaplex Nº.4 Bond Maintenance Shampoo",
    category: "beauty",
    price: "consult on Amazon",
    rating: 4.7,
    description: "A strengthening, sulfate-free shampoo that reduces breakage.",
    details:
      "Olaplex's patented bond-building technology repairs and strengthens hair from within, reducing breakage and static while restoring shine and softness. Suitable for all hair types and free from sulfates and parabens.",
    features: ["Patented Bond Building Technology", "Sulfate-free", "Paraben-free", "All hair types"],
    curatorNote: "The shampoo colorists actually recommend after a lightening service.",
    badge: null,
    featured: true,
    amazonUrl: "https://link.amazon/B0bAC2fDL",
    image: "images/olaplex-no4-shampoo.jpg",
  },
  {
    id: 15,
    name: "Rena Chris Gua Sha and Facial Roller in Stainless Steel",
    category: "beauty",
    price: "consult on Amazon",
    rating: 4.5,
    description: "Manual stainless steel facial massager and Gua Sha tool designed to sculpt the jawline and reduce under-eye puffiness.",
    details:
      "A stainless steel Gua Sha and facial roller set for a refreshing skincare massage. Its cool metal surface helps soothe the skin while the ergonomic design makes it easy to massage the face, define the jawline, and reduce the appearance of under-eye bags. A thoughtful gift for anyone who enjoys a simple and relaxing skincare routine.",
    features: ["Stainless steel construction", "Gua Sha and facial roller", "Helps sculpt the jawline", "Helps reduce under-eye puffiness"],
    curatorNote: "A sleek and practical facial massage tool that adds a relaxing touch to any skincare routine.",
    badge: null,
    featured: false,
    amazonUrl: "https://link.amazon/B0b2gALDC",
    image: "images/61-qgjcOoTL._AC_SL1500_.jpg",
  },
  {
    id: 16,
    name: "The Ordinary Hyaluronic Acid 2% + B5 with Ceramides",
    category: "beauty",
    price: "consult on Amazon",
    rating: 4.5,
    description: "Multidimensional hydrating serum formulated with hyaluronic acid, vitamin B5, and ceramides to leave skin softer, smoother, and more hydrated.",
    details:
      "A lightweight hydrating serum designed to support the skin's moisture barrier while providing multidimensional hydration. The formula combines hyaluronic acid, vitamin B5, and ceramides to help leave the skin feeling softer, smoother, and more supple.",
    features: ["2% hyaluronic acid", "Vitamin B5", "Ceramides", "Helps support the skin barrier"],
    curatorNote: "A simple, effective hydration serum that fits easily into any daily skincare routine.",
    badge: null,
    featured: false,
    amazonUrl: "https://link.amazon/B0ePJTFBi",
    image: "images/41TKJhJ-igL._SL1080_.jpg",
  },
  {
    id: 17,
    name: "SKIN1004 Madagascar Centella Ampoule Foam",
    category: "beauty",
    price: "consult on Amazon",
    rating: 4.5,
    description: "A gentle facial cleansing foam with Madagascar Centella designed to cleanse the skin while leaving it feeling fresh and comfortable.",
    details:
      "A creamy cleansing foam formulated with Madagascar Centella to help remove impurities and excess oil without leaving the skin feeling overly dry. Its gentle formula makes it a practical addition to a daily skincare routine.",
    features: ["Madagascar Centella", "Gentle cleansing foam", "Helps remove impurities", "Suitable for daily use"],
    curatorNote: "A gentle everyday cleanser for a fresh and comfortable skincare routine.",
    badge: null,
    featured: false,
    amazonUrl: "https://link.amazon/B06lyhkq7",
    image: "images/71d4b0WSJXL._AC_SL1500_.jpg",
  },
];
