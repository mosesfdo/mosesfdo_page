document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only handle internal links
        if (href && href.endsWith('.html')) {
          e.preventDefault();
          document.body.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          document.body.style.opacity = '0';
          setTimeout(() => {
            window.location.href = href;
          }, 600);
        }
      });
    });

    window.addEventListener('pageshow', function() {
      document.body.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      document.body.style.opacity = '1';
    });});