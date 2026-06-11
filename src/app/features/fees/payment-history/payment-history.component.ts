import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent {
  payments = [
    { student: 'Aarav Patel', amount: 1200, status: 'Paid', date: '2026-05-15' },
    { student: 'Priya Singh', amount: 1200, status: 'Pending', date: '2026-06-01' },
    { student: 'Mira Das', amount: 1200, status: 'Paid', date: '2026-05-15' }
  ];
}
