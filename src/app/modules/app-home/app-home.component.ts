import { Component } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      HOME
    </div>
    <pre> {{messages$ | async | json}} </pre>
  `,
  styleUrl: './app-home.component.css'
})
export class AppHome {
  messages$ = this.homeService.messages$;

  constructor (private homeService: HomeService) {
    this.homeService.fetchMessages();
  }
}