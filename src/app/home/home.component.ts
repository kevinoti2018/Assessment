import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentserviceService } from '../services/studentservice.service';
import { Student } from '../interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  students:Student[]=[]
  constructor(private studentService:StudentserviceService){}
  ngOnInit(): void {
    this.students= this.studentService.getstudents()
  }
}
