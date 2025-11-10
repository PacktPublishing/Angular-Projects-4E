import { Component, inject, viewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { menu } from '../menu';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-order',
  imports: [
    MatDialogModule,
    MatListModule,
    MatButton,
    MatDivider,
    OrderItem
  ],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {
  private dialogRef = inject(MatDialogRef);
  private readonly orderItems = viewChildren(OrderItem);

  data = inject(MAT_DIALOG_DATA);
  menu = menu;

  ok() {
    const items = this.orderItems()
      .filter(item => item.qty())
      .map(i => {
        return {
          name: i.name(),
          qty: i.qty()
        }
      });
    this.dialogRef.close(items);
  }
}
