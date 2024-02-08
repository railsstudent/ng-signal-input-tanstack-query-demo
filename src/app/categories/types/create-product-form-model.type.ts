import { DeepRequired } from '../../forms/deep-required.type';

export type CreateProductFormModel = Partial<{
    title: string;
    description: string;
    price: number;
}>;
  
export const createProductFormShape: DeepRequired<CreateProductFormModel> = {
    title: '',
    description: '',
    price: 1,
}
