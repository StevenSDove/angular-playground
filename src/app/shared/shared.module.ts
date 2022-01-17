import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUrlPrefixPipe } from './add-url-prefix';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [AddUrlPrefixPipe, StarComponent],
  exports: [AddUrlPrefixPipe, StarComponent, CommonModule, FormsModule],
})
export class SharedModule {}
