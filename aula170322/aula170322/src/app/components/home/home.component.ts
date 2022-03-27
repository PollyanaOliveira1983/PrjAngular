import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(
    private pService: ProductsApiService
  ) { }

  ngOnInit(): void {
    this.products = this.pService.recoverProducts()
  }

  delete(id: number){
    this.pService.deleteProducts(id)
    this.products = this.pService.recoverProducts()
  }

}
