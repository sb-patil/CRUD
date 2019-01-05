import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _http:Http) { }

  id:number;
  private headers = new Headers({ 
    'Content-Type': 'application/json'
  });
 

  products = [];
  fetchData = function() {
    this._http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:3000/products"}/${id}`;
      return this._http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        })
    }
  }
  ngOnInit() {
    this.fetchData();
  }


}
