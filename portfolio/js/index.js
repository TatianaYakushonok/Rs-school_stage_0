console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +48" + '\n' +
            "2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки." + '\n' + 
                "Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15" + '\n' +
            "3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22" + '\n');

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

/*portfolioBtnWinter.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/winter/${index + 1}.jpg`);
});

portfolioBtnSpring.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/spring/${index + 1}.jpg`);
});

portfolioBtnSummer.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/summer/${index + 1}.jpg`);
});

portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/autumn/${index + 1}.jpg`);
});*/

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
}