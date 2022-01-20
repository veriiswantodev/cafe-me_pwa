import data from '../DATA.json';
const catalog = document.querySelector('.catalogs');


let catalogItem = `
    <div class="catalog-warning">
        <h2 class="catalog-warning-text"><a href="#">Data tidak ada.</a></h2>
    </div>
`;

if (data.restaurants && data.restaurants.length > 0) {
    catalogItem = '';
    data.restaurants.forEach(element => {
        catalogItem += `
        <li class="catalog-item">
          <div class="catalog" tabindex="0">
            <div class="catalog-img">
              <img src="${element.pictureId}" alt="Catalog Restaurant"/>
              <div class="top-left">${element.city}</div>
              <div class="top-left-under catalog-rating">Rating: ${element.rating}</div>
            </div>
            <div class="catalog-content">
           
              <h2 class="catalog-title">${element.name}</h2>
              <p class="catalog-text">
                ${element.description.substr(0, 250)}
              </p>
            </div>
          </div>
        </li>
        `;
    });
}

catalog.innerHTML = catalogItem