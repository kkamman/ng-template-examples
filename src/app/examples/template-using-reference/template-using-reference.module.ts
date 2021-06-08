import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateUsingReferenceComponent } from './template-using-reference.component';
import { TemplateUsingReferenceContainerComponent } from './template-using-reference-container.component';



@NgModule({
  declarations: [
    TemplateUsingReferenceComponent,
    TemplateUsingReferenceContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateUsingReferenceComponent,
    TemplateUsingReferenceContainerComponent
  ]
})
export class TemplateUsingReferenceModule { }
