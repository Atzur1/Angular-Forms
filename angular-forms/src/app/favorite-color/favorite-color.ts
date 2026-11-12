import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-favorite-color',
  styleUrl: './favorite-color.css',
  templateUrl: './favorite-color.html',
})
export class FavoriteColor {
  favoriteColorControl = new FormControl('');

  updateName() {
    this.favoriteColorControl.setValue('Magenta');
  }
}
