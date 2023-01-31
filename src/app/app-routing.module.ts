import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NoFoundComponent } from './no-found/no-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path:'', redirectTo:'./dashboard', pathMatch:'full'},
  {path:'**', component:NoFoundComponent}
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
