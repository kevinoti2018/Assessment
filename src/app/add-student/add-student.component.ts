import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../interfaces';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';
// import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],

})
export class AddStudentComponent implements OnInit {
  addStudentForm!: FormGroup;
  submitted = false;

  constructor( private studentService:StudentserviceService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@thejitu\.com$/)]],
      cohort: ['', Validators.required]
    });
  }

  get formControls() {
    return this.addStudentForm.controls;
  }

  addStudent() {
    this.submitted = true;
  
    if (this.addStudentForm.invalid) {
      return;
    }
  
    const { name, email, cohort } = this.addStudentForm.value;
  
    const newStudent: Student = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      cohort
    };
  
    this.studentService.addstudents(newStudent);
    console.log(newStudent)
    this.addStudentForm.reset();
    this.submitted = false;
  }
  
}