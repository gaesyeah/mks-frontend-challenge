/// <reference types="vite/client" />

export type Products = {
  products: (
    | {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: string,
        createdAt: string,
        updatedAt: string,
      }
    )[],
  count: number,
};