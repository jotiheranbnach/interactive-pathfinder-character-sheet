import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesComponent } from './attributes/attributes.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AttributesComponent,
    SkillsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
