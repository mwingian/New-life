$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".overlay, #thank-you").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });

  // MODAL

  $(".modal__close").on("click", function () {
    $(".overlay,#thank-you").fadeOut("slow");
  });
});

// $(document).ready(function () {
//   $("form").submit(function (e) {
//     e.preventDefault();
//     $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize(),
//     }).done(function () {
//       $(this).find("input").val("");

//       $("form").trigger("reset");
//     });
//     return false;
//   });
// });
