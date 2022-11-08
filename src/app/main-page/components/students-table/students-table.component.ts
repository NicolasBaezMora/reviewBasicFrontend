import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/Student';
import { StudentsService } from '../../services/students.service';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  public students: Student[] = [];

  constructor(
    private studentsService: StudentsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents() {
    this.studentsService.getAllStudents()
      .subscribe(
        dataStudents => {
          this.students = dataStudents;
        }
      );
  }

  public deleteStudent(studentId: number) {
    this.studentsService.deleteStudentById(studentId)
      .subscribe(() => this.getStudents());
      
  }

  public addStudent() {
    const dialogRef = this.dialog.open(
      AddStudentDialogComponent,
      {
        width: "50%"
      }
    );
    dialogRef.afterClosed()
      .subscribe(() => this.getStudents());
  }

}
