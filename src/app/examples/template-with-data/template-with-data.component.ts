import { Component } from '@angular/core';

@Component({
  selector: 'app-template-with-data',
  template: `
    <ng-template #contentTemplate let-vegetable let-index="index">
        {{index}}. {{vegetable}}!
    </ng-template>
    <app-template-with-data-container [contentTemplate]="contentTemplate">
    </app-template-with-data-container>
  `
})
export class TemplateWithDataComponent { }