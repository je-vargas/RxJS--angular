import { Component, OnInit, OnDestroy } from '@angular/core';

import { EMPTY, Observable, Subscription, catchError, filter, map } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];
  selectedCategoryId = 1;

  // products: Observable<Product[]> | undefined;
  // sub!: Subscription;

  products$ = this.productService.productWithCategories$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  productsSimpleFilter$ = this.productService.productWithCategories$.pipe(
    map((products) =>
      products.filter((product) =>
        this.selectedCategoryId
          ? product.categoryId === this.selectedCategoryId
          : true
      )
    )
  );

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.sub = this.productService.getProducts().subscribe({
    //   next: (products) => (this.products = products),
    //   error: (err) => (this.errorMessage = err),
    // });
    this.products$.subscribe((x) => console.log('prod & cat: ', x));
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
