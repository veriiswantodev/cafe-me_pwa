import CONFIG from '../../globals/config';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
} from './restaurant-detail';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" alt="${restaurant.name}" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  <div class="restaurant__info">
    <h3>Information</h3>
      <h4>kota</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Kategori</h4>
      <p>${createRestaurantCategoriesTemplate(restaurant.categories)}</p>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
  </div>
  <div class="restaurant__overview">
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Menus</h3>
  </div>

  <div>
    <h4>Makanan</h4>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.foods)}</p>
    </div>
  </div>

  <div>
    <h4>Minuman</h4>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.drinks)}</p>
    </div>
  </div>

  <div class="restaurant__overview">
    <h3>Riview</h3>
  </div>
  <div>
    ${createRestaurantReviewsTemplate(restaurant.customerReviews)}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            <p><span class="restaurant-item__header__city">${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
