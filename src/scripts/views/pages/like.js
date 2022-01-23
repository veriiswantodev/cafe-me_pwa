import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-createor';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants">
 
      </div>
    </div>
 `;
 
  },
 
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    console.log(restaurants);

    restaurants.forEach((restaurants) =>{
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    })
  },
};
 
export default Like;