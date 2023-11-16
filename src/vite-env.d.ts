/// <reference types="vite/client" />

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type Products = {
  products: Product[];
  count: number;
};
