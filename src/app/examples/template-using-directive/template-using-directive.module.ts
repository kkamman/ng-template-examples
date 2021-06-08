import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateUsingDirectiveComponent } from './template-using-directive.component';
import { TemplateUsingDirectiveContainerComponent } from './template-using-directive-container.component';
import { TemplateDirective } from './template.directive';



@NgModule({
  declarations: [
    TemplateUsingDirectiveComponent,
    TemplateUsingDirectiveContainerComponent,
    TemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateUsingDirectiveComponent,
    TemplateUsingDirectiveContainerComponent,
    TemplateDirective
  ]
})
export class TemplateUsingDirectiveModule { }
