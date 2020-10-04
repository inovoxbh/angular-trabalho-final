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
import { RoundsPageComponent } from './views/rounds-page/rounds-page.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { RoundComponent } from './components/round/round.component';
import { ResultsPageComponent } from './views/results-page/results-page.component';
import { GridPositionComponent } from './components/grid-position/grid-position.component';
import { ConstructorsPageComponent } from './views/constructors-page/constructors-page.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SeasonsPageComponent,
    SeasonsComponent,
    SeasonComponent,
    RoundsPageComponent,
    RoundsComponent,
    RoundComponent,
    ResultsPageComponent,
    GridPositionComponent,
    ConstructorsPageComponent,
    TeamComponent
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
