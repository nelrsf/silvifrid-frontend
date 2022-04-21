import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG_APP } from 'src/app/config.json';


@Injectable({
  providedIn: 'root'
})
export class ProductControllerService implements IProduct {

  private url = CONFIG_APP.backend_url;
  constructor(private http: HttpClient) { }
  
  public getAllProducts():Observable<Object>{
    return this.http.get(this.url + "/getproducts");
  }

  public getProductByID(id:string):Observable<Object> {
    return this.http.get(this.url + "/getproducts/"+ id)    
  }
}
