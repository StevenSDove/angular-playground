import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private log: LoggingService
  ) {}
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    const caseInsensitiveFilterBy = filterBy.toLocaleUpperCase();
    return filterBy.length
      ? this.products.filter((product: IProduct) =>
          product.productName
            .toLocaleUpperCase()
            .includes(caseInsensitiveFilterBy)
        )
      : this.products;
  }

  addProducts(newProducts: IProduct[]): void {
    this.products = [...this.products, ...newProducts];
    this.filteredProducts = this.performFilter(this.listFilter);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => this.addProducts(products),
      error: (err) => this.log.error(err),
    });
  }

  onRatingClicked(rating: number): void {
    this.log.info('rating clicked', rating);
  }
}
