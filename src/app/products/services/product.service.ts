import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, lastValueFrom, map, of, switchMap, tap, throwError } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { CreateProductWithImage } from '../interfaces/create-product.interface';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const FEATURED_PRODUCTS_URL = 'https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);
  // for demo purpose only.  In prod app,  backend app generates a unique product id
  private nextId = 21;

  getProduct(id: number | undefined): Promise<Product | null> {
    if (!id) {
      return Promise.resolve(null);
    }
    return lastValueFrom(this.getProductQuery(id));
  }

  private getProductQuery(id: number) {
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`).pipe(
      catchError((err) => {
        console.error(err);
        return of(null)
      })
    );
  }

  getFeaturedProducts(): Promise<Product[]> {
    const featureProducts$ = this.httpClient.get<{ ids: number[] }>(FEATURED_PRODUCTS_URL)
    .pipe(
      map(({ ids }) => ids), 
      switchMap((ids) => {
        const observables$ = ids.map((id) => this.getProductQuery(id));
        return forkJoin(observables$);
      }),
      map((productOrUndefinedArrays) => {
        const products: Product[] = [];
        productOrUndefinedArrays.forEach((p) => p && products.push(p));
        return products;
      }),
    );
    return lastValueFrom(featureProducts$);
  }

  createProduct(newProduct: CreateProductWithImage): Promise<Product> {
    return lastValueFrom(this.httpClient.post<Product>(PRODUCTS_URL, newProduct).pipe(
      map((product) => ({
        ...product,
        id: this.nextId,
      })),
      tap(() => this.nextId = this.nextId + 1),
      catchError((err) => {
        console.error('error', err);
        return throwError(() => err);
      })
    ));
  }
}