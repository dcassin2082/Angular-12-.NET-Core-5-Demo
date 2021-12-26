import { Product } from "src/app/products/shared/product.Model";

export class CartInfo {
    Tax: number;
    Subtotal: number;
    Shipping: number;
    GrandTotal: number;
    ProductsCount: number;
    CartTotal: number;
    SelectedProducts: Product[];
}