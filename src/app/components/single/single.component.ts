import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  myprd :Products = new Products();
  need :string =""
  mail :string =""
  username :string =""
  phno :string =""

  constructor( private prodserv : ProductsService) { }

  ngOnInit(): void {
     this.myprd= this.prodserv.getPrd();
      console.log(this.myprd)
  }
  
  sendMail(){
    this.prodserv.createOrder(this.need,this.mail,this.username,this.phno,this.myprd).subscribe(
      data=>{console.log(data)},
      err => {console.log(err)}
    )
    this.prodserv.sendMailserv(this.need,this.mail,this.username,this.phno,this.myprd).subscribe(
      data =>{console.log(data)},
      err => {console.log(err)}
    )
    alert("Enquiry sent successfully " ); 
  }
}
