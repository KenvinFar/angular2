import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent
  ]
})
export class PagesModule { }
