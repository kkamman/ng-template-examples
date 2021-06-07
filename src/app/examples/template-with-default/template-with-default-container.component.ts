import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-with-default-container',
  template: `
  <ng-template #defaultHeaderTemplate>
    Default header template.
  </ng-template>
  <ng-template #defaultContentTemplate>
    Default content template.
  </ng-template>
  <div class="container">
      <div class="header-container">
        <ng-container [ngTemplateOutlet]="headerTemplate ? headerTemplate : defaultHeaderTemplate"></ng-container>
      </div>
      <div class="content-container">
        <ng-container [ngTemplateOutlet]="contentTemplate ? contentTemplate : defaultContentTemplate"></ng-container>
      </div>
  </div>
  `
})
export class TemplateWithDefaultContainerComponent {
  @Input() headerTemplate?: TemplateRef<any>;
  @Input() contentTemplate?: TemplateRef<any>;
}
