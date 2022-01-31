console.log("1. Смена изображений в секции portfolio +25" + '\n' +
            "2. Перевод страницы на два языка -25." + '\n' + 
            "3. Переключение светлой и тёмной темы +25" + '\n' +
            "3. выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы -5" + '\n' +
            "4. сложные эффекты для кнопок при наведении и/или клике +5");

// Сохранение данных

let theme = 'dark';

// Смена изображений в секции Portfolio

const portfolioBtns = document.querySelector('.portfolio_item');
//const portfolioBtn = document.querySelector('.btn-transporant');
const portfolioImages = document.querySelectorAll('.portfolio_img');

const changeImage = function changeImage(event) {
    if(event.target.classList.contains('btn-transporant')) {
      // здесь код функции, меняющей src изображений
      if(event.target.dataset.season) {
        portfolioImages.forEach((img, index) => img.src = `./img/${event.target.dataset.season}/${index + 1}.jpg`);
      }
    }
  }

portfolioBtns.addEventListener('click', changeImage);

// Подсветка активной кнопки

const portfolioBtn = document.querySelectorAll('.btn-transporant');
const actives = document.querySelector('btn-activ');

function changeClassActive() {

    for (let i = 0; i < portfolioBtn.length; i++) {
    portfolioBtn[i].classList.remove('btn-activ');
    }

    this.classList.add('btn-activ');
}

for (let i = 0; i < portfolioBtn.length; i++) {
    portfolioBtn[i].addEventListener('click',changeClassActive,false);
};

// Переключение языка

// import i18Obj from './translate.js';
const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

//const langs = document.querySelectorAll('.langage');
const elem = document.querySelectorAll('[data-i18n]');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

function getTranslate(langs) {
    //const elem = document.querySelectorAll('[data-i18n]');
    elem.forEach((item) => {
        /*if (item.placeholder) {
            item.placeholder = i18Obj[langs][item.dataset.i18n];
            item.textContent = ''; 
        }*/
        item.textContent = i18Obj[langs][item.dataset.i18n];
        /*langs.forEach((item) => item.classList('active'));
        event.target.classList.add('active');*/
    })
}

console.log(elem);
ru.addEventListener('click', getTranslate('ru'));
en.addEventListener('click', getTranslate('en'));

//langs.addEventListener('click', getTranslate);

//ru.forEach((item) => item.addEventListener('click', getTranslate('ru')));
//en.forEach((item) => item.addEventListener('click', getTranslate('en')));

/*function getTranslate(event) {
    const elem = document.querySelectorAll('[data-i18]');
    const text = document.textContent;

    if(event.target.classList.contains('langage_link')){
        elem.forEach((item) => item.textContent = i18Obj[event.target.textContent][item.dataset.i18]);
    }
}

langs.forEach((item) => item.addEventListener('click', getTranslate));*/
/*ru.addEventListener('click', () => getTranslate('ru'));
en.addEventListener('click', () => getTranslate('en'));*/


// Переключение светлой и тёмной темы

const liteTheme = document.querySelectorAll('.skills, .portfolio, .video, .price, .menubox, .menu-item');
const btnTheme = document.querySelector('.them');
const btnPortfolio = document.querySelectorAll('.btn-transporant');
const sectionTitle = document.querySelectorAll('.section-title');
const menuBtn = document.querySelectorAll('.menu-btn');

function changeTheme(event) {
    if(event.target.classList.contains('them')) {
        liteTheme.forEach((el) => el.classList.toggle('light-theme'));
        btnTheme.classList.toggle('them-active');
        btnPortfolio.forEach((elem) => elem.classList.toggle('btn-transporant-light'));
        sectionTitle.forEach((e) => e.classList.toggle('section-title-light'));
        menuBtn.forEach((btn) => btn.classList.toggle('menu-btn-light'));
    }
    theme = 'light';
}

btnTheme.addEventListener('click', changeTheme, false);

function setLocalStorage() {
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
      //changeTheme(event);
    }
  }
window.addEventListener('load', getLocalStorage);