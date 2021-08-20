const burgerMenu = document.querySelector("#burger");
const navbarMain = document.querySelector("#navbarMain");

burgerMenu.addEventListener('click', () => {
  navbarMain.classList.toggle('is-active');
})