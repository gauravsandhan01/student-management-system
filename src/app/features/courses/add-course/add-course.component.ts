import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course = { code: '', name: '', instructor: '', seats: '' };

  addCourse(): void {
    console.log('New course added:', this.course);
  }
}
