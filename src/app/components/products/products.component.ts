import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.readAllProducts().subscribe(
      (data:any)=>{
        console.log(data);
        this.products = data;
      },
      err =>{
      console.log(err);
      }
    )
  }

  details(){
    
  }

}
