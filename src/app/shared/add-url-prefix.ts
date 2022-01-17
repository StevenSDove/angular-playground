import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUrlPrefix',
})
export class AddUrlPrefixPipe implements PipeTransform {
  urlPrefix: string =
    'https://stackblitz.com/files/sdove-angular-playground/github/StevenSDove/angular-playground/master/src/';

  transform(value: string): string {
    return this.urlPrefix + value;
  }
}
