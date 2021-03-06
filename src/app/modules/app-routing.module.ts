import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../views/home-page/home-page.component'
import { SeasonsPageComponent } from '../views/seasons-page/seasons-page.component'
import { RoundsPageComponent } from '../views/rounds-page/rounds-page.component'
import { ResultsPageComponent } from '../views/results-page/results-page.component'
import { ConstructorsPageComponent } from '../views/constructors-page/constructors-page.component'

// definição das rotas da aplicação
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'seasons', component: SeasonsPageComponent },
  { path: 'seasons/:season', component: RoundsPageComponent },
  { path: 'seasons/:season/:round/grid', component: ResultsPageComponent },
  { path: 'seasons/:season/:round/teams', component: ConstructorsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
