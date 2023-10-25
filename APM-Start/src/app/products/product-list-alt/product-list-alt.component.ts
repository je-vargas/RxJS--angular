import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  // products: Product[] = [];
  sub!: Subscription;

  constructor(private productService: ProductService) {}

  products = this.productService.products$;

  //- the below i think is no longer needed

  // ngOnInit(): void {
  //   this.sub = this.productService.getProducts().subscribe({
  //     next: (products) => (this.products = products),
  //     error: (err: string) => (this.errorMessage = err),
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
