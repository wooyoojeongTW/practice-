$(function () {
  /* Go to top Scroll Active */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".go-to-top").addClass("active");
    } else {
      $(".go-to-top").removeClass("active");
    }
  });

  /* Trigger Active */
  $(".trigger").click(function () {
    $(".trigger, .overlay, .gnb").toggleClass("active");
  });
  $(".gnb a").click(function () {
    $(".trigger, .overlay, .gnb").removeClass("active");
  });

  /* Fullpage works - Slider */
  $(".fullpage-works").slick({
    speed: 500,
    cssEase: "linear",
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
  });
});

$(".title").click(function () {
  $(this).addClass("active");
  $(this).siblings(".title").removeClass("active");
  $(this).siblings(".desc").stop().slideUp();
  $(this).next().stop().slideDown();

  var dataImage = $(this).attr("data-image");
  $(".image img").attr("src", dataImage);
});

// navi section
$(".open-navi").click(function () {
  $(".main-preview").fadeOut(500);
  $(".main").fadeIn(500);
  $(this).addClass("active");
  $(".close-navi").addClass("active");
});
$(".close-navi").click(function () {
  $(".main").fadeOut(500);
  $(".main-preview").fadeIn(500);
  $(this).removeClass("active");
  $(".open-navi").removeClass("active");
});

// skills section
$(".saying-content-tab").hide().eq(0).show();
$(".saying-face img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(".saying-content-tab").fadeOut();
  $("#" + $(this).attr("data-alt")).fadeIn();
});
