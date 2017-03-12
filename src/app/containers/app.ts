import { Component } from '@angular/core';
import '../../../public/css/styles.css';

@Component({
  selector: 'courses-app',
  template: `
    <main>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent { }
