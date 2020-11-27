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

  createOrUpdateForm: FormGroup;
  image: string = '';

  // @ts-ignore
  product: Product;
  method: string = '';
  constructor(public route: ActivatedRoute, public _productService: ProductService) { }

  ngOnInit(): void {
    this.createOrUpdateForm = new FormGroup({
      id: new FormControl(undefined, ),
      name: new FormControl(null, Validators.required),
      sale_price: new FormControl(null, [Validators.required]),
      discount: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.nullValidator)
    });
    this.loadProduct();
  }
  loadProduct(): void {
    if ( this.route.snapshot.routeConfig.path !== 'products/create'){
      this.method = 'Update';
      const product = JSON.parse( localStorage.getItem('product') as string );
      this.product = product;
      const id = this.route.snapshot.params.id;
      this._productService.showProduct(id).subscribe( (resp: any ) => {
          this.product = resp.data;
          localStorage.setItem('product', JSON.stringify(this.product) as string);
      });
    }else{
      this.method = 'Create';
      this.product = new Product('', 0, 0, '');
    }
  }
  createOrUpdate(): void{
    if (this.createOrUpdateForm.invalid){
      return;
    }
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('name', this.createOrUpdateForm.value.name);
    formData.append('sale_price', this.createOrUpdateForm.value.sale_price);
    formData.append('discount', this.createOrUpdateForm.value.discount);
    if (this.createOrUpdateForm.value.id){
      formData.append('id', this.createOrUpdateForm.value.id);
      this._productService.updateProduct(this.createOrUpdateForm.value.id, formData).subscribe( (resp: any) => {
        swal(' Success!', 'Product was Updated successfully!', 'success');
      });
    }else {
      this._productService.createProduct(formData).subscribe( (resp: any) => {
        swal(' Success!', 'Product was Created successfully!', 'success');
      });
    }
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
