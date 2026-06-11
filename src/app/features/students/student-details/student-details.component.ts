import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student = {
    id: 'STU101',
    name: 'Aarav Patel',
    grade: '10',
    section: 'A',
    email: 'aarav.patel@example.com',
    phone: '+91 98765 43210',
    status: 'Active'
  };

  // Demo photo (Google-hosted example). Used when `student.photo` is not provided.
  defaultPhotoUrl = 'https://www.gstatic.com/webp/gallery/1.jpg';

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && img.src !== this.defaultPhotoUrl) {
      img.src = this.defaultPhotoUrl;
    }
  }
}
