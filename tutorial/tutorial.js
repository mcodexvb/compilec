(function () {
  'use strict';

  const links = document.querySelectorAll('.course-sidebar a');
  const lessons = Array.from(document.querySelectorAll('.lesson'));
  const intro = document.querySelector('.course-intro');
  const reference = document.getElementById('reference');
  const contents = document.querySelector('.course-contents');
  const narrow = window.matchMedia('(max-width: 48rem)');

  function showChapter(moveFocus) {
    const id = location.hash.slice(1);
    const lesson = lessons.find(item => item.id === id);
    const onReference = id === reference.id;
    const onOverview = !lesson && !onReference;
    const current = lesson || (onReference ? reference : document.getElementById('main'));
    intro.hidden = !onOverview;
    reference.hidden = !onReference;
    lessons.forEach(item => { item.hidden = item !== (lesson || (onOverview ? lessons[0] : null)); });
    links.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    document.title = onOverview ? 'C Programming Tutorial | CLab' :
      current.querySelector('h2').textContent + ' | CLab C Programming';
    if (moveFocus) {
      if (narrow.matches) contents.open = false;
      current.focus({ preventScroll: true });
      current.scrollIntoView?.();
    }
  }

  function sizeContents() { contents.open = !narrow.matches; }
  sizeContents();
  narrow.addEventListener('change', sizeContents);
  showChapter(false);
  window.addEventListener('hashchange', () => showChapter(true));

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

  if (navigator.clipboard) {
    document.querySelectorAll('.example').forEach(example => {
      const code = example.querySelector('.source code');
      const button = example.querySelector('.copy-code');
      const status = example.querySelector('.copy-status');
      let resetLabel;
      button.hidden = false;
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          status.classList.add('visually-hidden');
          button.textContent = status.textContent = 'Copied';
          clearTimeout(resetLabel);
          resetLabel = setTimeout(() => { button.textContent = 'Copy'; }, 1500);
        } catch {
          status.classList.remove('visually-hidden');
          status.textContent = 'Select the code and copy it manually.';
        }
      });
    });
  }

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('../sw.js').catch(function () {});
}());
