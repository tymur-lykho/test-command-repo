document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reviews-js-item'); // Елементи слайдера
  const dotsContainer = document.querySelector('.reviews-js-dots'); // Контейнер крапок
  const dots = document.querySelectorAll('.dot'); // Кнопки (крапки)
  let currentIndex = 0; // Поточний активний слайд

  // Функція оновлення слайдів
  const updateSlides = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
      // Мобільний режим: показуємо один елемент
      items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
      });

      // Відображаємо всі три крапки
      dots.forEach((dot, index) => {
        dot.style.display = 'inline-block';
        dot.classList.toggle('active', index === currentIndex);
      });
    } else if (viewportWidth >= 768 && viewportWidth < 1280) {
      // Планшетний режим: показуємо два елементи
      items.forEach((item, index) => {
        // Показуємо поточний і наступний елемент
        if (
          index === currentIndex ||
          index === (currentIndex + 1) % items.length
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Відображаємо тільки дві крапки
      dots.forEach((dot, index) => {
        if (index < 2) {
          dot.style.display = 'inline-block';
        } else {
          dot.style.display = 'none';
        }
        dot.classList.toggle('active', index === currentIndex);
      });
    } else {
      // Десктопний режим: показуємо всі елементи
      items.forEach(item => {
        item.style.display = 'block';
      });

      // Ховаємо всі крапки
      dots.forEach(dot => {
        dot.style.display = 'none';
      });
    }
  };

  // Функція переходу до конкретного слайду
  const goToSlide = index => {
    currentIndex = index;
    updateSlides();
  };

  // Додаємо обробник події кліку для кожної крапки
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Оновлення при зміні розміру вікна
  window.addEventListener('resize', updateSlides);

  // Ініціалізація
  updateSlides();
});
