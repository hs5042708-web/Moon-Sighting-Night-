const spotlight = document.getElementById("spotlight");
const moon = document.getElementById("moon");
const message = document.getElementById("message");

// Mouse movement logic
document.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", e.clientX + "px");
  spotlight.style.setProperty("--y", e.clientY + "px");

  const rect = moon.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2),
  );

  if (distance < 100) {
    moon.classList.add("revealed");
  } else {
    moon.classList.remove("revealed");
  }
});

// Random position on load
window.onload = () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  moon.style.left = x + "px";
  moon.style.top = y + "px";
};

// Final Found Moon function
function foundMoon() {
  moon.style.display = "none";
  spotlight.style.background = "none";
  spotlight.style.zIndex = "-1";
  message.style.display = "block";
  document.body.style.cursor = "default";
}
