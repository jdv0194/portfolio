$("#about-me-btn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#navbar").offset().top
    },
    800
  );
});

window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$("#home-nav").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#landing-page").offset().top
    },
    800
  );
});

$("#contact-nav").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact-form").offset().top
    },
    800
  );
});

$("#about-nav").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about-me").offset().top
    },
    800
  );
});
