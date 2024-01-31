import { create, enforce, only, test } from 'vest';
import { CreateProductFormModel } from '../types/create-product-form-model.type';

export const createProductValidations = create(
    (model: CreateProductFormModel, field: string) => {
        only(field);

        test('title', 'Title is required', () => {
            enforce(model.title).isNotBlank();    
        });

        test('title', 'Title requires at least 3 characters', () => {
            enforce(model.title).longerThanOrEquals(3);
        });

        test('description', 'Description is required', () => {
            enforce(model.description).isNotBlank();
        });

        test('price', 'Price is required', () => {
            enforce(model.price).isNotBlank(); 
        });

        test('price', 'Price must be at least 1', () => {
            enforce(model.price).greaterThanOrEquals(1); 
        })
    }
);