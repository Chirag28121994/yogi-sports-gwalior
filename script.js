/* ============================================
   Yogi Sports Gwalior — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  bindConfig();
  renderGallery();
  renderVideos();
  initLoadingScreen();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  renderProducts('all');
  initFilterTabs();
  initLightbox();
  initBackToTop();
  initAnimatedCounters();
  initTestimonialAutoScroll();
  initParallaxHero();
});

/* ---------- Config Binding ---------- */
/* Reads SITE_CONFIG from config.js and populates all data-bind elements */
function bindConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;
  const s = SITE_CONFIG.store;
  const d = SITE_CONFIG.developer;
  const m = SITE_CONFIG.map;

  const bindings = {
    // Contact section
    'store-address':       { html: s.address },
    'store-phone-link':    { href: `tel:${s.phone}`, text: s.phoneDisplay },
    'store-email-link':    { href: `mailto:${s.email}`, text: s.email },
    'store-hours':         { html: s.hours },
    'store-instagram-btn': { href: s.instagram },
    'store-youtube-btn':   { href: s.youtube },

    // Footer social
    'footer-instagram':    { href: s.instagram },
    'footer-youtube':      { href: s.youtube },
    'footer-phone':        { href: `tel:${s.phone}` },
    'footer-whatsapp':     { href: getWhatsAppUrl() },

    // Video modal
    'video-modal-yt':      { href: s.youtube },

    // WhatsApp float
    'whatsapp-float':      { href: getWhatsAppUrl() },

    // Google Maps
    'map-embed':           { attr: { src: m.embedUrl } },
  };

  for (const [key, opts] of Object.entries(bindings)) {
    const el = document.querySelector(`[data-bind="${key}"]`);
    if (!el) continue;
    if (opts.href) el.href = opts.href;
    if (opts.text) el.textContent = opts.text;
    if (opts.html) el.innerHTML = opts.html;
    if (opts.attr) {
      for (const [a, v] of Object.entries(opts.attr)) el.setAttribute(a, v);
    }
  }

  // Developer links (dynamic children)
  const devLinksEl = document.querySelector('[data-bind="dev-links"]');
  if (devLinksEl) {
    devLinksEl.innerHTML = `
      <a href="mailto:${d.email}">✉️ ${d.email}</a>
      <a href="tel:${d.phone}">📞 ${d.phoneDisplay}</a>
      <a href="${d.linkedin}" target="_blank">💼 LinkedIn</a>
      <a href="${d.github}" target="_blank">💻 GitHub</a>
    `;
  }

  // Yogi Photo binding
  if (SITE_CONFIG.yogi && SITE_CONFIG.yogi.photo) {
    const yogiPhotoEl = document.querySelector('[data-bind="yogi-photo"]');
    if (yogiPhotoEl) yogiPhotoEl.src = SITE_CONFIG.yogi.photo;
  }
}

/* ---------- Loading Screen ---------- */
function initLoadingScreen() {
  const screen = document.getElementById('loadingScreen');
  if (!screen) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      screen.classList.add('hidden');
      setTimeout(() => screen.remove(), 600);
    }, 800);
  });

  // Fallback: remove after 3s max
  setTimeout(() => {
    screen.classList.add('hidden');
    setTimeout(() => screen.remove(), 600);
  }, 3000);
}

/* ---------- Navbar Scroll Effect ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('mobileMenuBtn').classList.remove('active');
      }
    });
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('active');
  });

  // Close on clicking outside
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      btn.classList.remove('active');
      links.classList.remove('active');
    }
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* ---------- Dynamic Photo Gallery Rendering ---------- */
let galleryImages = [];
let currentLightboxIndex = 0;

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.gallery) return;

  grid.innerHTML = '';
  galleryImages = [];

  SITE_CONFIG.gallery.forEach((item, index) => {
    galleryImages.push(item.image);

    const card = document.createElement('div');
    card.className = `gallery-item animate-on-scroll delay-${(index % 4) + 1}`;
    card.setAttribute('onclick', `openLightbox(${index})`);

    const caption = item.caption || 'Yogi Sports Gwalior';
    card.innerHTML = `
      <img src="${item.image}" alt="${caption}" loading="lazy" onerror="this.onerror=null; this.src='images/yogendra/shop-interior.jpg';">
      <div class="overlay"><span>${caption}</span></div>
    `;

    grid.appendChild(card);
  });
}

/* ---------- Dynamic Video Rendering ---------- */
function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid || typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.videos) return;

  grid.innerHTML = '';

  SITE_CONFIG.videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = `video-card animate-on-scroll delay-${(index % 2) + 1}`;
    const videoUrl = video.url || (SITE_CONFIG.store && SITE_CONFIG.store.youtube) || 'https://www.youtube.com/@yogisportsgwalior';
    card.setAttribute('onclick', `openVideoModal('${videoUrl}')`);

    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" onerror="this.onerror=null; this.src='images/yogendra/shop-interior.jpg';">
      <div class="play-btn">▶</div>
      <div class="video-title">${video.title}</div>
    `;

    grid.appendChild(card);
  });
}

/* ---------- Price & Fallback Helpers ---------- */
function formatProductPrice(price) {
  if (price === undefined || price === null) return '₹0';
  if (typeof price === 'number') {
    return '₹' + price.toLocaleString('en-IN');
  }
  const str = String(price).trim();
  if (str.startsWith('₹') || str.startsWith('Rs') || str.startsWith('INR')) {
    return str;
  }
  const num = Number(str.replace(/[^0-9.]/g, ''));
  if (!isNaN(num) && num > 0) {
    return '₹' + num.toLocaleString('en-IN');
  }
  return str || '₹0';
}

function getProductFallbackSvg(sport) {
  const emoji = getSportEmoji(sport);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect fill="#0a0a2e" width="300" height="300"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="64">${emoji}</text><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#8888aa">Photo Coming Soon</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------- Products Rendering ---------- */
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const currentFilter = (filter || 'all').toLowerCase();
  const filtered = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.sport && p.sport.toLowerCase() === currentFilter);

  grid.innerHTML = '';

  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = `product-card animate-on-scroll delay-${(index % 4) + 1}`;
    card.setAttribute('data-sport', product.sport);

    const formattedPrice = formatProductPrice(product.price);
    const fallbackSrc = getProductFallbackSvg(product.sport);
    const waInquiryMsg = `Hi! I'm interested in buying ${product.name} (${formattedPrice}) from Yogi Sports Gwalior. Is it available?`;
    const waUrl = typeof getWhatsAppUrl === 'function' 
      ? getWhatsAppUrl(waInquiryMsg)
      : `https://wa.me/916263549706?text=${encodeURIComponent(waInquiryMsg)}`;

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSrc}';">
        ${product.isNew ? '<span class="new-badge">New</span>' : ''}
        <span class="sport-tag">${getSportEmoji(product.sport)} ${capitalize(product.sport)}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="brand">${product.brand || 'Yogi Sports'}</p>
        <div class="product-bottom-row">
          <div class="price">${formattedPrice}</div>
          <a href="${waUrl}" target="_blank" class="product-wa-btn" aria-label="Inquire about ${product.name} on WhatsApp">
            💬 Inquire
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-observe new elements for scroll animation
  initScrollAnimations();
}

function getSportEmoji(sport) {
  const emojis = {
    cricket: '🏏',
    football: '⚽',
    badminton: '🏸',
    hockey: '🏑',
    tennis: '🎾',
    kabaddi: '🤼',
    fitness: '💪'
  };
  return emojis[sport] || '🏆';
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ---------- Filter Tabs ---------- */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter products
      const filter = tab.getAttribute('data-filter');
      renderProducts(filter);
    });
  });
}

/* ---------- Photo Gallery Lightbox ---------- */
function initLightbox() {
  // Synchronize galleryImages if not already populated
  if (galleryImages.length === 0) {
    const items = document.querySelectorAll('.gallery-item img');
    galleryImages = Array.from(items).map(img => img.src);
  }

  // Close on background click
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  // Sync if needed
  if (galleryImages.length === 0) {
    const items = document.querySelectorAll('.gallery-item img');
    galleryImages = Array.from(items).map(img => img.src);
  }

  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (galleryImages[index]) {
    img.src = galleryImages[index];
  }
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  if (galleryImages.length === 0) return;
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = galleryImages.length - 1;
  if (currentLightboxIndex >= galleryImages.length) currentLightboxIndex = 0;

  const img = document.getElementById('lightboxImg');
  if (img && galleryImages[currentLightboxIndex]) {
    img.src = galleryImages[currentLightboxIndex];
  }
}

/* ---------- Video Modal ---------- */
function openVideoModal(youtubeUrl) {
  const modal = document.getElementById('videoModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close video modal on background click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('videoModal');
  if (e.target === modal) {
    closeVideoModal();
  }
});

// Close video modal on Escape
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('videoModal');
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeVideoModal();
  }
});

/* ---------- Developer Credit Card Toggle (Mobile) ---------- */
function toggleDevCard() {
  const credit = document.getElementById('devCredit');
  credit.classList.toggle('active');
}

// Close dev card on outside click
document.addEventListener('click', (e) => {
  const credit = document.getElementById('devCredit');
  if (credit && !credit.contains(e.target)) {
    credit.classList.remove('active');
  }
});

/* ---------- Contact Form Handler ---------- */
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value;
  const phone = document.getElementById('contactPhone').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  // Show a success message
  const btn = e.target.querySelector('.form-submit');
  const originalText = btn.textContent;
  btn.textContent = '✅ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #00A86B, #00D084)';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

/* ---------- WhatsApp Integration ---------- */
function sendViaWhatsApp() {
  const name = document.getElementById('contactName').value || '';
  const phone = document.getElementById('contactPhone').value || '';
  const message = document.getElementById('contactMessage').value || '';
  
  let waText = `Hi! I'm ${name || 'interested in sports equipment'}.`;
  if (phone) waText += ` My number: ${phone}.`;
  if (message) waText += ` ${message}`;
  
  window.open(getWhatsAppUrl(waText), '_blank');
}

/* ---------- Back to Top Button ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}

/* ---------- Animated Counters ---------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

/* ---------- Testimonial Auto-Scroll ---------- */
function initTestimonialAutoScroll() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;

  let scrollInterval;
  const scrollSpeed = 1;
  
  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      track.scrollLeft += scrollSpeed;
      
      // Reset to start when reaching end
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        track.scrollLeft = 0;
      }
    }, 30);
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Start auto-scrolling after a delay
  setTimeout(startAutoScroll, 2000);

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoScroll);
  track.addEventListener('mouseleave', startAutoScroll);

  // Pause on touch
  track.addEventListener('touchstart', stopAutoScroll);
  track.addEventListener('touchend', () => setTimeout(startAutoScroll, 3000));
}

/* ---------- Parallax Hero Icons ---------- */
function initParallaxHero() {
  const icons = document.querySelectorAll('.floating-icon');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    if (scrollY > window.innerHeight) return; // Don't compute when hero is offscreen
    
    icons.forEach((icon, i) => {
      const speed = 0.2 + (i * 0.05);
      icon.style.transform = `translateY(${scrollY * speed * -0.3}px)`;
    });
  });
}
