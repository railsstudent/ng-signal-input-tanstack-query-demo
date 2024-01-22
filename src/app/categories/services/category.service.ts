import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, combineLatestWith } from 'rxjs';
import { CategoryProducts } from '../interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
const CATEGORY_URL = 'https://fakestoreapi.com/products/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);

  categories$ = lastValueFrom(this.httpClient.get<string[]>(CATEGORIES_URL));

  getCategoryProducts(): Promise<CategoryProducts[]> {
    const categories$ = this.httpClient.get<string[]>(CATEGORIES_URL);
    const categoryProducts$ = categories$.pipe(
      combineLatestWith(this.httpClient.get<Product[]>(PRODUCTS_URL)),
      map(([categories, products]) => {
        return categories.reduce((acc, category) => {
          const matched = products.filter((p) => p.category === category);

          return acc.concat({
            category,
            products: matched,
          });
        }, [] as CategoryProducts[])
      })
    );

    return lastValueFrom(categoryProducts$);
  }

  getCategory(category: string): Promise<Product[]> {
    return lastValueFrom(this.httpClient.get<Product[]>(`${CATEGORY_URL}/${category}`));
  }
}