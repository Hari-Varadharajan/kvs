import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminurl : string = this.router.url +'/loggedin'

  adminname : string = ""
  password : string = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkadmin(){
    if(this.adminname == "hari" && this.password == "hari"){
      this.router.navigateByUrl( this.adminurl);
    }
  }
}
