document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger-button');
  const navbar = document.getElementById('navbar');

  if (burgerButton && navbar) {
      burgerButton.addEventListener('click', function() {
          navbar.classList.toggle('active');
          burgerButton.classList.toggle('active');
      });
  }
});




const images = [
  '../images/kitchen12.jpg',
  '../images/kitchen15.jpg',
  '../images/kitchen4.jpg'
];
const headings = [
  'Your Vision - Our Expertise <br> Kitchen remodeling done right',
  'BETTER & <br> FASTER',
  'Always <br> In touch'
];
const texts = [
  '',
  'No project delays.',
  'No lack of communication regarding project`s progress.'
];
let currentIndex = 0;

function changeSlide() {
  const overlay = document.querySelector('.slider-overlay');
  const heading = document.querySelector('.slider-heading');
  const text = document.querySelector('.slider-text');

  // Плавное затухание текста
  heading.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    overlay.style.opacity = 0;
    setTimeout(() => {
      // Изменение фонового изображения
      overlay.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]})`;
      overlay.style.opacity = 1;
    }, 500);

    // Обновление текста
    heading.innerHTML = headings[currentIndex];
    text.textContent = texts[currentIndex];
    heading.style.opacity = 1;
    text.style.opacity = 1;
  }, 500);

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeSlide, 7000);
window.onload = changeSlide;

document.addEventListener('DOMContentLoaded', function () {
  const photoPaths = [
    '../images/kitchen1.jpg',
    '../images/kitchen2.jpg',
    '../images/kitchen4.jpg',
    '../images/kitchen5.jpg',
    '../images/kitchen9.jpg',
    '../images/kitchen12.jpg',
    '../images/kitchen2-1.jpg',
    '../images/kitchen2-2.jpg',
    '../images/kitchen2-3.jpg',
    // Добавьте остальные пути к фотографиям...
  ];

  const photosContainer = document.querySelector('.photos');
  const moreText = document.querySelector('.gallery-more-text');
  const remainingCount = document.getElementById('remaining-count');
  let displayedCount = 0;
  const photosPerBatch = 5;

  function displayPhotos() {
    let photosToShow = photoPaths.slice(displayedCount, displayedCount + photosPerBatch);
    photosToShow.forEach((path, index) => {
      const photoElement = document.createElement('a');
      photoElement.href = path;
      photoElement.setAttribute('data-lightbox', 'gallery');
      photoElement.classList.add('photos__item', 'hidden'); // Добавляем класс hidden
      photoElement.style.backgroundImage = `url(${path})`;

      // Добавляем класс для увеличенной фотографии
      if ((displayedCount + index + 1) % photosPerBatch === 2) {
        photoElement.classList.add('large-photo');
      }

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');

      const icon = document.createElement('img');
      icon.src = '../icons/circle-plus.svg';
      icon.alt = 'Icon';
      icon.classList.add('overlay-icon');

      overlay.appendChild(icon);
      photoElement.appendChild(overlay);
      photosContainer.appendChild(photoElement);
    });

    displayedCount += photosToShow.length;
    updateRemainingCount();

    // Убираем класс hidden для отображения новых фотографий
    const hiddenPhotos = document.querySelectorAll('.photos__item.hidden');
    hiddenPhotos.forEach((photo, index) => {
      if (index < displayedCount) {
        photo.classList.remove('hidden');
      }
    });
  }

  function updateRemainingCount() {
    const remaining = photoPaths.length - displayedCount;
    remainingCount.textContent = remaining;
    if (remaining <= 0) {
      moreText.style.display = 'none';
    }
  }

  moreText.addEventListener('click', displayPhotos);

  // Показать первую партию фотографий при загрузке страницы
  displayPhotos();
});


