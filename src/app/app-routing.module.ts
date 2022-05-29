import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'products' , component : ProductsComponent},
  {path : 'cart' , component : CartComponent},
  {path : 'admin' , component : AdminComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'products/single', component : SingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ProductsComponent, CartComponent, LoginComponent, AdminComponent,SingleComponent]
