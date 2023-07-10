const Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    const { onSale } = filter;
    const filteredProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    if (onSale) {
      return filteredProducts.filter((product) => product.onSale);
    }
    return filteredProducts;
  },
};

export default Category;
