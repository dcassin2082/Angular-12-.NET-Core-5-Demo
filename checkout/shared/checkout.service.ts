import { Injectable } from '@angular/core';
import { Checkout } from './checkout.Model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  checkout: Checkout; 
  
  resetCheckout() {
    this.checkout = {
      CheckoutId: null,
      FirstName: '',
      LastName: '',
      BillingAddress: '',
      BillingCity: '',
      BillingState: '-1',
      BillingZip: '',
      ShippingAddress: '',
      ShippingCity: '',
      ShippingState: '-1',
      ShippingZip: '',
      Phone: '',
      Email: '',
      CardNumber: '',
      CCV: '',
      CardNumbers: [],
      NameOnCard: '',
      Tax: null,
      Shipping: null,
    }
  }
}