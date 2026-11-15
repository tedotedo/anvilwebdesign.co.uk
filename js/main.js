/* Anvil Web Design: the contact form opens the visitor's email app with the message ready to send. */
(function () {
  'use strict';
  var form = document.querySelector('[data-form]');
  var err = document.querySelector('[data-error]');
  var done = document.querySelector('[data-done]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim(), business = f.business.value.trim(), email = f.email.value.trim();
    if (!name || !business || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.hidden = false; done.hidden = true; return; }
    err.hidden = true;
    var town = f.town.value.trim();
    var subject = f.want.value + ' for ' + business + (town ? ', ' + town : '');
    var body = ['Hi Mark,', '', 'I\'d like ' + f.want.value.toLowerCase() + '.', '',
      'Business: ' + business + (town ? ' (' + town + ')' : ''),
      f.msg.value.trim() ? '\n' + f.msg.value.trim() + '\n' : '',
      'Thanks,', name, email].join('\n');
    window.location.href = 'mailto:hello@anvilwebdesign.co.uk?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    done.hidden = false;
  });
})();
