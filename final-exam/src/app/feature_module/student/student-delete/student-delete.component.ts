import {Component, Inject, OnInit} from '@angular/core';
import {StudentService} from '../../../service/student/student.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {TutorService} from '../../../service/tutor/tutor.service';
import {Student} from '../../../model/student';


@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  studentForm: FormGroup;
  students: Student[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private studentService: StudentService,
              private router: Router,
              private tutorService: TutorService,
              private dialogRef: MatDialogRef<StudentDeleteComponent>) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      gro: new FormControl(''),
      title: new FormControl(''),
      tutor: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),

    });
    if (this.data) {
      this.studentForm.controls.id.setValue(this.data.id);
      this.studentForm.controls.name.setValue(this.data.name);
      this.studentForm.controls.gro.setValue(this.data.gro);
      this.studentForm.controls.title.setValue(this.data.title);
      this.studentForm.controls.tutor.setValue(this.data.tutor);
      this.studentForm.controls.email.setValue(this.data.email);
      this.studentForm.controls.phone.setValue(this.data.phone);
    }
    this.getAllTutor();
  }

  delete(id: number) {
    // id = this.id;
    this.studentService.delete(id).subscribe(student => {
      console.log(student);
      // alert('delete success');
      this.dialogRef.close('delete'); // bien delete la bien nam ben trang list dong 77
      alert('delete success');
    }, error => {
    }, () => {
      this.router.navigate(['/student/list']);
    });
  }
  getAllTutor(){
    this.tutorService.getAll().subscribe(value => {
      this.students = value;
    });
  }
}
