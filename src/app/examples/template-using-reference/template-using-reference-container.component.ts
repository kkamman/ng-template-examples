import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-using-reference-container',
  template: `
    <div class="container">
      <div class="header-container">
        <ng-container [ngTemplateOutlet]="headerTemplate"></ng-container>
      </div>
      <div class="content-container">
        <ng-container [ngTemplateOutlet]="contentTemplate"></ng-container>
      </div>
    </div>
  `
})
export class TemplateUsingReferenceContainerComponent {
  @ContentChild('header') headerTemplate!: TemplateRef<any>;
  @ContentChild('content') contentTemplate!: TemplateRef<any>;
}
