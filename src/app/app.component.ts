import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentComponent: string = 'recipes'

  onNavigate(component: string) {
    this.currentComponent = component
  }
}
