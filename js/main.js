$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      btn = $('#button');

      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });

      modal.on('click', function (e){
        var modal = $(".modal");
        var modalDialog = $(".modal__dialog");
        if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0){
          modal.toggleClass('modal--visible');
        }
        });

      $(document).keydown(function(eventObject) {
        if( eventObject.which == 27 ){ 
          modal.toggleClass('modal--visible');
        }
      });

      $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
          btn.addClass('button__show');
        } else {
          btn.removeClass('button__show');
        }
      });
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '800');
      });
    
      //подключаем слайдер
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    // настройка работы стрелок
    
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10),
    bullets.css('left', prev.width() + 10)

    //включаем wow.js
    new WOW().init();

    //Валидация форм
    $(".modal__form").validate({
      errorElement: "div",
      errorClass: "invalid",
      rules: {
        // правило-объект
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        // строчное правило
        userPhone: "required",
        // правило-объект
        userEmail: {
          required: true,
          email: true
        }
      }, //собщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15 букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный Email"
        }
      }
    });

    //маска для телефона
    $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

});