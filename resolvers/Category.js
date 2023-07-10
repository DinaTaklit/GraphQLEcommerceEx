const Category = {
  products: ({ id: categoryId }, args, { products }) =>
    products.filter((product) => product.categoryId === categoryId),
};

export default Category;
