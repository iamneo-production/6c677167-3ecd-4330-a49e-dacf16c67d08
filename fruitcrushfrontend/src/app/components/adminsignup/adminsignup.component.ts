import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidation } from 'src/app/confirm-validation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  user:User=new User();
  registerForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
    submitted = false;
  constructor(private userservice:UserService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.pageController();
    console.log(localStorage.getItem("token"));
    this.registerForm =this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      username : ['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.minLength(10)]],
      confirmPassword :['',Validators.required]
    },
    {validators:[ConfirmValidation.match('password', 'confirmPassword')]}
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid");
    }
    else{
      console.log("valid");
      this.addUser();
    }
}
  addUser(){
    this.user.active=false;
    this.user.role="admin";
    console.log(this.user);
    this.userservice.addadminUser(this.user).subscribe((data)=>{
      if(data){
        this.pageController();
      }
    });
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
      this.router.navigate(["/addProduct"]);
    }
  }
}
