// const container = document.querySelector(".artists-container");
// const thumb = document.querySelector(".custom-thumb");

// function updateThumb() {
//   const scrollHeight = container.scrollHeight - container.clientHeight;
//   const scrollTop = container.scrollTop;
//   const maxThumbTop = container.clientHeight - thumb.offsetHeight;
//   const thumbTop = (scrollTop / scrollHeight) * maxThumbTop;
//   thumb.style.top = `${thumbTop}px`;
// }

// // Mise à jour au scroll
// container.addEventListener("scroll", updateThumb);
// // Mise à jour au load et resize
// window.addEventListener("load", updateThumb);
// window.addEventListener("resize", updateThumb);

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

// Dictionnaire des images de curseur par artiste
const artistCursors = {
  Gal: "assets/img/cursor/gal.png",
  "Jeune Mort": "assets/img/cursor/jeune-mort.png",
  "M le maudit": "assets/img/cursor/m-le-maudit.png",
  Sheldon: "assets/img/cursor/sheldon.png",
  Shien: "assets/img/cursor/shien.png",
  Sopico: "assets/img/cursor/sopico.png",
  "White Corbeau": "assets/img/cursor/white-corbeau.png",
  "Yung Coeur": "assets/img/cursor/yung-coeur.png",
  Zinee: "assets/img/cursor/zinee.png",
};

// Curseur par défaut
const defaultCursor = "assets/cursor/red-cursor.svg";

// Création du curseur custom
const customCursor = document.createElement("div");
customCursor.style.position = "fixed";
customCursor.style.width = "50px";
customCursor.style.height = "50px";
customCursor.style.pointerEvents = "none";
customCursor.style.background = `url(${defaultCursor}) no-repeat center center`;
customCursor.style.backgroundSize = "contain";
customCursor.style.zIndex = "9999";
customCursor.style.transform = "translate(-50%, -50%)";
customCursor.style.transition = "background-image 0.2s ease";
document.body.appendChild(customCursor);

// Suivi de la souris
document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// Gestion du hover sur les artistes
document.querySelectorAll(".artist-link").forEach((link) => {
  const artistName = link.querySelector(".artist-name").textContent.trim();

  link.addEventListener("mouseenter", () => {
    if (artistCursors[artistName]) {
      customCursor.style.background = `url(${artistCursors[artistName]}) no-repeat center center`;
      customCursor.style.backgroundSize = "contain";
    }
  });

  link.addEventListener("mouseleave", () => {
    customCursor.style.background = `url(${defaultCursor}) no-repeat center center`;
    customCursor.style.backgroundSize = "contain";
  });
});
