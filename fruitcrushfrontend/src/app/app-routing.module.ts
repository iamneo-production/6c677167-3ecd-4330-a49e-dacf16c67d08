import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomepageComponent},
  {path:'admin/signup',component:AdminsignupComponent},
  {path:'admin/login',component:AdminloginComponent},
  {path:'orders',component:OrderComponent},
  {path:'cart',component:CartComponent},
  {path:'admin/users',component:ViewusersComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'admin/orders',component:ViewordersComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'editProduct/:id',component:EditproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
