$(document).ready(function () {
  //Slider

  const slider = tns({
    container: ".carousel__inner",
    autoplay: false,
    autoplayButtonOutput: false,
    controls: false,
    nav: true,
    responsive: {
      992: {
        nav: false,
      },
    },
  });

  document.querySelector(".prev").addEventListener("click", function () {
    slider.goTo("prev");
  });
  document.querySelector(".next").addEventListener("click", function () {
    slider.goTo("next");
  });

  $(".catalogue__content").each(function () {
    tns({
      container: this,
      nav: false,
      controls: false,
      autoplay: false,
      responsive: {
        992: {
          disable: true,
        },
        576: {
          items: 2,
        },
      },
    });
  });

  // Tabs

  $("ul.catalogue__tabs").on(
    "click",
    "li:not(.catalogue__tab_active)",
    function () {
      $(this)
        .addClass("catalogue__tab_active")
        .siblings()
        .removeClass("catalogue__tab_active")
        .closest("div.container")
        .find("div.catalogue__content")
        .removeClass("catalogue__content_active")
        .eq($(this).index())
        .addClass("catalogue__content_active");
    }
  );

  // Item Info

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalogue-item__content")
          .eq(i)
          .toggleClass("catalogue-item__content_active");
        $(".catalogue-item__backside")
          .eq(i)
          .toggleClass("catalogue-item__backside_active");
      });
    });
  }

  toggleSlide(".catalogue-item__link");
  toggleSlide(".catalogue-item__back");

  //Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut("slow");
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text(
        $(".catalogue-item__subtitle").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });

  //Validate

  function validation(form) {
    $(form).validate({
      rules: {
        firstname: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        firstname: "Это поле обязательно для заполнения",
        phone: "Это поле обязательно для заполнения",
        email: {
          required: "Это поле обязательно для заполнения",
          email: "Пожалуйста, введите корректный email адресс",
        },
      },
    });
  }

  validation(".consultation .feed-form");
  validation("#consultation .feed-form");
  validation("#order .feed-form");

  //Mask

  $("input[name=phone]").mask("+7 (999) 999-99-99");

  //Mailer

  $("form").submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });

  //PageUp

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $(".pageup").fadeIn();
    } else $(".pageup").fadeOut();
  });

  //Smooth

  $("a[href^='#pg']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
