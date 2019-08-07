import { DropdownModule } from './../../partails/dropdown/dropdown.module';
import { UsersModule } from './../../partials/users/users.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from '../../partails/form/form.module';
import { NavModule } from '../../partails/nav/nav.module';
import { DropdownComponent } from '../../partails/dropdown/dropdown.component';

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
    FormModule,
	NavModule,
	UsersModule,
	DropdownModule
  ]
})
export class HomeModule { }
