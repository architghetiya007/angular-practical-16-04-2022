import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  submitted = false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }

  handleSubmit() {
    this.submitted = true;

     if(this.loginform.invalid) {
       return;
     }

     let reqObj = {
        email:this.loginform.value.email,
        password:this.loginform.value.password,
     }

     this.authService.Login(reqObj).subscribe((result:any) => {
        console.log(result,"result>")
        if(result.code == 200 ) {
          localStorage.setItem('token',result.data.token);
           this.router.navigate(['/blog']);
        }
     },(err:any) => {
      console.log(err,"err")
     })
  }

}
