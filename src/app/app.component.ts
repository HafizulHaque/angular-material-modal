import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PetChooseModalComponent } from './modals/pet-choose-modal/pet-choose-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userName: string = 'user';
  retrivedFavPet: any = 'Dog';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openChosePetModal() {
    const dialogRef = this.dialog.open(PetChooseModalComponent, {
      backdropClass: 'cstm-backdrop',
      hasBackdrop: false,
      width: '50vw',
      height: '80vh',
      data: { userName: this.userName },
    });

    dialogRef.afterClosed().subscribe((pet) => {
      this.retrivedFavPet = pet;
    });
  }
}
