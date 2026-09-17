/* ============================================
   PRODUCTS DATA — Yogi Sports Gwalior
   ============================================
   
   HOW TO ADD A NEW PRODUCT:
   ========================
   1. Place your product photo in the "images/products/" folder
   2. Add a new object to the PRODUCTS array below
   3. Save the file — that's it!

   Each product needs:
   - name:    Product name (string)
   - brand:   Brand name (string)
   - sport:   Sport category — must be one of: 
              "cricket", "football", "badminton", "hockey", "tennis", "kabaddi", "fitness"
   - price:   Price with ₹ symbol (string)
   - image:   Path to the image file (string)
   - isNew:   Set to true for "NEW" badge (boolean)

   Example:
   { name: "MRF Genius Grand", brand: "MRF", sport: "cricket", price: "₹8,500", image: "images/products/mrf-genius.jpg", isNew: true }
   
   ============================================ */

const PRODUCTS = [
  // ---- CRICKET ----
  {
    name: "SG Test Pro Cricket Bat",
    brand: "SG Cricket",
    sport: "cricket",
    price: "₹4,500",
    image: "images/products/cricket-bats-display.png",
    isNew: true
  },
  {
    name: "SS Ton Player Edition Bat",
    brand: "SS",
    sport: "cricket",
    price: "₹6,200",
    image: "images/products/cricket-bat-legguards.png",
    isNew: true
  },
  {
    name: "AIM Premium Batting Gloves",
    brand: "AIM Sports",
    sport: "cricket",
    price: "₹1,800",
    image: "images/products/aim-batting-gloves.png",
    isNew: true
  },
  {
    name: "SG Black Gold Batting Pads",
    brand: "SG Cricket",
    sport: "cricket",
    price: "₹3,200",
    image: "images/products/sg-batting-pads.png",
    isNew: true
  },
  {
    name: "DSC Intense Batting Pads",
    brand: "DSC",
    sport: "cricket",
    price: "₹2,800",
    image: "images/products/dsc-batting-pads.png",
    isNew: false
  },
  {
    name: "Puma Premium Batting Pads",
    brand: "Puma",
    sport: "cricket",
    price: "₹4,500",
    image: "images/products/puma-batting-pads.png",
    isNew: true
  },
  {
    name: "DSC Pro Batting Gloves (Pair)",
    brand: "DSC",
    sport: "cricket",
    price: "₹1,600",
    image: "images/products/dsc-batting-gloves.png",
    isNew: false
  },
  {
    name: "Premium Cricket Kit Bag",
    brand: "SG Cricket",
    sport: "cricket",
    price: "₹3,500",
    image: "images/products/cricket-kit-bags.png",
    isNew: true
  },
  {
    name: "Cricket Stumps & Bails Set",
    brand: "SG Cricket",
    sport: "cricket",
    price: "₹1,200",
    image: "images/products/cricket-bats-stumps.png",
    isNew: false
  },
  {
    name: "Multi-Color Batting Pads",
    brand: "Various",
    sport: "cricket",
    price: "₹2,400",
    image: "images/products/pads-multi-color.png",
    isNew: false
  },

  // ---- FOOTBALL ----
  {
    name: "Nivia Storm Football",
    brand: "Nivia",
    sport: "football",
    price: "₹1,200",
    image: "images/sports/football.jpg",
    isNew: true
  },
  {
    name: "Cosco Roma Football",
    brand: "Cosco",
    sport: "football",
    price: "₹950",
    image: "images/sports/football.jpg",
    isNew: false
  },
  {
    name: "Nivia Carbonite Football Shoes",
    brand: "Nivia",
    sport: "football",
    price: "₹2,800",
    image: "images/sports/football.jpg",
    isNew: true
  },

  // ---- BADMINTON ----
  {
    name: "Yonex Astrox 99 Pro",
    brand: "Yonex",
    sport: "badminton",
    price: "₹12,500",
    image: "images/sports/badminton.jpg",
    isNew: true
  },
  {
    name: "Li-Ning Windstorm 72",
    brand: "Li-Ning",
    sport: "badminton",
    price: "₹4,800",
    image: "images/sports/badminton.jpg",
    isNew: false
  },
  {
    name: "Yonex Mavis 350 Shuttlecocks",
    brand: "Yonex",
    sport: "badminton",
    price: "₹650",
    image: "images/sports/badminton.jpg",
    isNew: true
  },

  // ---- HOCKEY ----
  {
    name: "Grays GX7000 Composite Stick",
    brand: "Grays",
    sport: "hockey",
    price: "₹8,900",
    image: "images/sports/hockey.jpg",
    isNew: true
  },
  {
    name: "Kookaburra Dimple Ball",
    brand: "Kookaburra",
    sport: "hockey",
    price: "₹450",
    image: "images/sports/hockey.jpg",
    isNew: false
  },

  // ---- TENNIS ----
  {
    name: "Cosco Championship Tennis Racket",
    brand: "Cosco",
    sport: "tennis",
    price: "₹2,400",
    image: "images/sports/tennis.jpg",
    isNew: true
  },
  {
    name: "Nivia Heavy Tennis Balls (Pack of 6)",
    brand: "Nivia",
    sport: "tennis",
    price: "₹380",
    image: "images/sports/tennis.jpg",
    isNew: false
  },

  // ---- FITNESS ----
  {
    name: "Nivia Pro Grip Gym Gloves",
    brand: "Nivia",
    sport: "fitness",
    price: "₹850",
    image: "images/products/gloves-bats-aim.png",
    isNew: true
  },
  {
    name: "Cosco Power Resistance Bands Set",
    brand: "Cosco",
    sport: "fitness",
    price: "₹1,100",
    image: "images/sports/kabaddi.jpg",
    isNew: false
  }
];
