(function(win, doc) {
  'use strict';

  function currentPage() {
    var menuItem = document.querySelectorAll('.header-menu_item'); 
    for(var i = 0; i < menuItem.length; i++) {
      if (window.location.pathname === menuItem[i].getAttribute('href')) {
        menuItem[i].classList.add('header-menu_item--current');
      }
    }
  }
  currentPage();
})(window, document);