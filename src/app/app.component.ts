import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';

  postTexts = [
    'Hallo ich bin hier,,, und nur ein Hamster',
    'Hihihihihi',
    'uhuhuhuhuhuh',
    'kasjdoad',
    'adsfad'];

  postImage = [
    'assets/img/hamster-bella.jpg',
    'assets/img/hamster-bella-due.jpg',
    'assets/img/hamster-eat.jpg',
    'assets/img/hamster-house.jpg',
    'assets/img/hamster-stay.jpg'
  ];
}
