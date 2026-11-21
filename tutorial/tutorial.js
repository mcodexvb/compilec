(function () {
  'use strict';

  var links = document.querySelectorAll('.course-sidebar a');
  function markLesson() {
    links.forEach(function (link) {
      if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  markLesson();
  window.addEventListener('hashchange', markLesson);

  document.querySelectorAll('.lesson-quiz').forEach(function (quiz) {
    var feedback = quiz.querySelector('.quiz-feedback');
    quiz.querySelector('button').hidden = false;
    quiz.addEventListener('change', function () { feedback.textContent = ''; });
    quiz.addEventListener('submit', function (event) {
      event.preventDefault();
      var choice = new FormData(quiz).get('choice');
      var correct = choice === quiz.dataset.correct;
      feedback.textContent = correct ? 'Correct!' : 'Try again, or show the answer below.';
      if (correct) quiz.querySelector('details').open = true;
    });
  });

  document.querySelectorAll('.example').forEach(function (example) {
    var source = example.querySelector('.source');
    var link = example.querySelector('.source-link');
    fetch(link.href).then(function (response) {
      if (!response.ok) throw new Error('Source unavailable');
      return response.text();
    }).then(function (code) {
      source.querySelector('code').textContent = code;
      source.hidden = false;
      source.tabIndex = 0;
      source.setAttribute('aria-label', 'C source');
      if (!navigator.clipboard) return;

      var button = example.querySelector('.copy-code');
      var status = example.querySelector('.copy-status');
      button.hidden = false;
      button.addEventListener('click', function () {
        navigator.clipboard.writeText(code).then(function () {
          status.textContent = 'Copied.';
        }, function () {
          status.textContent = 'Select the source to copy it manually.';
        });
      });
    }).catch(function () {
      example.querySelector('.copy-status').textContent = 'Could not show the source here.';
    });
  });

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('../sw.js').catch(function () {});
}());
