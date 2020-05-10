import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapas';
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 3500);
  }
}
