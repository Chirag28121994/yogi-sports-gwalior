/* ============================================
   SITE CONFIGURATION — Yogi Sports Gwalior
   ============================================
   
   ✏️  UPDATE CONTACT DETAILS HERE — they auto-populate everywhere on the site.
   
   ============================================ */

const SITE_CONFIG = {

  // ---- STORE DETAILS ----
  store: {
    name: "Yogi Sports Gwalior",
    phone: "+916263549706",         // Yogi's phone (no spaces, with country code)
    phoneDisplay: "+91 62635 49706", // How it appears on the site
    email: "yogisportsgwalior@gmail.com",
    address: "Opp. Neel Foundation School,<br>Balram Nagar, Gwalior,<br>Madhya Pradesh 474004",
    hours: "Mon - Sat: 9:00 AM - 9:00 PM<br>Sunday: 10:00 AM - 6:00 PM",
    instagram: "https://www.instagram.com/yogisportsgwalior/",
    youtube: "https://www.youtube.com/@yogisportsgwalior",
    whatsappMessage: "Hi! I'm interested in sports equipment from Yogi Sports Gwalior.",
  },

  // ---- DEVELOPER DETAILS ----
  developer: {
    name: "Chirag Bhadoria",
    title: "Full-Stack Developer & Designer",
    email: "chiragbhadoria321@gmail.com",
    phone: "+919826211043",
    phoneDisplay: "+91 98262 11043",
    linkedin: "https://linkedin.com/in/chiragbhadoria",
    github: "https://github.com/chiragbhadoria",
  },

  // ---- GOOGLE MAPS ----
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d78.2056157!3d26.2508025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE1JzAyLjkiTiA3OMKwMTInMjAuMiJF!5e0!3m2!1sen!2sin!4v1",
    directionsUrl: "https://www.google.com/maps/place/YOGI+SPORTS+GWALIOR/",
  },

  // ---- YOGENDRA (YOGI) PROFILE ----
  // 📸 Update Yogi's photo anytime by changing the path or URL below:
  yogi: {
    name: "Yogendra Bhadoriya",
    title: "Indian Cricketer & Founder",
    photo: "images/yogendra/yogi-lords-medal.jpg",
  },

  // ---- GALLERY (YOGI & STORE PHOTOS) ----
  // 📸 Add any new photos here anytime — UI automatically creates cards and handles lightbox!
  // Just add: { image: "images/yogendra/my-photo.jpg", caption: "Caption here" }
  gallery: [
    {
      image: "images/yogendra/yogi-lords-medal.jpg",
      caption: "At Lord's Cricket Ground with Medal — London"
    },
    {
      image: "images/yogendra/yogi-batting-england.jpg",
      caption: "Batting for India vs England — Sweep Shot"
    },
    {
      image: "images/yogendra/yogi-wicketkeeping-england.jpg",
      caption: "Flying Wicketkeeping Dismissal vs England"
    },
    {
      image: "images/yogendra/yogi-team-india-lords.jpg",
      caption: "Team India Squad in Front of Lord's Pavilion"
    },
    {
      image: "images/yogendra/yogi-team-india-celebration.jpg",
      caption: "Team India Match Celebration & Victory"
    },
    {
      image: "images/yogendra/yogi-with-cheteshwar-pujara.jpg",
      caption: "With Cheteshwar Pujara — Onwards & Upwards"
    },
    {
      image: "images/yogendra/yogi-with-dhruv-jurel.jpg",
      caption: "With Dhruv Jurel at Narendra Modi Stadium"
    },
    {
      image: "images/yogendra/yogi-with-sai-sudharsan.jpg",
      caption: "With Sai Sudharsan at the Stadium"
    },
    {
      image: "images/yogendra/yogi-with-jaydev-unadkat.jpg",
      caption: "With Jaydev Unadkat"
    },
    {
      image: "images/yogendra/yogi-with-navdeep-saini.jpg",
      caption: "With Navdeep Saini"
    },
    {
      image: "images/yogendra/yogi-with-amit-shah.jpg",
      caption: "With Hon'ble Union Home Minister Amit Shah & Team India"
    },
    {
      image: "images/yogendra/yogi-with-anurag-thakur.jpg",
      caption: "With Hon'ble Union Sports Minister Anurag Thakur"
    },
    {
      image: "images/yogendra/yogi-with-indian-team.jpg",
      caption: "With Team India Stars & Squad"
    },
    {
      image: "images/yogendra/yogi-at-lords-balcony.jpg",
      caption: "Lord's Cricket Ground Balcony — London"
    },
    {
      image: "images/yogendra/yogi-at-lords-turf.jpg",
      caption: "At the Iconic Lord's Media Centre"
    },
    {
      image: "images/yogendra/yogi-lords-batting-gear.jpg",
      caption: "Walking off the Field at Lord's"
    },
    {
      image: "images/yogendra/yogi-on-field-training.jpg",
      caption: "On-Field Match Training & Practice"
    },
    {
      image: "images/products/store-display-1.png",
      caption: "Yogi Sports Store — Gwalior"
    },
    {
      image: "images/products/store-exterior.png",
      caption: "Store Exterior — Yogi Sports"
    },
    {
      image: "images/products/cricket-bats-display.png",
      caption: "Premium Cricket Bats Collection"
    },
    {
      image: "images/products/cricket-kit-bags.png",
      caption: "Kit Bags & Gear Collection"
    },
    {
      image: "images/yogendra/shop-interior.jpg",
      caption: "Store Interior & Inauguration"
    }
  ],

  // ---- VIDEOS ----
  // 🎬 Add YouTube videos / reels here anytime — UI renders cards automatically!
  videos: [
    {
      title: "Yogi Sports — Grand Inauguration",
      thumbnail: "images/yogendra/shop-interior.jpg",
      url: "https://www.youtube.com/@yogisportsgwalior"
    },
    {
      title: "Cricket Training Tips by Yogendra",
      thumbnail: "images/products/cricket-bats-display.png",
      url: "https://www.youtube.com/@yogisportsgwalior"
    }
  ]
};

/* ---------- Helper: WhatsApp URL builder ---------- */
function getWhatsAppUrl(customMessage) {
  const phone = SITE_CONFIG.store.phone.replace('+', '');
  const msg = customMessage || SITE_CONFIG.store.whatsappMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
