import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from '../../partails/form/form.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormModule
  ]
})
export class HomeModule { }
