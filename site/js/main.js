/* Yorlin Cleaning, LLC - the only script on the site.
   - Fills in the current year in the footer.
   - Runs the booking and contact forms.

   Forms: until a form service is connected (see HOW-TO-GO-LIVE.md), a request
   opens the visitor's email app with the details filled in. Once a Formspree
   address is pasted into the form's data-endpoint attribute, requests are sent
   to Formspree instead. Nothing is stored in the browser. */
(function () {
  'use strict';

  var PHONE = '608-386-7651';
  // Only a Formspree form address is accepted. Anything else is ignored.
  var ENDPOINT_PATTERN = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;
  var MAX_FIELD_LENGTH = 1000;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  var yearNodes = document.querySelectorAll('[data-year]');
  for (var i = 0; i < yearNodes.length; i++) {
    yearNodes[i].textContent = String(new Date().getFullYear());
  }

  function setStatus(box, message, isError) {
    if (!box) { return; }
    box.textContent = message;
    box.className = 'form-status' + (isError ? ' is-error' : '');
    box.focus();
  }

  function collect(form) {
    var lines = [];
    for (var i = 0; i < form.elements.length; i++) {
      var el = form.elements[i];
      if (!el.name || el.name.charAt(0) === '_' || el.type === 'submit') { continue; }
      var value = String(el.value || '').trim().slice(0, MAX_FIELD_LENGTH);
      if (!value) { continue; }
      lines.push((el.getAttribute('data-label') || el.name) + ': ' + value);
    }
    return lines;
  }

  function setup(form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');
    var dateInput = form.querySelector('input[type="date"]');
    var endpoint = form.getAttribute('data-endpoint') || '';
    var mailto = form.getAttribute('data-mailto') || '';
    var subject = form.getAttribute('data-subject') || 'Message from the website';

    // The form is hidden in the HTML so it never shows without this script.
    form.hidden = false;

    if (dateInput) {
      var today = new Date();
      dateInput.min = today.getFullYear() + '-' + pad(today.getMonth() + 1) + '-' + pad(today.getDate());
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(form);
      // Hidden spam trap: people never see this field, bots fill it in.
      if (data.get('_gotcha')) {
        setStatus(status, 'Request sent. We will be in touch.', false);
        return;
      }

      if (ENDPOINT_PATTERN.test(endpoint)) {
        button.disabled = true;
        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (response) {
            if (!response.ok) { throw new Error('Request failed'); }
            form.reset();
            setStatus(status, 'Request sent. We will contact you to confirm.', false);
          })
          .catch(function () {
            setStatus(status, 'Your request was not sent. Please call ' + PHONE + ' or email ' + mailto + '.', true);
          })
          .then(function () { button.disabled = false; });
        return;
      }

      var body = collect(form).join('\n');
      window.location.href = 'mailto:' + mailto +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      setStatus(status, 'Your email app should open with your request ready to send. If it does not, call ' + PHONE + '.', false);
    });
  }

  var forms = document.querySelectorAll('form[data-form]');
  for (var j = 0; j < forms.length; j++) { setup(forms[j]); }
})();
