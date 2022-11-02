import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
      address:new FormGroup(
        {
          city: new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),

          pin:new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)])
        }
      ),
      educations:new FormArray([]),
      sourcetype:new FormControl(),
      sourceFrom:new FormControl(),
      referralName:new FormControl()


    }
  )
  get educationsFormArray(){
    return this.studentForm.get('educations') as FormArray;

  }
  add(){[
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)])
        }
      )
    )
  ]
}
delete(i:number){
  this.educationsFormArray.removeAt(i);
}

  constructor() { }

  ngOnInit(): void {
  }
submit(){
  console.log(this.studentForm);
  this.studentForm.markAllAsTouched();
}

}
