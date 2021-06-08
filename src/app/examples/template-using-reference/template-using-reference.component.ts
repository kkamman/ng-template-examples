import { Component } from '@angular/core';

@Component({
  selector: 'app-template-using-reference',
  template: `
    <app-template-using-reference-container>
      <ng-template #header>
        Header template using reference
      </ng-template>
      <ng-template #content>
        Content template using reference
      </ng-template>
    </app-template-using-reference-container>
  `
})
export class TemplateUsingReferenceComponent { }
