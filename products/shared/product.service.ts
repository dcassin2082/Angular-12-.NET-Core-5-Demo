import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { ProductCategory } from './product-category.Model';
import { ProductSubcategory } from './product-subcategory.Model';
import { Product } from './product.Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  baseUrl: string = environment.production ? "http://gcassin2022-001-site1.etempurl.com/api/" : "https://localhost:44344/api/";
  productCategories: ProductCategory[];
  productSubcategories: ProductSubcategory[];
  products: Product[];
  product: Product = new Product();
  page: number = 1;
  count: number;
  itemsPerPage: number = 5;
  selectedProducts: Product[] = [];
  sortTerm: string = '-1';
  productsCount: number = 0;
  subcategory: string = '-1';
  categoryId: number = -1;
  productCategory: ProductCategory = new ProductCategory();

  sort(term: string) {
    this.sortTerm = term;
    if (term == 'sort-asc') {
      return this.products.sort(function (a, b) {
        return a.Price > b.Price ? 1 : a.Price < b.Price ? -1 : 0
      })
    }
    else if (term == 'sort-desc') {
      return this.products.sort(function (a, b) {
        return a.Price < b.Price ? 1 : a.Price > b.Price ? -1 : 0
      })
    }
    else {
      return this.products;
    }
  }
  setItemsPerPage(count: number) {
    this.itemsPerPage = count;
  }
  setSubcategory(name: string) {
    this.subcategory = name;
  }
  
  getProductCategories() {
    let url = this.baseUrl + "ProductCategories/categories";
    this.http.get(url).toPromise().then(x => {
      this.productCategories = x as ProductCategory[];
    })
  }
  getProductSubcategories(id: number) {
    let url = this.baseUrl + "ProductSubcategories/subcategories/" + id;
    this.http.get(url).toPromise().then(x => {
      this.productSubcategories = x as ProductSubcategory[];
      this.productCategory = this.productCategories.find(x => x.ProductCategoryId == id);
    })
    // this.category = this.productCategories.find(x => {
    //   x.ProductCategoryId == id
    // }).CategoryName;
    // this.categoryName = this.productCategories.find(x => x.ProductCategoryId == id).CategoryName;
  }
  getAllProducts(){
    this.spinner.show();
    let url = this.baseUrl + "Products/products";

    this.http.get(url).toPromise().then(x => {
      this.products = x as Product[];
      this.count = this.products.length;
      this.spinner.hide();
    })
  }
  getProducts(id: number, sort: string) { 
    let url = this.baseUrl + "Products/products/" + id + "/" + sort;
    this.http.get(url).toPromise().then(x => {
      this.products = x as Product[];
      this.count = this.products.length;
    })
    this.categoryId = this.productCategory.ProductCategoryId;
  }
}
