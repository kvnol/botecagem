(function(win, doc) {
  'use strict';

  function currentPage() {
    var pageAttribute = document.querySelector('.header-menu_item').getAttribute('href'); 
    var menuItem = document.querySelector('.header-menu_item'); 
    if (window.location.pathname === pageAttribute) {
      menuItem.classList.add('header-menu_item--current');
    }
  }
  currentPage();
})(window, document);