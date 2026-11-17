const INSTAGRAM_URL = "https://www.instagram.com/metas.vm?vrfl=Z3YxazBlendyZTBp";

// Pone el link de Instagram en todos los botones y textos que lo usan
document.querySelectorAll("[data-instagram]").forEach((el) => {
  el.href = INSTAGRAM_URL;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});
document.querySelectorAll(".nav-cta").forEach((el) => {
  el.href = INSTAGRAM_URL;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();


const topbar = document.getElementById("topbar");
const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const abierto = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", abierto);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);


document.querySelectorAll(".slot").forEach((slot) => {
  const img = slot.querySelector("img");
  const marcarVacio = () => slot.classList.add("sin-imagen");
  img.addEventListener("error", marcarVacio);
  if (img.complete && img.naturalWidth === 0) marcarVacio();
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const cerrar = () => { lightbox.hidden = true; lightboxImg.src = ""; };

document.querySelectorAll(".slot").forEach((slot) => {
  slot.addEventListener("click", () => {
    if (slot.classList.contains("sin-imagen")) return;
    const img = slot.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
  });
});
lightbox.addEventListener("click", cerrar);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });