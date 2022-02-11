
let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
  }
  getData();

const galleryContainer = document.querySelector('.gallery-container');

function showData(data) {
    data.results.map((i) => {
        let imgSrc = i.urls.regular;
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.width = 420;
        img.height = 270;
        img.style.padding = '10px';
        img.style.borderRadius = '20px';
        img.src = `${imgSrc}`;
        img.alt = `image`;
        galleryContainer.append(img);
    })
}

const input = document.querySelector('.header-search');
const searchBtn = document.querySelector('.search-btn');

input.addEventListener('change', function(event) {
    url = `https://api.unsplash.com/search/photos?query=${event.target.value}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    galleryContainer.innerHTML = '';
    getData();
}) 