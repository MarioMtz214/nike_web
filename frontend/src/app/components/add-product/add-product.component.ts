import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddProductsService } from './add-product.service';


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

    this.productService.addproduct(this.product);
    this.router.navigate(['/catalog']);
  }

  }
