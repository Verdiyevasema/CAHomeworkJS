document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.getElementById("menu-icon");
  let closeIcon = document.getElementById("close-icon");
  let mainNav = document.getElementById("main-nav");
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    this.window.scrollY > 0
      ? header.classList.add("header-scroll")
      : header.classList.remove("header-scroll");
  });

  window.addEventListener("scroll", function () {
    console.log("window.scrollY");
    header.classList.toggle("header-scroll", this.window.scrollY > 0);
  });
  menuIcon.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});
