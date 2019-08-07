import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ],
  exports:[
	SearchComponent,
	ReactiveFormsModule
  ]
})
export class SearchModule { }
