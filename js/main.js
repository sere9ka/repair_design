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

    //Валидация формы модального окна
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
    //Валидация формы control-section
    $(".control__form").validate({
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
      }, //собщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15 букв"
        },
        userPhone: "Заполните поле"
      }
    });
    //Валидация формы подвала окна
    $(".footer__form").validate({
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
        userQuestion: {
          required: true,
          minlength: 10
        }
      }, //собщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15 букв"
        },
        userPhone: "Заполните поле",
        userQuestion: {
          required: "Заполните поле",
          minlength: "Сообщение не менее 10 символов"
        }
      }
    });
    //маска для телефона
    $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

    //карты
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [47.228426, 39.695393],
              zoom: 10
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/map-marker.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
  
          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });
});