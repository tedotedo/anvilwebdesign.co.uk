/* Anvil Web Design: enquiry form opens the visitor's email app with the message ready. */
(function () {
  'use strict';

  var form = document.querySelector('[data-form]');
  var err = document.querySelector('[data-error]');
  var done = document.querySelector('[data-done]');
  var TO = 'hello@anvilwebdesign.co.uk';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var business = f.business.value.trim();
    var email = f.email.value.trim();
    if (!name || !business || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.hidden = false;
      done.hidden = true;
      return;
    }
    err.hidden = true;

    var town = f.town.value.trim();
    var subject = f.want.value + ' for ' + business + (town ? ', ' + town : '');
    var body = [
      'Hi Mark,',
      '',
      'I\'d like: ' + f.want.value.toLowerCase() + '.',
      '',
      'Business: ' + business + (town ? ' (' + town + ')' : ''),
      f.msg.value.trim() ? '\n' + f.msg.value.trim() + '\n' : '',
      'Thanks,',
      name,
      email
    ].join('\n');

    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    done.hidden = false;
  });

  /* Hide the floating button once the contact form is on screen */
  var dock = document.querySelector('.dock');
  var contact = document.getElementById('contact');
  if ('IntersectionObserver' in window && dock && contact) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.1 }).observe(contact);
  }
})();
