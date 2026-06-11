import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    name: 'Admin User',
    email: 'admin@school.com',
    role: 'Administrator',
    phone: '+91 98765 43210'
  };
}
