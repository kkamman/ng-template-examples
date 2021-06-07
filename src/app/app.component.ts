import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Template with default</h2>
    <app-template-with-default></app-template-with-default>
    <h2>Template with data</h2>
    <app-template-with-data></app-template-with-data>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-template-examples';
}
