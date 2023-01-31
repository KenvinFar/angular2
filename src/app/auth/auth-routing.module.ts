import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //rutas protegidas
  {path:'log/reg', component:AuthComponent},
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AuthRoutingModule { }
