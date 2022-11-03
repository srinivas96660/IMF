import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup(
        {
          city: new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),

          pin:new FormControl()
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
          percentage:new FormControl()
        }
      )
    )
  ]
}

  constructor(private _studentservices:StudentService) { }

  ngOnInit(): void {
  }
  submit(){
    this._studentservices.createStudents(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("created Sucessfully")
      },
      (err:any)=>{
        alert('internal server error')
      }
    )
  }

}
