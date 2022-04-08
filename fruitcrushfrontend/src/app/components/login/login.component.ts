import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';
import { AbstractControl, FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
  user:User=new User();
  tempuser:User=new User();
  constructor(private userservice:UserService, private formBuilder: FormBuilder,private router: Router) { }
  submitted = false;

  ngOnInit(): void {
    this.pageController();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ]
    })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("invalid");
    }
    else{
      console.log("valid");
      this.authUser();
    }
}
  authUser(){
    this.user.active=false;
    console.log(this.userservice.authuser(this.user).subscribe((data)=>{
      if(data){
        console.log(this.user.emailId);
        localStorage.setItem("token",String(this.user.emailId));
        this.pageController();
      }}));
  }
  authState(){
    if(localStorage.getItem("token")!=null){
      return true;
    }else{
      return false
    }
  }
  pageController(){
    if(this.authState()){
      this.router.navigate(["/home"]);
    }
  }
}
