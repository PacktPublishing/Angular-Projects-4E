import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {
  collection,
  collectionData,
  Firestore,
  doc,
  updateDoc
} from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { Order } from '../order/order';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Item } from '../item';
import { menu } from '../menu';

@Component({
  selector: 'app-table-list',
  imports: [MatGridListModule, MatCardModule, MatDivider, MatListModule, CurrencyPipe],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss'
})
export class TableList {
  private dialog = inject(MatDialog);
  private firestore = inject(Firestore);
  private tableCol = collection(this.firestore, 'tables');
  readonly tables = toSignal(collectionData(this.tableCol));

  select(no: number) {
    this.dialog.open(Order, {
      width: '500px',
      data: no
    }).afterClosed().subscribe(async items => {
      if (items) {
        const tableDoc = doc(this.tableCol, no.toString());
        await updateDoc(tableDoc, {items});
      }
    });
  }

  getTotal(items: Item[]) {
    return items.map(item => {
      return item.qty * menu.flatMap(mu => mu.items).find(i => i.name === item.name)!.price
    }).reduce((a: number, b: number) => a + b);
  }
}
