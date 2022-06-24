import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { Admin } from 'src/app/admin';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  prdC : Products = new Products();
  prdR : Products = new Products();
  prdU : Products = new Products();
  prdD : Products = new Products();

  ad : Admin = new Admin();


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    
  }

  createPServ(){
    this.productService.createProduct(this.prdC).subscribe(
      data =>{console.log(data)},
      err => {console.log(err)}
    )
  }

  readPServ(){
    this.productService.readProduct(this.prdR).subscribe(
      (data:any) => {
        console.log(data)
        this.prdR = data
      },
      err => {console.log(err)}
    )
  }

  updatePServ(){
    this.productService.updateProduct(this.prdU).subscribe(
      data =>{console.log(data)},
      err => {console.log(err)}
    )
  }

  deletePServ(){
    this.productService.deleteProduct(this.prdD).subscribe(
      data =>{console.log(data)},
      err => {console.log(err)}
    )
  }

  createAdmServ(){
    this.productService.createAdmin(this.ad).subscribe(
      data =>{console.log(data)},
      err => {console.log(err)}
    )
  }
}
