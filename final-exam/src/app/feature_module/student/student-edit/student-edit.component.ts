import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../../service/student/student.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TutorService} from '../../../service/tutor/tutor.service';
import {Student} from '../../../model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup;
  students: Student[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private tutorService: TutorService,
              private studentService: StudentService,
              private router: Router,
              private dialogRef: MatDialogRef<StudentEditComponent>) { }

  ngOnInit(): void {
    this.getAllTutor();
    this.studentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      gro: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      tutor: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(09[01]\\d{7})|(((84)[(90)(91)])\\d{8}$)')]),
    });
    if (this.data){
      this.studentForm.controls.id.setValue(this.data.id);
      this.studentForm.controls.name.setValue(this.data.name);
      this.studentForm.controls.gro.setValue(this.data.gro);
      this.studentForm.controls.title.setValue(this.data.title);
      this.studentForm.controls.tutor.setValue(this.data.tutor);
      this.studentForm.controls.email.setValue(this.data.email);
      this.studentForm.controls.phone.setValue(this.data.phone);
    }
  }

  update(id: number) {
    const student = this.studentForm.value;
    this.studentService.update(id, student).subscribe(customerData => {
      alert('update success');
      this.dialogRef.close('edit');
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
