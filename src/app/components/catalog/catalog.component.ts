import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { AddProductsService } from '../add-product/add-product.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


// @Component({
//     selector: 'app-catalog',
//     standalone: true,
//     imports: [],
//     templateUrl: './catalog.component.html',
//     styleUrl: './catalog.component.css'
//   })
// export class CatalogComponent implements OnInit{
//   // constructor(private addProductsService: AddProductsService) { }
//   products: Product[] = [];
  
//     constructor(private addProductsService: AddProductsService) {};
  
//     ngOnInit(): void {
//       this.addProductsService.getProducts().subscribe((products:products[]) =>
//       {this.products = products;});
//     }

//   // products: products[] = [
//   //   {reference: 'asd123456789', name: 'Air Force 1', description: 'Zapatillas', category: 'hombre', price: 150, sale: false, img: './assets/images/air-force-1-07-zapatillas-DRv39l.png' },
//   //                                {reference: 'asd123456784', name: 'Air Force 1', description: 'Zapatillas', category: 'hombre', price: 130, sale: false, img: './assets/images/air-force-1-07-zapatillas-QMx6sn.png' }, 
//   //                                {reference: 'asd123456783', name: "Blazer Mid '77 Vintage", description: 'Zapatillas', category: 'hombre', price: 100, sale: false, img: './assets/images/blazer-mid-77-vintage-zapatillas-hk4NZb.png' },
//   //                                {reference: 'asd123456782', name: "victori-one chanclas", description: 'Chanclas', category: 'hombre', price: 40, sale: true, img: './assets/images/victori-one-chanclas-3V75Sf (1).png' },
                                

//   // ];

//   // sendProducts() {
//   //   console.log("sendProducts");
//   //   this.addProductsService.sendProducts(this.products);
//   // }
// }

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  showSearchBar: boolean = false;

  constructor(private addProductsService: AddProductsService) { } 

  ngOnInit(): void {
    this.products = this.addProductsService.getProducts();
    this.showSearchBar = this.products.length > 0;
  }

}
// @Component({
//   selector: 'app-catalog',
//   standalone: true,
//   imports: [],
//   templateUrl: './catalog.component.html',
//   styleUrl: './catalog.component.css'
// })
// export class CatalogComponent {

//   constructor(private addProductsService: AddProductsService) { }

//   product: products[] = [{reference: 'asfasf', name: 'Air Force 1', description: 'Zapatillas', gender: 'hombre', price: 150, sale: false, img: './assets/images/air-force-1-07-zapatillas-DRv39l.png' },
//                           {reference: 'asfazxvsf', name: 'Air Force 1', description: 'Zapatillas', gender: 'hombre', price: 130, sale: false, img: './assets/images/air-force-1-07-zapatillas-QMx6sn.png' }, 
//                           {reference: 'asfczxasf', name: "Blazer Mid '77 Vintage", description: 'Zapatillas', gender: 'hombre', price: 100, sale: false, img: './assets/images/blazer-mid-77-vintage-zapatillas-hk4NZb.png' },
//                           {reference: 'asfazxsf', name: "victori-one chanclas", description: 'Chanclas', gender: 'hombre', price: 40, sale: true, img: './assets/images/victori-one-chanclas-3V75Sf (1).png' },];

                     

//   sendProducts() {
//     console.log("sendProducts");
//     this.addProductsService.sendProducts(this.product);
//   }
 
// }


