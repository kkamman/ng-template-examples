import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateWithDataComponent } from './template-with-data.component';
import { TemplateWithDataContainerComponent } from './template-with-data-container.component';



@NgModule({
  declarations: [
    TemplateWithDataComponent,
    TemplateWithDataContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateWithDataComponent,
    TemplateWithDataContainerComponent
  ]
})
export class TemplateWithDataModule { }
