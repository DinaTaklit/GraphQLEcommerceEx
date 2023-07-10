import { categories } from "../db";
import { products } from "../db";
const Query = {
  helloWorld: () => "Hello World",
  categories: () => categories,
  category: (parent, { id }, context) =>
    categories.find((category) => category.id === id),
  products: () => products,
  product: (parent, args, context) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },
};
export default Query;
