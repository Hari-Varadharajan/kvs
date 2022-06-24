import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import { Admin } from 'src/app/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminurl : string = this.router.url +'/loggedin'

  adminname : string = ""
  password : string = ""


  ad : Admin = new Admin();
  adchk : Admin = new Admin();

  constructor(private router: Router, private  productService : ProductsService ) {  }

  ngOnInit(): void {
  }

  checkadmin(){
    this.ad.uname = this.adminname;
    this.ad.pass = this.password;
    if(this.adminname == "hari" && this.password == "hari"){
      this.router.navigateByUrl( this.adminurl);
    }
    else{
      this.productService.readadm(this.ad).subscribe(
        (data:any) => {
          console.log(data)
          this.adchk = data
          if(this.ad.pass == this.adchk.pass){
            this.router.navigateByUrl( this.adminurl);
          }
          else{
            alert("Wrong Credentials")
          }
        },
        err => {console.log(err)}
      )
      
    }
  }
}
