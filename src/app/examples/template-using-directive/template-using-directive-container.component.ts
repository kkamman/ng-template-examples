import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { TemplateDirective } from './template.directive';

@Component({
  selector: 'app-template-using-directive-container',
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
export class TemplateUsingDirectiveContainerComponent implements AfterContentInit {
  @ContentChildren(TemplateDirective) templates?: QueryList<TemplateDirective>;
  headerTemplate!: TemplateRef<any>;
  contentTemplate!: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templates?.forEach(item => {
      if (item.name === 'header') {
        this.headerTemplate = item.template;
      } else if (item.name === 'content') {
        this.contentTemplate = item.template;
      }
    });
  }
}
