
const envelope = document.getElementById("envelope");
const letter = document.getElementById("birthdayLetter");
const instruction = document.getElementById("instruction");
const memoryPhoto = document.getElementById("memoryPhoto");


let isOpen = false;

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 22 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

envelope.addEventListener("click", () => {
  if (isOpen) return;

  isOpen = true;

  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");

  instruction.textContent = "Your little surprise is here! ♡";

  // Let the envelope open before revealing the full letter.
  window.setTimeout(() => {
  memoryPhoto.hidden = false;
  letter.hidden = false;

  memoryPhoto.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}, 850);

  // Release a shower of floating hearts.
  for (let i = 0; i < 24; i++) {
    window.setTimeout(createHeart, i * 100);
  }
});
