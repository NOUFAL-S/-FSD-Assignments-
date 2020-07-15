import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductModel} from './product-list/product.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// edit
  private product:ProductModel;


  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  // edit
  setter(product){
    this.product=product;
    console.log(product)
  }
  hi(){
    return this.product;
  }

UpdateItem(item){
  return this.http.put("http://localhost:3000/edit",{"product":item})
  .subscribe(data=>{console.log(data)});
}
}
