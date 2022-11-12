import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productQuantity } from 'src/app/Model/cart';
import { ICourier } from 'src/app/Model/iCourier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  apiUrl: string = environment.api_courier_url;

  constructor(private httpClient: HttpClient) { }

  getCities() {
    return this.httpClient.get(this.apiUrl + "/city/getcities");
  }

  getCourierQoute(destinationCityId: number, productsQuantities: productQuantity[]) {

    let requestUrl = environment.api_courier_url + "/product-quantity/getcourierquote";

    let courierInfo: ICourier = {
      cityId: destinationCityId,
      productQuantities: productsQuantities
    }

    return this.httpClient.post(requestUrl, courierInfo);
  }

}
