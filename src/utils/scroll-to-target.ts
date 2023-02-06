export function scrollTo(to: number, duration: number) {
  const start = window.pageYOffset;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  animateScroll();
}

