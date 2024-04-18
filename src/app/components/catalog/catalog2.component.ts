// import { Component } from '@angular/core';
// import { products } from '../../interfaces/products';
// import { AddProductsService } from '../add-product/add-product.service';

// @Component({
//   selector: 'app-catalog',
//   standalone: true,
//   imports: [],
//   templateUrl: './catalog.component.html',
//   styleUrl: './catalog.component.css'
// })

// export class AddProducts {
//     products: products[] = [];
  
//     constructor(private addProductsService: AddProductsService) {};
  
//     ngOnInit(): void {
//       this.addProductsService.getProducts().subscribe((products:products[]) =>
//       {this.products = products;});
//     }
//   }

// export class AddProduct
//   product: products[] = [];

//   constructor(private addProductsService: AddProductsService) {};

//   ngOnInit(): void {
//     this.addProductsService.getProducts().subscribe((product: products[]) => {
//         this.product = product;
//     });
//     }
// }
