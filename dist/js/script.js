window.addEventListener("load", () => {
  const hamburger = this.document.querySelector(".hamburger"),
    menu = this.document.querySelector(".menu"),
    closeElem = this.document.querySelector(".menu__close"),
    bgswap = this.document.querySelector(".promo__under");

  function changeColor(contactSelector, styleValue, pos) {
    if (typeof pos === "undefined")
      document.querySelector(contactSelector).style = styleValue;
    else document.querySelectorAll(contactSelector)[pos].style = styleValue;
  }

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    bgswap.classList.add("second");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
    bgswap.classList.remove("second");
  });

  window.addEventListener("scroll", () => {
    if (this.scrollY > this.innerHeight - 465) {
      changeColor(".sideContacts__text", "color: #a6d551");
    } else {
      changeColor(".sideContacts__text", "color: #fff");
    }
    if (this.scrollY > this.innerHeight - 381) {
      changeColor(".sideContacts__divider", "background-color: #a6d551");
    } else {
      changeColor(".sideContacts__divider", "background-color: #fff");
    }
    if (this.scrollY > this.innerHeight - 302) {
      changeColor(".sideContacts__link svg path", "fill: #a6d551", 2);
    } else {
      changeColor(".sideContacts__link svg path", "fill: #fff", 2);
    }
    if (this.scrollY > this.innerHeight - 273) {
      changeColor(".sideContacts__link svg path", "fill: #a6d551", 1);
    } else {
      changeColor(".sideContacts__link svg path", "fill: #fff", 1);
    }
    if (this.scrollY > this.innerHeight - 244) {
      changeColor(".sideContacts__link svg path", "fill: #a6d551", 0);
    } else {
      changeColor(".sideContacts__link svg path", "fill: #fff", 0);
    }
  });
});
