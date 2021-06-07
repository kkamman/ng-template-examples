import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-with-data-container',
  template: `
    <div class="container">
        <div class="header-container">
            Vegetables
        </div>
        <div *ngFor="let vegetable of vegetables; index as i" class="content-container">
            <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: vegetable, index: i }"></ng-container>
        </div>
    </div>
  `
})
export class TemplateWithDataContainerComponent {
  @Input() contentTemplate!: TemplateRef<any>;
  vegetables: string[] = [
    'Tomato',
    'Cucumber',
    'Cabbage',
    'Onion'
  ];
}
