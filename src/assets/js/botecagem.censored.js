(function(win, doc) {
  'use strict';

  var button = doc.querySelector('[data-id="censored-yes"]');
  var popup = doc.querySelector('[data-id="censored"]');

  if (Cookie.exists('ageGate')) {
    return popup.remove();
  } else {
    button.addEventListener('click', function() {
      Cookie.set('ageGate', {
        expires: 1
      });
      return popup.remove();
    }, 'false');
  }
})(window, document);