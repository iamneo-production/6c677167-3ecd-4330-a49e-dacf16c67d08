import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Edituser } from 'src/app/classes/edituser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewusersComponent implements OnInit {
  userlists?:Edituser[];
  username?:String;
  email?:String;
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.roleCheck();
    this.userservice.findall().subscribe((data:any)=>{
      this.userlists=data;
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
  valueFormatter(active:Boolean){
    if(active){
      return "Active";
    }else{
      return "InActive";
    }
  }
  deleteElement(id:any){
    console.log(id);
    this.email=id;
    this.userservice.deleteElement(this.email).subscribe((data)=>{
      if(data){
        this.reloadCurrentPage();
      }
    })
  }
  reloadCurrentPage() {
    window.location.reload();
   }
   roleCheck(){
    if(this.authState()){
    this.userservice.typeofUser(this.username).subscribe((data)=>{
      if(data.toString()=="user"){
        this.router.navigate(['home']);
      }
    })
  }else{
    this.router.navigate(['admin/login']);
  }
}
}
