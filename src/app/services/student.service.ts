import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  getstudents():Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students")
  }

  getPagedStudents(page:number):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page="+page)
  }
  getSortedStudents(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortedBy="+column+ '&order='+order);
  }
  getFilterStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+term);
  }
  createStudents(data:any):Observable<any>{
    return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students", data);
  }
}
