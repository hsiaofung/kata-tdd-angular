import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Roman } from './class';
import { GildedRoseComponent } from './gildedRose/gildedRose.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    GildedRoseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kata';

  convert(romanNumeral:string){
    //Refactor: Move Class
    const arabic = new Roman()
    return arabic.convert(romanNumeral)
  }
}
