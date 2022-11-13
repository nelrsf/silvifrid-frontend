import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsViewService {

  public applyProductsFilter = new Subject<string>();

  constructor() { }
}
