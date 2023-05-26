import { Injectable } from '@angular/core';
import { Student } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students: Student[]=[
    {
      id:122,
      name:'kevin',
      email:'k@thejitu.com',
      cohort:'angular'
    },
    {
      id:123,
      name:'jonathan',
      email:'j@thejitu.com',
      cohort:'angular'
    },
    {
      id:124,
      name:'brian',
      email:'b@thejitu.com',
      cohort:'angular'
    },
  ]
  constructor() { }
  getstudents():Student[]{
    return this.students
  }
  addstudents(newStudent:Student){
    this.students.push(newStudent)
  }
}
