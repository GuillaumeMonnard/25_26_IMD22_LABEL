/* =========================================================
   HOVER IMAGE — LISTE ARTISTES
========================================================= */

import gal from "../assets/cursor/gal.jpg";
import jeuneMort from "../assets/cursor/jeune-mort.jpg";
import mLeMaudit from "../assets/cursor/m-le-maudit.jpg";
import sheldon from "../assets/cursor/sheldon.jpg";
import shien from "../assets/cursor/shien.jpg";
import sopico from "../assets/cursor/sopico.jpg";
import whiteCorbeau from "../assets/cursor/white-corbeau.jpg";
import yungCoeur from "../assets/cursor/yung-coeur.jpg";
import zinee from "../assets/cursor/zinee.jpg";

const imageMap = {
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

const artistLinks = document.querySelectorAll(".artist-link");
const bgHover = document.querySelector(".bg-hover");

if (artistLinks.length && bgHover) {
  artistLinks.forEach((link) => {
    const nameEl = link.querySelector(".artist-name");
    const name = nameEl?.textContent.trim();

    if (!name || !imageMap[name]) return;

    link.addEventListener("mouseenter", () => {
      bgHover.style.backgroundImage = `url("${imageMap[name]}")`;
      bgHover.style.opacity = "1";
    });

    link.addEventListener("mouseleave", () => {
      bgHover.style.opacity = "0";
    });
  });
}

const scrollContent = document.querySelector(".artist-content");

scrollContent.addEventListener("wheel", (e) => {
  e.preventDefault(); //empêche le scroll vertical
  const scrollAmount = e.deltaY * 15;

  scrollContent.scrollLeft += scrollAmount;
});
