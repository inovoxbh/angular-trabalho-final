import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SeasonsPageComponent } from './views/seasons-page/seasons-page.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { SeasonComponent } from './components/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SeasonsPageComponent,
    SeasonsComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
