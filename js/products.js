/**
 * products.js — PRODUCT CATALOG
 * ------------------------------------------------------------
 * Add a new product by adding a new object to this array — nothing
 * else in the codebase needs to change.
 *
 * Fields:
 *   id            unique number
 *   name          product name
 *   category      must match a `slug` in categories.js:
 *                 "essentials" | "gadgets" | "setup" | "wellness"
 *                 "style" | "home" | "travel" | "trending"
 *   price         display string — use "Check on Amazon" until API is live
 *   rating        number 0–5 (one decimal)
 *   description   one short sentence for the card
 *   details       longer paragraph for the product modal
 *   features      array of short bullet strings (4–6 items)
 *   curatorNote   one short sentence — why this made the list
 *   badge         optional: "Editor's Pick" | "Best Seller" | "New" | null
 *   featured      true to appear in the "Editor's Selection" section
 *   amazonUrl     your Amazon affiliate link
 *   image         path to local image, e.g. "images/product-name.jpg"
 *                 leave null to use the generated placeholder art
 */

const products = [
  // Add your products here.
  // Example structure:
  //
  // {
  //   id: 1,
  //   name: "Product Name",
  //   category: "gadgets",
  //   price: "Check on Amazon",
  //   rating: 4.5,
  //   description: "One sentence describing this product.",
  //   details: "A longer paragraph for the modal with more context.",
  //   features: ["Feature one", "Feature two", "Feature three", "Feature four"],
  //   curatorNote: "Why this made the list.",
  //   badge: null,
  //   featured: false,
  //   amazonUrl: "https://your-affiliate-link.com",
  //   image: "images/your-image.jpg",
  // },
];
