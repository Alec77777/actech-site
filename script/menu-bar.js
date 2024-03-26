const menuBars = document.querySelectorAll(".menu-bar");

if (menuBars.length !== 0) {
  document.documentElement.style.setProperty(
    "--menu-bar-width",
    getComputedStyle(menuBars[0]).width
  );

  menuBars.forEach((menuBar) => {
    menuBar.addEventListener("click", () => {
      menuBar.classList.toggle("open");
    });
  });
}
