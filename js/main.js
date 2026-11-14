/* Anvil Web Design */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Enquiry form: opens the visitor's email app with the message ready */
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

  /* Hero showcase: gently cycles through sample designs */
  var show = document.querySelector('[data-showcase]');
  if (show && !reduce) {
    var imgs = show.querySelectorAll('.device__screen img');
    var caps = [['No. 2', 'Pilates studio — the week on one card'],
                ['No. 3', 'Handyman — send a photo, get a price'],
                ['No. 5', 'Shirt shop — laid out like a sticker album']];
    var no = show.querySelector('[data-cap-no]'), txt = show.querySelector('[data-cap-text]');
    var i = 0, paused = false;
    show.addEventListener('mouseenter', function () { paused = true; });
    show.addEventListener('mouseleave', function () { paused = false; });
    setInterval(function () {
      if (paused || document.hidden) return;
      imgs[i].classList.remove('is-on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('is-on');
      show.classList.add('is-changing');
      setTimeout(function () { no.textContent = caps[i][0]; txt.textContent = caps[i][1]; show.classList.remove('is-changing'); }, 350);
    }, 4200);
  }

  /* Quiet reveal as sections come into view */
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
