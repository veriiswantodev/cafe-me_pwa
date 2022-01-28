/* eslint-disable import/named */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../../templates/template-createor';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Liked Restaurant</h2>
           <div id="restaurants" class="restaurants">
            ${createSkeletonRestaurantTemplate(20)}
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">No restaurant</div>';
  }
}

export default FavoriteRestaurantSearchView;
