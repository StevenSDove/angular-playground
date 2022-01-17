import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
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

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      price: 32.99,
      description: '15 gallon capacity rolling garden cart',
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      price: 8.9,
      description: 'Curved claw steel hammer',
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
  filteredProducts: IProduct[] = [...this.products];

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
    console.log('ProductListComponent is initialized');
  }

  onRatingClicked(rating: number): void {
    console.log('rating clicked', rating);
  }
}
