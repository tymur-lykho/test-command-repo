document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reviews-item');
  const dots = document.querySelectorAll('.dot');
  const viewportWidth = window.innerWidth;
  let currentIndex = 0;

  const updateSlides = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
      items.forEach((item, i) => {
        item.style.display = i === currentIndex ? 'block' : 'none';
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    } else if (viewportWidth >= 768 && viewportWidth < 1280) {
      items.forEach((item, i) => {
        if (i === currentIndex || i === (currentIndex + 1) % items.length) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    } else {
      items.forEach(item => {
        item.style.display = 'block';
      });
      dots.forEach(dot => {
        dot.style.display = 'none';
      });
    }
  };

  const goToSlide = index => {
    currentIndex = index;
    updateSlides();
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
  });

  updateSlides();

  window.addEventListener('resize', updateSlides);
});
