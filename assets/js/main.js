// Simple JavaScript for portfolio site
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality here
    console.log('Portfolio site loaded');
    
    // Simple contact form handling (you can enhance this later)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo - implement actual form handling)');
        });
    }
});
