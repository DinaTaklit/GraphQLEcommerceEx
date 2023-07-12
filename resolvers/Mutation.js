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
};

export default Mutation;
