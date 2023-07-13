import { v4 as uuidv4 } from "uuid";

const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuidv4(),
      name: name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, image, price, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
};

export default Mutation;
