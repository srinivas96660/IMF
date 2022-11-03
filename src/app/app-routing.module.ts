import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { Pagenotfound404pageComponent } from './components/pagenotfound404page/pagenotfound404page.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent,  children:[
    {path:"students", component:StudentsComponent},
    {path:"all-students", component:AllStudentsComponent},
    {path: "student-details", component:StudentDetailsComponent}

  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:Pagenotfound404pageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
