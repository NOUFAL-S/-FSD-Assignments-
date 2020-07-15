import { Component, OnInit } from '@angular/core';

 import { from } from 'rxjs';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: ProductModel[];

  title:String = "Product Update";
  Products:ProductModel;
  product =new ProductModel(null,null,null,null,null,null,null,null);
   

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {

    this.product = this.productService.hi();
  }


  Update()
    {
      this.productService.UpdateItem(this.product);
     
      alert(" Product Updated successfully");
      this.router.navigate(['/'])
    }
  


}
