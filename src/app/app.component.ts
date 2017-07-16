import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Recipe Manager';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD106KfIs05gXj_prujccp-YTi76V2s9ro',
      authDomain: 'recipe-book-demo-ng.firebaseapp.com'
    });
  }

}
