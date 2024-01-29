import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SAS PoC Project - Boilerplate';
  showSpinner = false;
  loader() {
    this.showSpinner = !this.showSpinner;
  }
}
