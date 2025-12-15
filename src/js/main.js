const container = document.querySelector(".artists-container");

let currentScroll = container.scrollTop;
let targetScroll = currentScroll;
const ease = 0.08; // plus petit = plus lent / smooth

// Scroll avec la molette
container.addEventListener("wheel", (e) => {
  e.preventDefault();
  targetScroll += e.deltaY;
  targetScroll = Math.max(
    0,
    Math.min(targetScroll, container.scrollHeight - container.clientHeight)
  );
});

// Animation de la position du scroll et du thumb
function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * ease;
  container.scrollTop = currentScroll;

  // update custom thumb
  const thumb = document.querySelector(".custom-thumb");
  const maxThumbTop = container.clientHeight - thumb.offsetHeight;
  const thumbTop =
    (currentScroll / (container.scrollHeight - container.clientHeight)) *
    maxThumbTop;
  thumb.style.top = `${thumbTop}px`;

  requestAnimationFrame(smoothScroll);
}

smoothScroll();

import gal from "../assets/cursor/gal.jpg";
import jeuneMort from "../assets/cursor/jeune-mort.jpg";
import mLeMaudit from "../assets/cursor/m-le-maudit.jpg";
import sheldon from "../assets/cursor/sheldon.jpg";
import shien from "../assets/cursor/shien.jpg";
import sopico from "../assets/cursor/sopico.jpg";
import whiteCorbeau from "../assets/cursor/white-corbeau.jpg";
import yungCoeur from "../assets/cursor/yung-coeur.jpg";
import zinee from "../assets/cursor/zinee.jpg";

const map = {
  Gal: gal,
  "Jeune Mort": jeuneMort,
  "M le maudit": mLeMaudit,
  Sheldon: sheldon,
  Shien: shien,
  Sopico: sopico,
  "White Corbeau": whiteCorbeau,
  "Yung Coeur": yungCoeur,
  Zinee: zinee,
};

const artists = document.querySelectorAll(".artist-link");
const bgHover = document.querySelector(".bg-hover");

artists.forEach((link) => {
  const nameEl = link.querySelector(".artist-name");
  const name = nameEl ? nameEl.textContent.trim() : null;
  if (!name || !map[name]) return;

  link.addEventListener("mouseenter", () => {
    // Mettre l'image dans bg-hover
    bgHover.style.backgroundImage = `url("${map[name]}")`;
    bgHover.style.opacity = "1";
  });

  link.addEventListener("mouseleave", () => {
    bgHover.style.opacity = "0";
  });
});
