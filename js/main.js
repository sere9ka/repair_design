$(document).ready(function () {
  var modal = $('.modal'),
      modalResp = $('.response__modal')
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      closeRespBtn = $('.response__close')
      btn = $('#button');
      sectionControl = $('.section-title')

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
        checkBox: "required",
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
        checkBox: "Подтвердите согласие",
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный Email"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера: ' + response);
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            modalResp.addClass('response__modal--visible');
          },
          error: function (response) {
            console.error('Ошибка запроса ' + response);
          }
        });
      },
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
            return element.next('label').append(error);
        }
    
         error.insertAfter($(element));
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
        checkBox: "required",
      }, //собщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15 букв"
        },
        checkBox: "Подтвердите согласие",
        userPhone: "Заполните поле"
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера: ' + response);
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            modalResp.addClass('response__modal--visible');
          },
          error: function (response) {
            console.error('Ошибка запроса ' + response);
          }
        });
      },
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
            return element.next('label').append(error);
        }
    
         error.insertAfter($(element));
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
        checkBox: "required",
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
        checkBox: "Подтвердите согласие",
        userQuestion: {
          required: "Заполните поле",
          minlength: "Сообщение не менее 10 символов"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера: ' + response);
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            modalResp.addClass('modal__response--visible');
          },
          error: function (response) {
            console.error('Ошибка запроса ' + response);
          }
        });
      },
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
            return element.next('label').append(error);
        }
    
         error.insertAfter($(element));
      }
    });
    
    //маска для телефона
    $('[type=tel]').mask('+7(999) 999-99-99', {placeholder: "Введите ваш номер"});

    //настройка всплывающего окна
    closeRespBtn.on('click', function () {
      console.log('Нажал кнопку');
      
      modalResp.removeClass('response__modal--visible')
    })

    //настройки анимации
    $(window).scroll(function() {
      if ($(window).scrollTop() > 800) {
        sectionControl.addClass('fadeInUp');
      } else {
        sectionControl.removeClass('fadeInUp');
      }
    });

    //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.238488, 39.720454], // координаты центра на карте
      zoom: 10, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([47.238488, 39.720454], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
  
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
  
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
  
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=a99e370d-b00e-4da1-a122-9b8ab1a61afa&lang=ru_RU", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  }
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });
});