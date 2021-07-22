import { Component, Inject, OnInit } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>, @Inject(MAT_DIALOG_DATA) public item: BudgetItem) {
  }

  ngOnInit(): void {
  }

  onSubmited(updatedItem: BudgetItem): void {
    this.dialogRef.close(updatedItem);
  }
}