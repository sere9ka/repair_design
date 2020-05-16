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
    


});