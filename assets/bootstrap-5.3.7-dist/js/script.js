// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Brand Scroller
const brandImages = [
  "assets/Picture/LogoBrand/acer.png",
  "assets/Picture/LogoBrand/amd.png",
  "assets/Picture/LogoBrand/aoc.png",
  "assets/Picture/LogoBrand/asrock.png",
  "assets/Picture/LogoBrand/asus.png",
  "assets/Picture/LogoBrand/corsair.png",
  "assets/Picture/LogoBrand/cuteboy.png",
  "assets/Picture/LogoBrand/dahua.png",
  "assets/Picture/LogoBrand/edifier.png",
  "assets/Picture/LogoBrand/ergonoz.png",
  "assets/Picture/LogoBrand/fantech.png",
  "assets/Picture/LogoBrand/gigabyte.png",
  "assets/Picture/LogoBrand/hp.png",
  "assets/Picture/LogoBrand/inno3d.png",
];

const track = document.getElementById("brandTrack");
const fullList = brandImages.concat(brandImages.slice(0, 8));

fullList.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "brand-logo";
  track.appendChild(img);
});

let index = 0;
function slideNext() {
  index++;
  if (index > brandImages.length) {
    track.style.transition = "none";
    track.style.transform = `translateX(0px)`;
    index = 1;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * 220}px)`;
      });
    });
  } else {
    track.style.transform = `translateX(-${index * 220}px)`;
  }

  setTimeout(slideNext, 2000);
}
setTimeout(slideNext, 2000);

// Countdown Timer
const deadline = new Date("2025-07-30T23:59:59").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const t = deadline - now;

  if (t < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "<span class='text-danger fw-bold'>หมดเวลาแล้ว</span>";
  } else {
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }
}, 1000);

// Cookie
document.addEventListener("DOMContentLoaded", function () {
  const consentBox = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookie");

  if (!localStorage.getItem("cookieAccepted")) {
    consentBox.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    consentBox.style.display = "none";
  });
});

