
const icons = [
  { name: "facebook", url: "https://web.facebook.com/hanane.soumai.khettar19", class: "bi bi-facebook", color: "#3b5998" },
  { name: "linkedin", url: "https://www.linkedin.com/in/hanane-soumia-khettar-34a749182/", class: "bi bi-linkedin", color: "#0077b5" },
  { name: "instagram", url: "https://www.instagram.com/hanane_soumia/", class: "bi bi-instagram", color: "#E1306C" },
  { name: "tiktok", url: "https://www.tiktok.com/@hanane.soumia.khe", class: "bi bi-tiktok", color: "#000000" }
];


const container = document.getElementById('sIs');
const container1 = document.getElementById('sIs1');
populateSocialMediaIcons(icons, container);
populateSocialMediaIcons(icons, container1);

function populateSocialMediaIcons(icons, container) {
  if (!container) return; 
  icons.forEach(icon => {
    const link = document.createElement('a');
    link.href = icon.url;
    link.target = "_blank";
    link.style.margin = "8px";
    link.style.color = icon.color;
    link.innerHTML = `<i class="${icon.class}" style="font-size: 20px;"></i>`;
    container.appendChild(link);
  });
}


function openModal() {
  document.getElementById("socialModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("socialModal").style.display = "none";
}


const buttonMap = {
  home: 'index.html',
  resume: 'resumePage.html',
  project: 'projectPage.html',
  service: 'servicePage.html',
  resumeButton: 'resumePage.html',
  projectButton: 'projectPage.html',
  serviceButton: 'servicePage.html',
};

document.addEventListener('click', function (event) {
  const page = buttonMap[event.target.id];
  if (page) {
    openNewWindow(page);
  }
});

function openNewWindow(page) {
  window.location.href = page;
}


function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.querySelector('.drawer-overlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('show');
}


let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  Array.from(slides).forEach(slide => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}
