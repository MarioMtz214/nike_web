import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { AddProductsService } from '../add-product/add-product.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



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
    this.addProductsService.getProducts();
    this.products = this.addProductsService.datosApi();
    this.showSearchBar = this.products.length > 0;
  }

}
