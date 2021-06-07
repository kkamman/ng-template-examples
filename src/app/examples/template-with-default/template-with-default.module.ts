import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateWithDefaultComponent } from './template-with-default.component';
import { TemplateWithDefaultContainerComponent } from './template-with-default-container.component';



@NgModule({
  declarations: [
    TemplateWithDefaultComponent,
    TemplateWithDefaultContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateWithDefaultComponent,
    TemplateWithDefaultContainerComponent
  ]
})
export class TemplateWithDefaultModule { }
