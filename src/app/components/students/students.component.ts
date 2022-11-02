import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      mobile:new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      email:new FormControl(null, [Validators.required]),
      batch:new FormControl(null, [Validators.required]),


    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
