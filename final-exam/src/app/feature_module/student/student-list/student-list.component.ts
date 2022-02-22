import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../service/student/student.service';
import {Student} from '../../../model/student';
import {StudentDeleteComponent} from '../student-delete/student-delete.component';
import {MatDialog} from '@angular/material/dialog';
import {StudentEditComponent} from '../student-edit/student-edit.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService,
              public dialog: MatDialog) {
  }

  students: Student[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe(list => {
      console.log(list);
      this.students = list;
      // this.sortedData = this.customers.slice();
    });
  }

  openDialogDelete(student: any) {
    const dialogRef = this.dialog.open(StudentDeleteComponent, {data: student});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.studentService.getAll();
      }
    });
  }

  openDialogEdit(student: any) {
    const dialogRef = this.dialog.open(StudentEditComponent, {data: student});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'edit') {
        this.studentService.getAll();
      }
    });
  }
}
