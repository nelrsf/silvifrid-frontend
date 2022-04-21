import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iassets } from '../Interfaces/iassets';
import { HttpClient } from '@angular/common/http';
import { CONFIG_APP } from 'src/app/config.json';

@Injectable({
  providedIn: 'root'
})
export class AssetControllerService implements Iassets{

  constructor(private http: HttpClient) { }

  private url:string = CONFIG_APP.backend_url;

  public getAllAssets(): Observable<Object>{
      return this.http.get(this.url+"/getassets");
  };
  public getAssetByID(id: string):Observable<Object>{
      return this.http.get(this.url+"/getassets/"+id);
  };
}
