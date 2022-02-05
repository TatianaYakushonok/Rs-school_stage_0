console.log("1. Смена изображений в секции portfolio +25" + '\n' +
            "2. Перевод страницы на два языка -25." + '\n' + 
            "3. Переключение светлой и тёмной темы +25" + '\n' +
            "3. выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы -5" + '\n' +
            "4. сложные эффекты для кнопок при наведении и/или клике +5");

// Сохранение данных

//let theme = 'dark';
let langs = 'en';

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
      'send-message': 'Send message',
      'e-mail': 'E-mail',
      'phone': 'Phone',
      'message': 'Message'
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
      'send-message': 'Отправить',
      'e-mail': 'Эл. почта',
      'phone': 'Телефон',
      'message': 'Сообщение'
    }
  }

const lgEn = document.querySelector('.en');
const lgRu = document.querySelector('.ru');

function getTranslate(langs) {
    const elem = document.querySelectorAll('[data-i18n]');
        elem.forEach((item) => {
            if (item.placeholder) {
                item.placeholder = i18Obj[langs][item.dataset.i18n];
                item.textContent = ''; 
            }
            item.textContent = i18Obj[langs][item.dataset.i18n];
        })

        if (event.target.classList.contains('en')) {
            lgRu.classList.remove('langage_link-activ');
            lgEn.classList.add('langage_link-activ');
        } else if (event.target.classList.contains('ru')) {
            lgRu.classList.add('langage_link-activ');
            lgEn.classList.remove('langage_link-activ');
        }
}

lgRu.addEventListener('click', () => getTranslate('ru'));
lgEn.addEventListener('click', () => getTranslate('en'));


// Переключение светлой и тёмной темы

//const liteTheme = document.querySelectorAll('.skills, .portfolio, .video, .price, .menubox, .menu-item');
const liteTheme = document.querySelectorAll('body, .menubox, .menu-item, body.test:not(footer), body.test:not(.header-conteiner), body.test:not(.hero-container)');
const btnTheme = document.querySelector('.them');
const btnPortfolio = document.querySelectorAll('.btn-transporant');
const sectionTitle = document.querySelectorAll('.section-title');
const menuBtn = document.querySelectorAll('.menu-btn');

function changeTheme(event) {
    //if(event.target.classList.contains('them')) {
        liteTheme.forEach((el) => el.classList.toggle('light-theme'));
        btnTheme.classList.toggle('them-active');
        btnPortfolio.forEach((elem) => elem.classList.toggle('btn-transporant-light'));
        sectionTitle.forEach((e) => e.classList.toggle('section-title-light'));
        menuBtn.forEach((btn) => btn.classList.toggle('menu-btn-light'));
    //}
}

btnTheme.addEventListener('click', changeTheme, false);

// Запись данных в localStorage

function setLocalStorage() {
    if(btnTheme.classList.contains('them-active')) {
        theme = 'light';
    } else {
        theme = 'dark'};
    localStorage.setItem('theme', theme);

    /*if(lgEn.classList.contains('langage_link-activ')) {
        langs = 'en';
    } else {
        langs = 'ru';
    }*/
    //localStorage.setItem('langs', event.target.dataset.i18n);
}
window.addEventListener('beforeunload', setLocalStorage);

// Получение данных из localStorage

function getLocalStorage() {
    if(localStorage.getItem('theme') == 'light') {
        const theme = localStorage.getItem('theme');
        changeTheme();
    };
    /*if(localStorage.getItem('langs')) {
        const langs = localStorage.getItem('langs');
        getTranslate(langs);
    };*/

  }
window.addEventListener('load', getLocalStorage);

// js30#1.3-custom-video

const video = document.querySelector('.video-file');
const videoRange = document.querySelector('.video-range');
const volumeRange = document.querySelector('.volume-range');
const videoBtn = document.querySelector('.play-pause');
const volumeBtn = document.querySelector('.volume-play-pause');

const min = volumeRange.min;
const max = volumeRange.max;
const value = volumeRange.value;

function togglePlayPause() {
    if(video.paused) {
        videoBtn.className = 'pause';
        video.play();
    }
    else {
        videoBtn.className = 'play';
        video.pause(); 
    }
}

videoBtn.onclick = function () {
    togglePlayPause();
}

video.addEventListener('timeupdate', function() {
    const rangePos = video.currentTime / video.duration;
    videoRange.style.width = rangePos * 100 + '%';
    if(video.ended) {
        videoBtn.className = 'play'; 
        videoRange.style.width = 0;
    }
})

function ToggleVolumePlayPause() {
    if(video.muted) {
        volumeBtn.className = 'volume';
        video.muted = false;
        volumeRange.value = 1;
        volumeRange.style.background = 'linear-gradient(to right, #bdae82 0%, #bdae82 100%, #B3B3B3 0%, #B3B3B3 100%)';
    }
    else {
        volumeBtn.className = 'mute';
        video.muted = true;
        //volumeRange.style.width = 0;
        volumeRange.value = 0;
        volumeRange.style.background = 'linear-gradient(to left, #bdae82 0%, #bdae82 0%, #B3B3B3 0%, #B3B3B3 100%)';
    }
}

volumeBtn.addEventListener('click', ToggleVolumePlayPause);

volumeRange.addEventListener('input', function () {
    const min = volumeRange.min;
    const max = volumeRange.max;
    const value = volumeRange.value;

    video.volume = volumeRange.value;
    volumeRange.style.background = 'linear-gradient(to right, #bdae82 0%, #bdae82 ' + (value-min)/(max-min)*100 + '%, #B3B3B3 ' + (value-min)/(max-min)*100 + '%, #B3B3B3 100%)';
}, false);

