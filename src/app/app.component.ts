import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Template with default</h2>
    <app-template-with-default></app-template-with-default>
    <h2>Template with data</h2>
    <app-template-with-data></app-template-with-data>
    <h2>Template using directive</h2>
    <app-template-using-directive></app-template-using-directive>
    <h2>Template using reference</h2>
    <app-template-using-reference></app-template-using-reference>
  `
})
export class AppComponent { }
