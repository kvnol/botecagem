(function(win, doc) {
  'use strict';

  var button = doc.querySelector('[data-id="censored-yes"]');
  var popup = doc.querySelector('[data-id="censored"]');
  
  button.addEventListener('click', function() {
    return popup.style.display = 'none';
  }, 'false');
})(window, document);