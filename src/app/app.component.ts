import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Recipe Manager';
  loadedView = 'recipe';

  onNavigate(selectedView: string) {
    console.log(selectedView)
    this.loadedView = selectedView;
  }
}
