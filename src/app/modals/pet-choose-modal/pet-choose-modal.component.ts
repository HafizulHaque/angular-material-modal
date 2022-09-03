import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-choose-modal',
  templateUrl: './pet-choose-modal.component.html',
  styleUrls: ['./pet-choose-modal.component.css'],
})
export class PetChooseModalComponent implements OnInit {
  favPet: string = 'Dog';

  constructor(
    public dialogRef: MatDialogRef<PetChooseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close(null);
  }
}
