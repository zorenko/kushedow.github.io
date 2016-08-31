$(document).ready(function(){

// Smooth Scrolling
  $(".nav-scroll").on("click","a", function (event) {

    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);

  });


// Tabs FAQ
  $(function () {
    //  Accordion Panels
    $(".accordion-content").show();
    setTimeout("$('.accordion-content .accordion-text').slideToggle('slow');", 1000);
    $(".accordion-content .accordion-title").click(function () {
        $(this).next(".accordion-text").slideToggle("slow").siblings(".accordion-text:visible").slideUp("slow");
    });
  });


});