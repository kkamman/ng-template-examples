import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateUsingDirectiveModule } from './examples/template-using-directive/template-using-directive.module';
import { TemplateUsingReferenceModule } from './examples/template-using-reference/template-using-reference.module';
import { TemplateWithDataModule } from './examples/template-with-data/template-with-data.module';
import { TemplateWithDefaultModule } from './examples/template-with-default/template-with-default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateWithDefaultModule,
    TemplateWithDataModule,
    TemplateUsingDirectiveModule,
    TemplateUsingReferenceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
