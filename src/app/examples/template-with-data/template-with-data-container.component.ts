import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-with-data-container',
  template: `
    <div class="container">
        <div class="header-container">
            Vegetables
        </div>
        <div *ngFor="let entry of data; index as i" class="content-container">
            <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: entry, index: i }"></ng-container>
        </div>
    </div>
  `
})
export class TemplateWithDataContainerComponent {
  @Input() data: string[] = [];
  @Input() contentTemplate!: TemplateRef<any>;
}
