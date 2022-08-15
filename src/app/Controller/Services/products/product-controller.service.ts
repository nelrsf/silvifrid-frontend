import { Injectable } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductControllerService implements IProduct {

  private url = environment.backend_url;
  constructor(private http: HttpClient) { }
  
  public getAllProducts():Observable<Object>{
    return this.http.get(this.url + "/getproducts");
  }

  public getProductByID(id:string):Observable<Object> {
    return this.http.get(this.url + "/getproducts/"+ id)    
  }
}
