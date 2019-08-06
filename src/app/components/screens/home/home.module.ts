import { UsersModule } from './../../partials/users/users.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from '../../partails/form/form.module';
import { NavModule } from '../../partails/nav/nav.module';

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
	UsersModule
  ]
})
export class HomeModule { }
