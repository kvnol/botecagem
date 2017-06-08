(function(win, doc) {
  'use strict';

  var state = doc.querySelector('[data-id="estado"]');
  var city = doc.querySelector('[data-id="cidades"]');
  var district = doc.querySelector('[data-id="regioes"]');

  if (win.location.pathname === '/bares.html') {
    // state.addEventListener('change', barFilter, 'false');
    // state.addEventListener('change', disableSiblings, 'false');
    // state.addEventListener('change', removeCity, 'false');
    city.addEventListener('change', barFilter, 'false');
    city.addEventListener('change', disableSiblings, 'false');
    city.addEventListener('change', removeCity, 'false');
    // district.addEventListener('change', barFilter, 'false');
  }

  function barFilter() {
    var barItem = doc.querySelectorAll('.bares-item');
    var itemValue = this.options[this.selectedIndex].value;
    var itemClass = ('.' + itemValue).toString();

    Array.prototype.forEach.call(barItem, function(item, index) {
      var itemSelected = doc.querySelectorAll(itemClass);
      
      if (itemValue === 'estados' || itemValue === 'cidades' || itemValue === 'regioes')
        return item.classList.remove('bares-item--hidden');
      item.classList.add('bares-item--hidden');
      Array.prototype.forEach.call(itemSelected, function(item) {
        item.classList.remove('bares-item--hidden');
      });
    });
  }

  function disableSiblings() {
    var itemValue = this.options[this.selectedIndex].value;

    if (itemValue !== 'estados' || itemValue !== 'cidades' || itemValue !== 'regioes')
      return this.nextSibling.removeAttribute('disabled');
  }

  function removeCity() {
    var itemValue = this.options[this.selectedIndex].value;

    Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
      if (index !== 0) {
        item.style.display = 'none';
      }
      
      if (item.value === 'estados' || item.value === 'cidades' || item.attributes[0].value === itemValue) {
        item.style.display = 'block';
      }
    });
  }

})(window, document);
(function(win, doc) {
  'use strict';

  var button = doc.querySelector('[data-id="censored-yes"]');
  var popup = doc.querySelector('[data-id="censored"]');
  
  button.addEventListener('click', function() {
    return popup.style.display = 'none';
  }, 'false');
})(window, document);
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