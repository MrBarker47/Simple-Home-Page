let darkMode = localStorage.getItem("checkbox");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode, enabled");
};
