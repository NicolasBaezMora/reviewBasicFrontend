import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class StudentsService {

  private baseUrl: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }


  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  public deleteStudentById(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/students/${id}`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student);
  }
  
}
