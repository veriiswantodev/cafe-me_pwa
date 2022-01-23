const createRestaurantCategoryDetail = (category) => `<span>${category.name}</span>`;

const createRestaurantCategoriesTemplate = (categories) => {
  let htmlTemplate = '';
  categories.forEach((category) => {
    htmlTemplate += createRestaurantCategoryDetail(category);
  });
  return htmlTemplate;
};

const createRestaurantMenuTemplate = (menu) => `
<li>${menu.name}</li>
`;

const createRestaurantMenusTemplate = (menus) => {
  let htmlTemplate = '<ul>';
  menus.forEach((menu) => {
    htmlTemplate += createRestaurantMenuTemplate(menu);
  });
  htmlTemplate += '</ul>';
  return htmlTemplate;
};

const createRestaurantReviewTemplate = (review) => `
  <h4>${review.name}</h4>
  <span>${review.date}</span>
  <p>${review.review}</p>
`;

const createRestaurantReviewsTemplate = (reviews) => {
  let htmlTemplate = '<div class="restaurant__review">';
  reviews.forEach((review) => {
    htmlTemplate += createRestaurantReviewTemplate(review);
  });
  htmlTemplate += '</div>';
  return htmlTemplate;
};

export {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
};
