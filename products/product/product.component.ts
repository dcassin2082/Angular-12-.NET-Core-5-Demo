import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shared/shopping-cart.service';
import { Product } from '../shared/product.Model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../home/home.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService, public shoppingCartService: ShoppingCartService, private router: Router) { }

  recentProducts: Product[];
  similarProducts: Product[];

  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'demo-title-sm fa fa-star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'demo-title-sm fa fa-star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'demo-title-sm fa fa-star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'demo-title-sm fa fa-star'
    }, {
      id: 5,
      icon: 'star',
      class: 'demo-title-sm fa fa-star'
    }
  ]

  ngOnInit(): void {
    this.productService.recentlyViewedProducts.push(this.productService.product);

    this.recentProducts = this.productService.recentlyViewedProducts.filter(
      (product, i, arr) => arr.findIndex(t => t.ProductId === product.ProductId && product.ProductId != null) === i
    );
    if (this.recentProducts) {
      if (this.recentProducts.length > 3) {
        this.recentProducts = this.recentProducts.slice(this.recentProducts.length - 3);
        this.productService.recentlyViewedProducts = this.recentProducts;
      }
    }
    this.similarProducts = this.productService.products.filter(p => p.ProductSubcategoryId === this.productService.product.ProductSubcategoryId
      && p.ProductId !== this.productService.product.ProductId).slice(0, 3)
  }

  addToCart(product: Product) {
    this.shoppingCartService.selectedProducts.push(product);
    this.productService.productsCount++;
    this.shoppingCartService.cartTotal += product.Price;
    let arr = this.shoppingCartService.selectedProducts.filter(
      (product, i, arr) => arr.findIndex(t => t.ProductId === product.ProductId) === i
    );
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].ProductId == product.ProductId) {
        arr[i].LineCount++;
      }
    }
    this.shoppingCartService.filter = arr;
    sessionStorage.setItem('selectedProducts', JSON.stringify(this.shoppingCartService.selectedProducts));
  }

  getProduct(id: number, isSimilar: boolean) {
    if (isSimilar) {
      this.productService.product = this.similarProducts.find(x => x.ProductId === id);
    } else {
      this.productService.product = this.recentProducts.find(x => x.ProductId === id);
    }
  }

  goToCart() {
    this.router.navigate(['/shopping-cart']);
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  isEmpty(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
