class FavoriteRestaurantShow {
  constructor({ view, favoriteRestaurant }) {
    // eslint-disable-next-line no-underscore-dangle
    this._view = view;
    // eslint-disable-next-line no-underscore-dangle
    this._favoriteRestaurant = favoriteRestaurant;

    // eslint-disable-next-line no-underscore-dangle
    this._showFavoriteRestaurant();
  }

  // eslint-disable-next-line no-underscore-dangle
  async _showFavoriteRestaurant() {
    // eslint-disable-next-line no-underscore-dangle
    const restaurant = await this._favoriteRestaurant.getAllRestaurants();
    // eslint-disable-next-line no-underscore-dangle
    this._displayRestaurant(restaurant);
  }

  // eslint-disable-next-line no-underscore-dangle
  _displayRestaurant(restaurant) {
    // eslint-disable-next-line no-underscore-dangle
    this._view.showFavoriteRestaurants(restaurant);
  }
}

export default FavoriteRestaurantShow;
