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

  constructor( private prodserv : ProductsService) { }

  ngOnInit(): void {
     this.myprd= this.prodserv.getPrd();
      console.log(this.myprd)
  }

}
