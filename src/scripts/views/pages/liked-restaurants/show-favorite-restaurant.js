class FavoriteRestaurantShow {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurant = await this._favoriteRestaurant.getAllRestaurants();
    this._displayRestaurant(restaurant);
  }

  _displayRestaurant(restaurant) {
    this._view.showFavoriteRestaurants(restaurant);
  }
}

export default FavoriteRestaurantShow;
