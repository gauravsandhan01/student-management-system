import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
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

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
