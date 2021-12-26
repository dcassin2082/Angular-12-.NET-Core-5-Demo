import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from './shared/customer-order.service';
import { UserService } from '../user/shared/user.service';
import { NgForm } from '@angular/forms';
import { CustomerOrder } from './shared/customer-order.Model';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: [ './customer-orders.component.scss'
  ]
})
export class CustomerOrdersComponent implements OnInit {

  constructor(public userService: UserService, public orderService: CustomerOrderService) { }

  key: string = 'OrderDate';
  reverse: boolean = false;
  filter: string;
  active: boolean = false;
  totalItems: number = 0;
  imageUrlLarge: any;
  description: string;
  sku: string;
  productId: number;
  price: number;
  imgID = "Angular";
  detailedDescription: string;

  ngOnInit(): void {
    this.resetForm();
    this.active = true;
  }

  clearSearch() {
    this.filter = null;
  }

  getProduct(id: number){
    this.orderService.orderItem = this.orderService.orderItems.find(x => x.ProductID ===id);
    this.imageUrlLarge = 'data:image/png;base64,' + this.orderService.orderItem.LargePhoto;
    this.description = this.orderService.orderItem.Description;
    this.detailedDescription = this.orderService.orderItem.DetailedDescription;
    this.sku = this.orderService.orderItem.SKU;
    this.productId = id;
    this.price = this.orderService.orderItem.Price;
  }

  loadDetail(order: CustomerOrder) {
    this.orderService.order = Object.assign({}, order);
  }

  loadOrderItems(id: number){ 
    this.orderService.getOrderItems(id);
    this.totalItems = this.orderService.itemCount;
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.orderService.reset();
  }
 
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
