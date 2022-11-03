import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagenotfound404pageComponent } from './components/pagenotfound404page/pagenotfound404page.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentsComponent } from './components/students/students.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Pagenotfound404pageComponent,
    StudentsComponent,
    AllStudentsComponent,
    StudentDetailsComponent
   
   
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
