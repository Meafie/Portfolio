window.addEventListener("load", () => {
  // Hamburger and Menu

  const hamburger = this.document.querySelector(".hamburger"),
    menu = this.document.querySelector(".menu"),
    bgswap = this.document.querySelector(".promo__under");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    bgswap.classList.add("second");
  });

  menu.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.className === "menu__overlay" ||
      target.tagName === "A" ||
      target.tagName === "svg" ||
      target.tagName === "path"
    ) {
      menu.classList.remove("active");
      bgswap.classList.remove("second");
    }
  });

  // Side Contacts Color Swap

  function changeStyle(contactSelector, styleValue, pos) {
    if (typeof pos === "undefined")
      document.querySelector(contactSelector).style = styleValue;
    else document.querySelectorAll(contactSelector)[pos].style = styleValue;
  }

  window.addEventListener("scroll", () => {
    if (this.scrollY > this.innerHeight - 465) {
      changeStyle(".sideContacts__text", "color: #a6d551");
    } else {
      changeStyle(".sideContacts__text", "color: #fff");
    }
    if (this.scrollY > this.innerHeight - 381) {
      changeStyle(".sideContacts__divider", "background-color: #a6d551");
    } else {
      changeStyle(".sideContacts__divider", "background-color: #fff");
    }
    if (this.scrollY > this.innerHeight - 302) {
      changeStyle(".sideContacts__link svg path", "fill: #a6d551", 2);
    } else {
      changeStyle(".sideContacts__link svg path", "fill: #fff", 2);
    }
    if (this.scrollY > this.innerHeight - 273) {
      changeStyle(".sideContacts__link svg path", "fill: #a6d551", 1);
    } else {
      changeStyle(".sideContacts__link svg path", "fill: #fff", 1);
    }
    if (this.scrollY > this.innerHeight - 244) {
      changeStyle(".sideContacts__link svg path", "fill: #a6d551", 0);
    } else {
      changeStyle(".sideContacts__link svg path", "fill: #fff", 0);
    }
    if (this.scrollY > this.innerHeight - 41) {
      changeStyle(".hamburger span", "background-color: #a6d551", 2);
    } else {
      changeStyle(".hamburger span", "background-color: #fff", 2);
    }
    if (this.scrollY > this.innerHeight - 30) {
      changeStyle(".hamburger span", "background-color: #a6d551", 1);
    } else {
      changeStyle(".hamburger span", "background-color: #fff", 1);
    }
    if (this.scrollY > this.innerHeight - 23) {
      changeStyle(".hamburger span", "background-color: #a6d551", 0);
    } else {
      changeStyle(".hamburger span", "background-color: #fff", 0);
    }
    if (this.scrollY > this.innerHeight) {
      document.querySelector(".upButton").classList.remove("upButton_none");
    } else {
      document.querySelector(".upButton").classList.add("upButton_none");
    }
  });

  // Skill Percentage

  document
    .querySelectorAll(".skills__progress-percentage")
    .forEach((item, i) => {
      document.querySelectorAll(".skills__progress-frontBar")[i].style.width =
        item.textContent;
    });

  //Validate Form

  const form = document.querySelector(".contacts__form"),
    formName = form.querySelector("#name"),
    formEmail = form.querySelector("#email"),
    formText = form.querySelector("#text"),
    formCheck = form.querySelector("#check");

  function textinside(place, text) {
    place.value = text;
    place.style.color = "rgba(0,0,0,0.3)";
    place.addEventListener("focus", () => {
      if (place.value === text) {
        place.value = "";
      }
      place.style.color = "rgb(0,0,0)";
    });
    place.addEventListener("blur", () => {
      if (place.value === "") {
        place.value = text;
        place.style.color = "rgba(0,0,0,0.3)";
      }
    });
  }

  textinside(formName, "Ваше Имя");
  textinside(formEmail, "example@mail.com");
  textinside(form.querySelector("#text"), "Ваш текст");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = formName.value;
    const email = formEmail.value;
    const isFormChecked = formCheck.checked;
    const error = document.querySelector(".contacts__error");
    if (name === "Ваше Имя" || email === "example@mail.com") {
      error.innerHTML =
        "Пожалуйста, заполните обязательные поля (имя и почта)!";
      return;
    }
    if (!isValidName(name)) {
      error.innerHTML =
        "Имя может содержать только латинские буквы или кириллицу.";
      return;
    }
    if (!isValidMail(email)) {
      error.innerHTML = "Введите корректный email адрес (example@mail.com).";
      return;
    }
    if (!isFormChecked) {
      error.innerHTML =
        "Вы не поставили галочку о согласии с политикой конфедициальности.";
      return;
    }
    form.submit();
  });

  function isValidName(name) {
    const pattern = /^[а-яА-Я]+$|^[a-zA-Z]+$/g;
    return pattern.test(name);
  }

  function isValidMail(mail) {
    const pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    return pattern.test(mail);
  }

  // Up Button

  document.querySelector(".upButton").addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
