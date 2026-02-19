const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
//==================navbar scroll========================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//==================section fade in========================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  section.classList.add("fade-section");
  observer.observe(section);
});

// =====================navbar link highlight====================
const navLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  allSections.forEach(section => {

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const id = section.getAttribute("id");

    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });

    }

  });

});


