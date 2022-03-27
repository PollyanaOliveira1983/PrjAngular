import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private products: Product[] = [
    {
      name: 'Smartphone',
      price: 3500
    },
    {
      name: 'Laptop',
      price: 1000
    },
    {
      name: 'Tablet',
      price: 1000
    }
  ]

  recoverProducts(): Product[] {
    return this.products
  }

  deleteProducts(id: number): void{
    this.products.splice(id, 1)
  }
}
