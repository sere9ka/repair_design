document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector ('.modal');
  const modalBtn = document.querySelectorAll ('[data-toggle=modal]');
  let modalClick = document.querySelector ('.modal__dialog')
  const closeBtn = document.querySelector ('.modal__close');
  const closeKey = document.addEventListener ('keydown', function (event) {
    if (event.code == 'Escape') {
      modal.classList.remove("modal--visible");
    } else {
      console.log('Не смог сделать второе условие...');
    }
  });
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });


  const modalVisible = document.querySelector ('.modal--visible');
  modalClick.addEventListener('click', switchModal);
  document.onclick = () => {
    if ( event.target.className != '.modal__dialog' && modalVisible == 1) {
      switchModal();
    } else {
      console.log('false');
    }
  };

})
