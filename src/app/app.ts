import { Component } from '@angular/core';
import { FavoriteColor } from './favorite-color/favorite-color';
import { ProfileEditor } from './profile-editor/profile-editor';

@Component({
  selector: 'app-root',
  imports: [FavoriteColor, ProfileEditor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
