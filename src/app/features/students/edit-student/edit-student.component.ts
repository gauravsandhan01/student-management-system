import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student = {
    name: 'Aarav Patel',
    grade: '10',
    section: 'A',
    email: 'aarav.patel@example.com'
  };

  saveStudent(): void {
    console.log('Student updated:', this.student);
  }
}
