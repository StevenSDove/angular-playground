import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  imageSrcPrefix: string =
    'https://stackblitz.com/files/sdove-angular-playground/github/StevenSDove/angular-playground/master/src/';
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

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.performFilter(this.listFilter);
    }, 5000);
  }

  onRatingClicked(rating: number): void {
    console.log('rating clicked', rating);
  }
}
