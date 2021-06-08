import { Component } from '@angular/core';

@Component({
  selector: 'app-template-using-directive',
  template: `
    <app-template-using-directive-container>
      <ng-template appTemplate="header">
        Header template using directive
      </ng-template>
      <ng-template appTemplate="content">
        Content template using directive
      </ng-template>
    </app-template-using-directive-container>
  `
})
export class TemplateUsingDirectiveComponent { }
