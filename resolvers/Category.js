const Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const { onSale, avgRating } = filter;
    let filteredProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    if (onSale) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }
    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      filteredProducts = filteredProducts.filter((product) => {
        let numberOfRatingsPerProduct = 0;
        let productAvgRating = db.reviews.reduce((acc, current) => {
          if (current.productId === product.id) {
            numberOfRatingsPerProduct++;
            return acc + current.rating;
          }
          return acc;
        }, 0);
        if (numberOfRatingsPerProduct) {
          productAvgRating = productAvgRating / numberOfRatingsPerProduct;
        }
        return productAvgRating >= avgRating;
      });
    }

    return filteredProducts;
  },
};

export default Category;
