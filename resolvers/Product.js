import { categories } from "../db";
const Product = {
  category: ({ categoryId }, args, context) =>
    categories.find((category) => category.id === categoryId),
};
export default Product;
