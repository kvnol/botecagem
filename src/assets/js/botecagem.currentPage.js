(function(win, doc) {
  'use strict';

  function currentPage() {
    var menuItem = document.querySelectorAll('.header-menu_item'); 
    Array.prototype.forEach.call(menuItem, function(item, index) {
      if (win.location.pathname === item.getAttribute('href'))
        return item.classList.add('header-menu_item--current');
    });
  }
  currentPage();
})(window, document);