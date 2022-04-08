import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartlists?:Cart[];
  username?:String;
  constructor(private productservice:ProductService,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.productservice.ViewCart().subscribe((data:any)=>{
      this.cartlists=data;
    })
  }
  placeOrder(){
    if(this.cartlists!=null){
    this.productservice.addOrder(this.cartlists).subscribe((data)=>{
      if(data){
        this.username=String(localStorage.getItem("token"));
        this.productservice.deleteCart(this.username).subscribe((data)=>{
          if(data){
            this.router.navigate(['/orders'])
          }
        })
      }
      else{
        //not
      }
    });
  }
}
logout(){
  this.username=String(localStorage.getItem("token"));
  this.userservice.logout(this.username).subscribe((data)=>{
    if(data){
      localStorage.removeItem("token");
      this.pageController();
    }
  })
}
authState(){
  if(localStorage.getItem("token")!=null){
    return true;
  }else{
    return false
  }
}
pageController(){
  if(!this.authState()){
    this.router.navigate(['/']);
  }
}
}
