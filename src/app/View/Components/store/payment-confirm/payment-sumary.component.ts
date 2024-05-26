import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-sumary',
  templateUrl: './payment-sumary.component.html',
  styleUrls: ['./payment-sumary.component.css']
})
export class PaymentSumaryComponent implements OnInit {

  transactionState!: string;
  transactionId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.transactionState = params.get('bold-tx-status') || "";
      this.transactionId = params.get('bold-order-id') || "";
    });
  }

}
