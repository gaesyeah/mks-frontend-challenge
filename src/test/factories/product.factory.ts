import { Product } from "../../vite-env";
import { faker } from "@faker-js/faker";

export const generateProduct = (
  name: string = faker.commerce.product()
): Product => {
  return {
    id: faker.number.int({ max: 100, min: 1 }),
    name,
    brand: faker.company.name(),
    description: faker.lorem.paragraph(),
    photo: faker.image.url(),
    price: faker.number.int({ max: 10000, min: 1000 }).toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};
