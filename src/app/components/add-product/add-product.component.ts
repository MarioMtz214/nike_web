// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AddProductsService } from './add-product.service';
// import { products } from '../../interfaces/products';
// import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddProductsService } from './add-product.service';


// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';


// export interface products {
//   reference: string;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   sale: boolean;
//   img: string;
// }

// @Component({
//   selector: 'app-add-product',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './add-product.component.html',
//   styleUrl: './add-product.component.css'
// })
// export class AddProductComponent {
//   productForm: FormGroup;
//   products: any = {}; // Define a products property here

//   constructor(private fb: FormBuilder, private addProductsService: AddProductsService) {
//     this.productForm = this.fb.group({
//       reference: ['', Validators.required],
//       name: ['', Validators.required],
//       price: ['', Validators.required],
//       description: ['', Validators.required],
//       gender: ['', Validators.required],
//       sale: [false],
//       img: ['']
//     });
//   }
 
//   insertarProducto(): void {
//     if (this.productForm.valid) {
//       const newProduct: products = this.productForm.value;
//       this.addProductsService.sendProducts([newProduct]);
//       this.productForm.reset();
//     }
//   }
  
// }



@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
})

export class AddProductComponent {



  product: Product = {
    reference: '',
    name: '',
    price: 0,
    description: '',
    category: '',
    sale: false,
    img: '',
  };

  regexPatternRef = /^[A-Za-z]{3}\d{9}$/;

  form = new FormGroup({
    reference: new FormControl('', [Validators.required, Validators.pattern(this.regexPatternRef)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    price: new FormControl('',[Validators.required, Validators.min(0)]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    sale: new FormControl(''),
    img: new FormControl(''),
  });

  f = this.form.controls;


  constructor(private router: Router, private productService: AddProductsService) { }
  
  onSubmit() {
    if (this.form.invalid) {
      console.log('Form data:', this.product);
      return;
    }

    this.productService.setProduct(this.product);
    this.router.navigate(['/catalog']);
  }

  }
