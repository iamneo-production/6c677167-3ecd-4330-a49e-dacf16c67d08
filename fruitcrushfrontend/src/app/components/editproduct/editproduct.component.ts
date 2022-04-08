import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditproductComponent implements OnInit {
  product:Product=new Product();
  username?:String;
  constructor(private productservice:ProductService,private router:Router,private _Activatedroute:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.roleCheck();
  }
  updateProduct(){
    this._Activatedroute.paramMap.subscribe(params => { 
      this.product.id = Number(params.get('id'));
  });
    console.log(this.product);
    this.productservice.updateProduct(this.product).subscribe((data)=>{
      if(data){
       this.pageController();
      }
    });
  }
  pageController(){
    this.router.navigate(['addProduct'])
  }
  authState(){
    if(localStorage.getItem("token")!=null){
      return true;
    }else{
      return false
    }
  }
  roleCheck(){
    if(this.authState()){
    this.userservice.typeofUser(this.username).subscribe((data:String)=>{
      console.log(data);
      if(String(data)=="user"){
        this.router.navigate(['home']);
      }
    })
  }else{
    this.router.navigate(['admin/login']);
  }
}
}
