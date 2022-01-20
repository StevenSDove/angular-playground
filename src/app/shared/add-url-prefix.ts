import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUrlPrefix',
})
export class AddUrlPrefixPipe implements PipeTransform {
  urlPrefix: string =
    'https://stackblitz.com/files/sdove-ps-angular-getting-started/github/StevenSDove/ps-angular-gettings-started/master/src/';

  transform(value: string): string {
    return this.urlPrefix + value;
  }
}
