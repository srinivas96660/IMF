import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  public students:any=[];
  public column:string='';
  public order:string='';

  constructor(private studentservices:StudentService) {

    this.studentservices.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

   }
   pagination(page:number){

    this.studentservices.getPagedStudents(page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

   }
   sort(){
    this.studentservices.getSortedStudents(this.column, this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
    
   }

  ngOnInit(): void {
  }

}
