import { Component, OnInit } from '@angular/core';
import {ProductModel} from './product.model';
import {ProductService} from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String = "Product List";

  products: ProductModel[];

  imageWidth: number =50;
  imageMargin: number =2;


  showImage: boolean = false;



  constructor(private productService: ProductService,private router:Router) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  // edit component
  edit(product){
    this.productService.setter(product);
  
    this.router.navigate(['/edit'])
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
