let darkMode = localStorage.getItem("checkbox");
const toggleMode = document.querySelector("#checkbox");

//check if dark is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
  //1. add update darkMode to the body
  document.body.classList.add("darkMode");
  //2. update darkmode in the localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
