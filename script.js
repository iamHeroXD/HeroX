// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission and success popup
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then(response => {
      if (response.ok) {
        // Create or reuse the notification element
        let notification = document.querySelector(".notification");
        if (!notification) {
          notification = document.createElement("div");
          notification.className = "notification";
          document.querySelector("#contact").appendChild(notification);
        }

        // Show and style the message
        notification.textContent = "✅ Message sent successfully!";
        notification.classList.add("show");

        // Hide after 4 seconds
        setTimeout(() => {
          notification.classList.remove("show");
        }, 4000);

        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("There was an error submitting the form.");
    });
});

// Reveal animations on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
