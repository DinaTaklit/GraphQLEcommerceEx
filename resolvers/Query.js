const Query = {
  helloWorld: (parent, args, context) => "Hello World",
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) =>
    products.find((product) => product.id === id),
};
export default Query;
