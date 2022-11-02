import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:FormGroup=new FormGroup(
    {
      email:new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required])
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
