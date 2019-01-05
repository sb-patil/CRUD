import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _http: Http) { }
  confirmation:string = "New product is added";
  isAdded:boolean=false;
  addNewProduct = function(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    this._http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded=true;
      console.log(res) 
    })
  }

  ngOnInit() {
  }

}