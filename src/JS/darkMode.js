function displayDark() {
  const toggleBtn = document.getElementById("toggleBtn");
  const theme = document.getElementById("theme");
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    theme.classList.add("dark-mode-theme");
    toggleBtn.classList.remove("darkToggleThemeBtn");
    localStorage.setItem("darkMode", "enable");
  };

  const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    toggleBtn.classList.add("darkToggleThemeBtn");
    localStorage.setItem("darkMode", "disable");
  };

  if (darkMode === "enable") {
    enableDarkMode();
  }

  toggleBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enable") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

module.exports = displayDark()
    

