/* ============================================
   Brewtopia - Mobile Interactions
   Modern, elegant JavaScript
   ============================================ */

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scroll for anchor links (with navbar offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar behavior on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(62, 39, 35, 0.15)';
        navbar.style.background = 'rgba(250, 247, 240, 1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(62, 39, 35, 0.08)';
        navbar.style.background = 'rgba(250, 247, 240, 0.98)';
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.seasonal-card, .drink-card, .feature, .location-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Seasonal card rotation highlight (optional interactive feature)
const seasonalCards = document.querySelectorAll('.seasonal-card');
seasonalCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        seasonalCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Console branding
console.log('%c☕ Brewtopia', 'color: #D4AF37; font-size: 32px; font-weight: bold; font-family: Georgia, serif;');
console.log('%cCraft coffee with seasonal artistry', 'color: #5D4037; font-size: 16px; font-family: -apple-system, sans-serif;');
console.log('%cMobile coffee trailer • East Tennessee', 'color: #9CAF88; font-size: 14px;');
