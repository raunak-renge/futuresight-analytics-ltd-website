/**
 * Futuresight Analytics Limited - Main JavaScript
 * Author: Futuresight Analytics Limited
 * Version: 2.0.0 - Enhanced with Advanced Interactive Features
 */

// ==================== Page Loading Animation ====================

window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 800);
    }
});

// ==================== Scroll Progress Indicator ====================

window.addEventListener('scroll', function() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

// ==================== Header Scroll Effect ====================

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==================== Mobile Menu Toggle ====================

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const isOpen = navLinks.classList.toggle('active');
    if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', isOpen.toString());
    }
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
            const toggleButton = document.querySelector('.mobile-menu-toggle');
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Optional: Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinksElement = document.getElementById('navLinks');
        
        if (!nav.contains(event.target) && navLinksElement.classList.contains('active')) {
            navLinksElement.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
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
 * Form validation and submission handling for Formspree
// ==================== Section Scroll Animations ====================

/**
 * Animate sections when they come into view
 */
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// ==================== Card Animations ====================

/**
 * Add staggered fade-in animation to cards
 */
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.service-card, .case-card, .testimonial, .step, .value-item, .tech-category');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(element);
    });
});

// ==================== Animated Counter ====================

/**
 * Animate numbers counting up
 */
function animateCounter(element, target, suffix = '+', duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count, 10) || 0;
                    const suffix = entry.target.dataset.suffix ?? '+';
                    animateCounter(entry.target, target, suffix);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => statsObserver.observe(stat));
    }
});

// ==================== Typing Effect ====================

/**
 * Typing animation for hero headline
 */
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }
        
        setTimeout(type, 500);
    }
});

// ==================== Back to Top & Floating CTA ====================

/**
 * Show/hide back to top button and floating CTA
 */
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    const floatingCTA = document.querySelector('.floating-cta');
    
    window.addEventListener('scroll', () => {
        // Back to top button
        if (backToTopButton) {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
        
        // Floating CTA - show after scrolling past hero
        if (floatingCTA) {
            const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
            const contactSection = document.querySelector('#contact');
            const contactOffset = contactSection?.offsetTop || document.body.scrollHeight;
            
            // Show after hero, hide when reaching contact section
            if (window.scrollY > heroHeight && window.scrollY < (contactOffset - 200)) {
                floatingCTA.classList.add('visible');
            } else {
                floatingCTA.classList.remove('visible');
            }
        }
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ==================== Parallax Effect ====================

/**
 * Subtle parallax effect on hero section
 */
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled * 0.001);
    }
});

// ==================== Lazy Loading Images ====================

/**
 * Lazy load images for better performance
 */
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ==================== Enhanced Form Validation & Submission ====================

/**
 * Advanced email validation and form handling
 */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    
    // Check if form was just submitted (redirect from Formspree)
    if (window.location.hash === '#form-submitted') {
        successMsg.classList.add('visible');
        setTimeout(() => {
            // Scroll to success message
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Clear hash after 3 seconds and hide message after 10 seconds
            setTimeout(() => {
                window.history.replaceState(null, null, ' ');
            }, 3000);
            setTimeout(() => {
                successMsg.classList.remove('visible');
            }, 10000);
        }, 300);
    }
    
    // Real-time email validation
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail(this);
        });
        
        emailInput.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateEmail(this);
            }
        });
    }
    
    // Validate email format
    function validateEmail(input) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const value = input.value.trim();
        
        if (value === '') {
            input.classList.remove('valid', 'invalid');
            return false;
        }
        
        if (emailRegex.test(value)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorMsg.classList.remove('visible');
            return true;
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            return false;
        }
    }
    
    // Form submission handling
    if (form) {
        form.addEventListener('submit', function(e) {
            // Clear previous messages
            errorMsg.classList.remove('visible');
            successMsg.classList.remove('visible');
            
            // Validate email before submission
            if (!validateEmail(emailInput)) {
                e.preventDefault();
                errorMsg.classList.add('visible');
                emailInput.focus();
                return false;
            }
            
            // Validate name
            if (nameInput.value.trim().length < 2) {
                e.preventDefault();
                errorMsg.textContent = '⚠️ Please enter your full name.';
                errorMsg.classList.add('visible');
                nameInput.focus();
                return false;
            }
            
            // Validate message
            if (messageInput.value.trim().length < 10) {
                e.preventDefault();
                errorMsg.textContent = '⚠️ Please provide more details about your data challenges.';
                errorMsg.classList.add('visible');
                messageInput.focus();
                return false;
            }
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Form will submit normally to Formspree
            // Formspree will redirect back with #form-submitted hash
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
