import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/products/shared/product.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shared/shopping-cart.service';
import { ConfirmationService } from './confirmation.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, public confirmationService: ConfirmationService, public shoppingCartService: ShoppingCartService, public productService: ProductService, private router: Router) { }
  
  selectedMonth: number;
  orderNumber: number;
  transactionId: number;

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000); 

    this.orderNumber = Math.floor(Math.random() * 1000);
    this.transactionId = Math.floor(Math.random() * 10000000);
  }

}
