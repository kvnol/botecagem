(function(win, doc) {
  'use strict';

  var state = doc.querySelector('[data-id="estado"]');
  var city = doc.querySelector('[data-id="cidades"]');
  var district = doc.querySelector('[data-id="regioes"]');

  if (win.location.pathname === '/bares.html') {
    state.addEventListener('change', barFilter, 'false');
    state.addEventListener('change', disableSiblings, 'false');
    state.addEventListener('change', removeCity, 'false');
    city.addEventListener('change', barFilter, 'false');
    city.addEventListener('change', disableSiblings, 'false');
    city.addEventListener('change', removeDistrict, 'false');
    district.addEventListener('change', barFilter, 'false');
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
    var itemState = doc.querySelector('[data-estado="' + itemValue + '"]');
    var itemStateValue = itemState.attributes[0].value;

    if (itemValue === 'estados' || itemValue === 'cidades') {
      Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
        item.style.display = 'block';
      });
    }

    if (itemStateValue === itemValue) {
      Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
        item.style.display = 'none';
      });
      itemState.style.display = 'block';
    }
  }

  function removeDistrict() {
    var itemValue = this.options[this.selectedIndex].value;
    var itemState = doc.querySelector('[data-cidade="' + itemValue + '"]');
    var itemStateValue = itemState.attributes[0].value;

    if (itemStateValue === 'estados' || itemValue === 'cidades') {
      Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
        item.style.display = 'block';
      });
    }

    if (itemState.attributes[0].value === itemValue) {
      Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
        item.style.display = 'none';
      });
      itemState.style.display = 'block';
    }
  }

})(window, document);