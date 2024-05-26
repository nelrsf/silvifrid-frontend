import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/Model/transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsServiceService {

  private transactionsEndpoint: string = '/createtransaction';

  constructor(private http: HttpClient) { 

  }

  createTransaction(transaction: Transaction){
    const url = environment.api_url + this.transactionsEndpoint;
    return this.http.post<Transaction>(url, transaction);
  }
}
