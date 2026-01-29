/* Floating hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);

/* Fade-in on scroll */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));

/* Heart cursor trail (desktop) */
let lastHeartTime = 0;

document.addEventListener("mousemove", e => {
  const now = Date.now();
  if (now - lastHeartTime < 40) return;
  lastHeartTime = now;

  spawnHeart(e.pageX, e.pageY);
});

/* Heart touch trail (mobile) */
document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  if (!touch) return;

  spawnHeart(touch.pageX, touch.pageY);
});

/* Shared heart function */
function spawnHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerHTML = "❤";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
}
