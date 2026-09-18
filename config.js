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
  }
};

/* ---------- Helper: WhatsApp URL builder ---------- */
function getWhatsAppUrl(customMessage) {
  const phone = SITE_CONFIG.store.phone.replace('+', '');
  const msg = customMessage || SITE_CONFIG.store.whatsappMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
