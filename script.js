// Navigation Background Transition on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled');
        // Let's actually keep the bg transparent at very top, but with dark bg it's okay to add background shortly
        if(window.scrollY < 10) {
            navbar.classList.remove('scrolled');
        }
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated if you only want it once
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select all elements that need to animate
const animatableElements = document.querySelectorAll('.fade-in-up, .fade-in');

animatableElements.forEach(el => {
    observer.observe(el);
});

// Form Submission handling (Mock)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        const defaultText = btn.innerHTML;
        
        btn.innerHTML = '<span>Sending...</span> <i class="ph ph-spinner ph-spin"></i>';
        
        // Mock API call delay
        setTimeout(() => {
            btn.innerHTML = '<span>Message Sent!</span> <i class="ph ph-check-circle"></i>';
            btn.style.background = '#22c55e'; // green
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = defaultText;
                btn.style.background = ''; // reset back to css rules
            }, 3000);
            
        }, 1500);
    });
}
