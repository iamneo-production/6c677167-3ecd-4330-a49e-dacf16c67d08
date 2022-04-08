import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/classes/orders';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewordersComponent implements OnInit {
  orderlists?:Orders[];
  username?:String;
  constructor(private productservice:ProductService,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.roleCheck();
    this.productservice.allOrder().subscribe((data:any)=>{
      this.orderlists=data;
    })
  }
  logout(){
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
      this.router.navigate(['admin/login']);
    }
  }
  roleCheck(){
    if(this.authState()){
    this.userservice.typeofUser(this.username).subscribe((data)=>{
      if(String(data)=="user"){
        this.router.navigate(['home']);
      }
    })
  }else{
    this.router.navigate(['admin/login']);
  }
}
}
