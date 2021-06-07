import { Component } from '@angular/core';

@Component({
  selector: 'app-template-with-default',
  template: `
    <ng-template #headerTemplate>This is a custom header template.</ng-template>
    <app-template-with-default-container [headerTemplate]="headerTemplate">
    </app-template-with-default-container>
  `
})
export class TemplateWithDefaultComponent { }
