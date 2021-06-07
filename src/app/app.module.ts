import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateWithDataModule } from './examples/template-with-data/template-with-data.module';
import { TemplateWithDefaultModule } from './examples/template-with-default/template-with-default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateWithDefaultModule,
    TemplateWithDataModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
