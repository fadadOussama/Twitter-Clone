let theme = document.getElementById("theme");
let btn = document.getElementById("btn");
let icon = document.getElementById("icon");

btn.addEventListener("click", () => {
  theme.classList.toggle("dark");
  if (icon.classList.contains("bxs-sun")) {
    icon.classList.replace("bxs-sun", "bxs-moon");
  } else {
    icon.classList.replace("bxs-moon", "bxs-sun");
  }
});
