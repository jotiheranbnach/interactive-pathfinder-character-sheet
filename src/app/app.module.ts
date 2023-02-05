import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesComponent } from './attributes/attributes.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SkillsComponent } from './skills/skills.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { ArmorComponent } from './armor/armor.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AttributesComponent,
    SkillsComponent,
    SavingThrowsComponent,
    ArmorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
