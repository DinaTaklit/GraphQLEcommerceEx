const Query = {
  helloWorld: (parent, args, context) => "Hello World",
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
  products: (parent, { filter }, { products }) => {
    const { onSale } = filter;
    if (onSale) {
      return products.filter((product) => product.onSale);
    }
    return products;
  },
  product: (parent, { id }, { products }) =>
    products.find((product) => product.id === id),
};
export default Query;
