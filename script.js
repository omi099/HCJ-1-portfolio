function toggleMenu() {
  const menu_links = document.querySelector(".menu-links");
  const menu_icon = document.querySelector(".hamburger-icon");
  menu_links.classList.toggle("open");
  menu_icon.classList.toggle("open");
}
