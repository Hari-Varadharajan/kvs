import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Products } from '../products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUri : string = "http://localhost:5000";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http : HttpClient) { }

  // functions work in serverside
  
  createProduct(prd : Products){
    return this.http.post(this.baseUri+'/createp',prd,{headers:this.headers});
  }
  readProduct(prd : Products){
    return this.http.post(this.baseUri+'/readp',prd,{headers:this.headers});
  }
  updateProduct(prd : Products){
    return this.http.put(this.baseUri+'/updatep',prd,{headers:this.headers});
  }
  deleteProduct(prd : Products){
    return this.http.post(this.baseUri+'/deletep',prd,{headers:this.headers});
  }
  readAllProducts(){
    return this.http.get(this.baseUri+'',{headers:this.headers})
  }



}
