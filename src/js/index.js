const btns = document.querySelector('.menu-list');

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  let targetPosition = document.querySelector(targetId).offsetTop;
  if (window.innerWidth < 1600) {
    targetPosition -= 60;
  } else if (window.innerWidth >= 1600) {
    targetPosition -= 100;
  }
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

btns.addEventListener('click', smoothScroll);

function employeeFix() {
  const startPosition = window.pageYOffset;
  if (window.innerWidth >= 700 && window.innerWidth < 1600) {
    window.scrollTo(0, startPosition - 80);
  } else if (window.innerWidth >= 1600) {
    window.scrollTo(0, startPosition - 100);
  }
}

setTimeout(employeeFix, 50);
