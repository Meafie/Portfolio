window.addEventListener("load", () => {
  const hamburger = this.document.querySelector(".hamburger"),
    menu = this.document.querySelector(".menu"),
    closeElem = this.document.querySelector(".menu__close");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
