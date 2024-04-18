import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/products';
// import { Observable,BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AddProductsService {

  private products: Product[] = [];

  constructor() {}

  setProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductByReference(reference: string): Product | null {
    return this.products.find(product => product.reference === reference) || null;
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class AddProductsService {

//   constructor() { }

//   private products: BehaviorSubject<products[]> = new BehaviorSubject<products[]>([]);

//   public sendProducts(products: products[]): Observable<products[]> {
//     this.products.next(products);
//     console.log("Service sendProducts");
//     return this.products;
//   }

//   public getProducts(): Observable<products[]> {
//     console.log("Service getProducts");
//     return this.products;
//   }

// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AddProductsService {
//   private apiUrl = 'http://your-backend-api/products'; // Replace with your API endpoint

//   constructor(private http: HttpClient) {}

//   addProduct(product: products): void {
//     this.http.post(this.apiUrl, product)
//       .subscribe(response => {
//         console.log('Product added:', response);
//       },
//       error => {
//         console.error('Error adding product:', error);
//       });
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AddProductsService {

//   constructor() { }

//   private products: BehaviorSubject<products[]> = new BehaviorSubject<products[]>([]);

//   public sendProducts(product: products[]): Observable<products[]> {
//     this.products.next(product);
//     console.log("Service sendProducts");
//     return this.products;
//   }

//   public getProducts(): Observable<products[]> {
//     console.log("Service getProducts");
//     return this.products;
//   }

// }
