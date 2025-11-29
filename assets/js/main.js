/**
 * Futuresight Analytics Limited - Main JavaScript
 * Author: Futuresight Analytics Limited
 * Version: 1.0.0
 */

// ==================== Mobile Menu Toggle ====================

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ==================== Navigation Event Listeners ====================

/**
 * Initialize navigation functionality
 * Closes mobile menu when a navigation link is clicked
 */
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinksElement = document.getElementById('navLinks');
            navLinksElement.classList.remove('active');
        });
    });
    
    // Optional: Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinksElement = document.getElementById('navLinks');
        
        if (!nav.contains(event.target) && navLinksElement.classList.contains('active')) {
            navLinksElement.classList.remove('active');
        }
    });
});

// ==================== Smooth Scroll Enhancement ====================

/**
 * Enhanced smooth scrolling for anchor links
 * Accounts for fixed header offset
 */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== Form Validation ====================

/**
 * Basic form validation for contact form
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // If validation passes, show success message
            // In production, this would submit to a backend
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// ==================== Scroll Animations (Optional) ====================

/**
 * Add fade-in animation to elements when they come into view
 */
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards, case cards, and other elements
    const animatedElements = document.querySelectorAll('.service-card, .case-card, .testimonial, .step, .value-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});
