// Splash Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    // Initially hide the main content
    if (main) main.style.opacity = '0';
    if (header) header.style.opacity = '0';
    
    // After splash pop animation completes, fade out splash and show content
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        // Show main content with fade in
        if (header) {
            header.style.transition = 'opacity 0.5s ease-in';
            header.style.opacity = '1';
        }
        if (main) {
            main.style.transition = 'opacity 0.5s ease-in';
            main.style.opacity = '1';
        }
        
        // Remove splash screen completely after fade out
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 800);
        
    }, 2000); // Wait for pop animation to complete

    // Smooth page transition for nav links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only handle internal links
        if (href && href.endsWith('.html')) {
          e.preventDefault();
          document.body.style.opacity = '0';
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        }
      });
    });

    window.addEventListener('pageshow', function() {
      document.body.style.transition = 'opacity 0.3s';
      document.body.style.opacity = '1';
    });
});