import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup=new FormGroup(
    {
      email:new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required])
    }
  )

  constructor(private loginServices:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.loginServices.login(this.loginform.value).subscribe(
    (data:any)=>{
      this.router.navigateByUrl("/dashboard");
    },
    (err:any)=>{
      alert("invalid login details")
    }
  )
}
}
