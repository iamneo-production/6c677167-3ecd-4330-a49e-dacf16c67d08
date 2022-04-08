import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
  orderlists?:Cart[];
  username?:String;
  constructor(private productservice:ProductService,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.productservice.ViewOrder(this.username).subscribe((data:any)=>{
      this.orderlists=data;
    })
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
