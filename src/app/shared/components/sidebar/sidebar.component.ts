import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Students', path: '/students' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Courses', path: '/courses' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Exams', path: '/exams' },
    { label: 'Marks', path: '/marks' },
    { label: 'Fees', path: '/fees' },
    { label: 'Reports', path: '/reports' },
    { label: 'Profile', path: '/profile' }
  ];
}
