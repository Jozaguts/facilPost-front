import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/service.index';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  updateForm!: FormGroup;
  image: any;

  // @ts-ignore
  product: Product;
  constructor(public route: ActivatedRoute, public _productService: ProductService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      sale_price: new FormControl(null, [Validators.required]),
      discount: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.nullValidator)
    });
    this.loadProduct();
  }
  loadProduct(): void {
    const product = JSON.parse( localStorage.getItem('product') as string );
    if (product){
      this.product = product;
    }else{
      const id = this.route.snapshot.params.id;
      this._productService.showProduct(id).subscribe( (resp: any ) => {
        this.product = resp.data;
        localStorage.setItem('product', JSON.stringify(this.product) as string);
      });

    }
  }
  update(): void{

    if (this.updateForm.invalid){
      return;
    }
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('id', this.updateForm.value.id);
    formData.append('name', this.updateForm.value.name);
    formData.append('sale_price', this.updateForm.value.sale_price);
    formData.append('discount', this.updateForm.value.discount);
    this._productService.updateProduct(this.updateForm.value.id, formData).subscribe( (resp: any) => {
      swal(' Success!', 'Product was updated successfully!', 'success');
    });
  }
  previewImage(event: any): void {
    if (event.target.files) {
      this.image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any ) => {
        this.product.image = event.target.result;
      };
    }
  }



}
