import { Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddProductsService {
  url: string = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  datosApi = signal<any[]>([]);

  getProducts() {
    this.http
      .get<any>(this.url)
      .pipe(
        catchError((error) => {
          console.log('Error is:', error);
          return error;
        })
      )
      .subscribe((products) => {
        this.datosApi.set(products);
        console.log(products);
      });
  }

  addproduct(product: Product) {
    this.http
      .post(this.url, product)
      .pipe(
        catchError((error) => {
          console.log('Error is:', error);
          return error;
        })
      )
      .subscribe((product) => {
        console.log(product);
      });
  }

  // setProduct(product: Product) {
  //   this.products.push(product);
  // }

  // getProducts(): Product[] {
  //   return this.products;
  // }

  // getProductByReference(reference: string): Product | null {
  //   return this.products.find(product => product.reference === reference) || null;
  // }
}
