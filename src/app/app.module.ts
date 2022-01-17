import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUrlPrefixPipe } from './shared/add-url-prefix';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    AddUrlPrefixPipe,
    StarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
