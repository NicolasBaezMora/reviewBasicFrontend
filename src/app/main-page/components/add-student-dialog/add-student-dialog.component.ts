import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models/Student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent implements OnInit {

  public formStudent: Student = {
    name: "",
    lastname: ""
  };
 
  constructor(
    private studentsService: StudentsService,
    private thisDialogRef: MatDialogRef<AddStudentDialogComponent>,
  ) { }

  ngOnInit(): void {

  }

  public addStudent() {
    this.studentsService.addStudent(this.formStudent)
      .subscribe(() => this.thisDialogRef.close());
  }

}
