import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!:FormGroup;
  submitted = false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerform = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      firstname : new FormControl('',[Validators.required]),
      lastname : new FormControl('',[Validators.required]),
      dob : new FormControl('',[Validators.required]),
      role : new FormControl('',[Validators.required]),
    })
  }

  handleSubmit() {
     this.submitted = true;

     if(this.registerform.invalid) {
       return;
     }

     let reqObj = {
        email:this.registerform.value.email,
        password:this.registerform.value.password,
        firstname:this.registerform.value.firstname,
        lastname:this.registerform.value.lastname,
        dob:this.registerform.value.dob,
        role:this.registerform.value.role
     }

     this.authService.Register(reqObj).subscribe((result:any) => {
        console.log(result,"result>")
        if(result.code == 200 ) {
           this.router.navigate(['/login']);
        }
     },(err:any) => {
      console.log(err,"err")
     })

  }

}
