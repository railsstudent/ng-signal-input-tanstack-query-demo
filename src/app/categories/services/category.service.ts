import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatestWith, lastValueFrom, map } from 'rxjs';
import { CreateProduct } from '../../products/interfaces/create-product.interface';
import { Product } from '../../products/interfaces/product.interface';
import { ProductService } from '../../products/services/product.service';
import { CategoryProducts } from '../interfaces/category-products.interface';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
const CATEGORY_URL = 'https://fakestoreapi.com/products/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);
  private productService = inject(ProductService);

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

  addProduct(newProduct: CreateProduct): Promise<Product> {
    const image = 'https://via.assets.so/img.jpg?w=100&h=100&tc=yellow&bg=blue&t=product';
    return this.productService.createProduct({
      ...newProduct,
      image
    });
  }
}