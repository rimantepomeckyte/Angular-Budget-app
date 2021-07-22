import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem): void {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: item,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
