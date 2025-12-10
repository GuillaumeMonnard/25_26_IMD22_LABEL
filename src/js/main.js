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
