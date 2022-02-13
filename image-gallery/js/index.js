
let url = 'https://api.unsplash.com/search/photos?query=valentines&per_page=30&orientation=landscape&client_id=Y-CmsG-2i3eRkjJ5UwZRMR143_PB0-33BjCnysFKT0w';

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
        /*galleryContainer.append(img);*/

        let download = i.links.download;
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        imgContainer.style.display = 'flex';
        imgContainer.style.flexDirection = 'column';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.position = 'relative';
        const downloadBtn = document.createElement('a');
        downloadBtn.classList.add('download-img');
        downloadBtn.href = `${download}`;
        downloadBtn.style.display = 'inline';
        downloadBtn.style.textDecoration = 'none';
        downloadBtn.style.color = '#ccc';
        downloadBtn.style.position = 'absolute';
        downloadBtn.style.right = '30px';
        downloadBtn.style.bottom = '30px';
        downloadBtn.style.backgroundColor = '#fff';
        downloadBtn.style.borderRadius = '50%';
        downloadBtn.style.padding = '10px';
        downloadBtn.style.opacity = '.8';
        downloadBtn.target = '_blank';
        galleryContainer.append(imgContainer);
        imgContainer.append(img);
        imgContainer.append(downloadBtn);
        
        const iconDownload = document.createElement('span');
        iconDownload.classList.add('fa');
        iconDownload.classList.add('fa-download');
        iconDownload.style.fontSize = '24px';
        downloadBtn.append(iconDownload);
    })
}

const input = document.querySelector('.header-search');
const searchBtn = document.querySelector('.search-btn');

input.addEventListener('change', function(event) {
    url = `https://api.unsplash.com/search/photos?query=${event.target.value}&per_page=30&orientation=landscape&client_id=Y-CmsG-2i3eRkjJ5UwZRMR143_PB0-33BjCnysFKT0w`;
    galleryContainer.innerHTML = '';
    getData();
}) 