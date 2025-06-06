// Project hover functionality
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
    });
  // Project data
  const projects = {
    1: {
      title: "TuneGrab",
      description:
        "TuneGrab is a Python application that allows users to download Spotify tracks and playlists as MP3 files using the Spotify API and yt-dlp. With a sleek, dark-themed GUI built with CustomTkinter, it offers an intuitive way to search, download, and manage your music collection.",
      image: "Assets/tunegrab-scrn.png",
      overview: "Python Desktop Application Development",
      link: "https://github.com/yourusername/tunegrab", // Add your real link here
    },
    2: {
      title: "Temporary Email Generator",
      description:
        "A lightweight, frontend-based temporary email address generator and inbox viewer built with HTML, CSS, and vanilla JavaScript. Perfect for quick signups and testing without using your real email.",
      image: "Assets/tempmail-scrn.png",
      overview: "Frontend utility and productivity tool",
      link: "https://github.com/yourusername/tempmail", // Add your real link here
    },
    3: {
      title: "Workout App",
      description:
        "A cross-platform mobile app designed to help users track workouts, set fitness goals, and monitor progress. Features include exercise logging, progress charts, and personalized workout plans.",
      image: "Assets/in-work.png", // Add your local image here
      overview: "Cross-platform mobile development",
      link: "#", // Add your real link here
    },
    /*4: {
                        title: "AI-Powered Chatbot",
                        description: "A smart chatbot leveraging AI and machine learning to provide automated customer support and natural language conversations. Built with Python and TensorFlow, and integrated with popular messaging platforms.",
                        image: "Assests/project4-image.png", // Add your local image here
                        overview: "Artificial Intelligence and Machine Learning"
        },
        5: {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing modern design principles and smooth animations. Built with HTML5, CSS3, and JavaScript, featuring dark mode, smooth scrolling, and optimized performance.",
            image: "Assests/project5-image.png", // Add your local image here
            overview: "Frontend development and UI/UX design"
        }*/
  };

  // Get elements
  const projectLinks = document.querySelectorAll(
    ".projects-heading ul li a[data-project]"
  );
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const projectImage = document.getElementById("project-image");
  const overview = document.getElementById("overview");
  const projectLink = document.getElementById("project-link");

  // Add hover event listeners
  projectLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const projectId = this.getAttribute("data-project");
      const project = projects[projectId];

      if (project) {
        // Update content with smooth transition
        projectTitle.style.opacity = "0";
        projectDescription.style.opacity = "0";
        projectImage.style.opacity = "0";
        overview.style.opacity = "0";
        projectLink.style.opacity = "0";
        setTimeout(() => {
          projectTitle.textContent = project.title;
          projectDescription.textContent = project.description;
          projectImage.src = project.image;
          projectImage.alt = project.title;
          overview.textContent = project.overview;
          projectLink.href = project.link || "#";
          projectLink.textContent = project.link ? "View Project" : "No Link Available";
          projectLink.style.pointerEvents = project.link ? "auto" : "none";
          // Add error handling for images
          projectImage.onerror = function () {
            this.src =
              "https://via.placeholder.com/700x400/333/fff?text=Image+Not+Found";
          };
          projectTitle.style.opacity = "1";
          projectDescription.style.opacity = "1";
          projectImage.style.opacity = "1";
          overview.style.opacity = "1";
          projectLink.style.opacity = "1";
        }, 150);
      }
    });
  });

  // Set default project (Project 1) on page load
  if (
    projects[1] &&
    projectTitle &&
    projectDescription &&
    projectImage &&
    overview &&
    projectLink
  ) {
    projectTitle.textContent = projects[1].title;
    projectDescription.textContent = projects[1].description;
    projectImage.src = projects[1].image;
    projectImage.alt = projects[1].title;
    overview.textContent = projects[1].overview;
    projectLink.href = projects[1].link || "#";
    projectLink.textContent = projects[1].link ? "View Project" : "No Link Available";
    projectLink.style.pointerEvents = projects[1].link ? "auto" : "none";
  }

  // Blur effect on project links only when hovering over project card
  const projectCard = document.querySelector('.project-headding');
  const projectHeadingLinks = document.querySelectorAll('.projects-heading ul li a');

  if (projectCard && projectHeadingLinks.length > 0) {
    projectCard.addEventListener('mouseenter', function () {
      projectHeadingLinks.forEach(link => {
        link.style.filter = 'blur(2.5px)';
        link.style.color = 'grey';
      });
    });
    projectCard.addEventListener('mouseleave', function () {
      projectHeadingLinks.forEach(link => {
        link.style.filter = 'blur(0)';
        link.style.color = 'white';
      });
    });
  }

  // Blur other project links when hovering over a specific link in the projects heading
  projectHeadingLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      projectHeadingLinks.forEach(otherLink => {
        if (otherLink !== this) {
          otherLink.style.filter = 'blur(2.5px)';
          otherLink.style.color = 'grey';
        } else {
          otherLink.style.filter = 'blur(0)';
          otherLink.style.color = 'white';
        }
      });
    });
    link.addEventListener('mouseleave', function () {
      projectHeadingLinks.forEach(otherLink => {
        otherLink.style.filter = 'blur(0)';
        otherLink.style.color = 'white';
      });
    });
  });
});


