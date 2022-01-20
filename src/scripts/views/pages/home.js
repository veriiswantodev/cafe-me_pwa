import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-createor';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Daftar Restaurant</h2>
      <div id="restaurants" class="restaurants">
      
      </div>
    </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await RestaurantDbSource.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    })
  },
};
 
export default Home;