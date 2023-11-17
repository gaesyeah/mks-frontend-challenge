import { Product } from "../vite-env";

export const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "",
  brand: "",
  description: "",
  photo: "",
  price: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));
