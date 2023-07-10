const Product = {
  category: ({ categoryId }, args, { categories }) =>
    categories.find((category) => category.id === categoryId),
  reviews: ({ id: productId }, args, { reviews }) =>
    reviews.filter((review) => review.productId === productId),
};
export default Product;
