import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UserService } from './service/user.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { ProductService } from './service/product.service';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AdminloginComponent,
    AdminsignupComponent,
    CartComponent,
    OrderComponent,
    AddproductComponent,
    ViewordersComponent,
    ViewusersComponent,
    AddproductComponent,
    EditproductComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
