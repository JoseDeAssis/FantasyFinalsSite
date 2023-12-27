import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RostersComponent } from './components/rosters/rosters.component';
import { SurveyButtonsComponent } from './components/survey-buttons/survey-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RostersComponent,
    SurveyButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
