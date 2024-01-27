export interface CreateProduct {
  title: string;
  price: number;
  description: string;
  category: string;
}

export interface CreateProductWithImage extends CreateProduct {
  image: string;
}

