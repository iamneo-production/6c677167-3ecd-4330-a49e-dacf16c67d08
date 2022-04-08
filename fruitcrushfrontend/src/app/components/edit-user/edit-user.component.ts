import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Edituser } from 'src/app/classes/edituser';
import { User } from 'src/app/classes/user';
import { ConfirmValidation } from 'src/app/confirm-validation';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:Edituser=new User();
  username?:String;
  registerForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
    submitted = false;
  constructor(private userservice:UserService,private formBuilder: FormBuilder,private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.roleCheck();
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
      this.updateUser();
    }
}
  updateUser(){
    this.user.active=false;
    this._Activatedroute.paramMap.subscribe(params => { 
      this.user.id = Number(params.get('id'));
  });
    console.log(this.user);
    this.userservice.updateUser(this.user).subscribe((data)=>{
      if(data){
       this.pageController();
      }
    });
  }
  pageController(){
    this.router.navigate(['admin/users'])
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
      if(data=="user"){
        this.router.navigate(['home']);
      }
    })
  }else{
    this.router.navigate(['admin/login']);
  }
}
}