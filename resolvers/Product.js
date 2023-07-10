const Product = {
  category: ({ categoryId }, args, { categories }) =>
    categories.find((category) => category.id === categoryId),
};
export default Product;
