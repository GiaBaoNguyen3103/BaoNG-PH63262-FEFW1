import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productList: any[] = [];

  constructor(private Product: Product) {}

  ngOnInit() {
    this.Product.getProduct().subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: (err) => {
        console.log('Lỗi kết nối', err);
      },
    });
  }
  handleAction(action: string, productName: string) {
    alert(`Hành động: ${action} trên sản phẩm ${productName}`);
  }
}
