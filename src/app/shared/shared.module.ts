import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUrlPrefixPipe } from './add-url-prefix';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces';

@NgModule({
  imports: [CommonModule],
  declarations: [AddUrlPrefixPipe, StarComponent, ConvertToSpacesPipe],
  exports: [
    AddUrlPrefixPipe,
    ConvertToSpacesPipe,
    StarComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
