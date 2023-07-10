import { products } from "../db";
const Category = {
  products: ({ id: categoryId }, args, context) =>
    products.filter((product) => product.categoryId === categoryId),
};

export default Category;
