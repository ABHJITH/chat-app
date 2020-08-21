import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD7ZyGN4-MWLT3uPWBNjvCh8x9_sRY0aas',
  databaseURL: 'https://chat-test-95ef2.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
