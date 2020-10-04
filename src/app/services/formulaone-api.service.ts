import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

const withBaseUrl = path => `https://ergast.com/api/f1/${path}`;

export interface ISeasonItem {
  season: string,
  url: string
}

export interface IRoundItem {
  season: string,
  round: string,
  url: string,
  raceName: string,
  Circuit: {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: {
      lat: string,
      long: string,
      locality: string,
      country: string
    }
  }
  date: string,
  time: string
}

export interface ISeasons {
  MRData: {
    xmlns: string,
    series: string, 
    url: string, 
    limit: string,
    offset: string,
    total: string,
    SeasonTable: {
      Seasons: Array<ISeasonItem>;
    }
  }
}

export interface IRounds {
  MRData: {
    xmlns: string,
    series: string, 
    url: string, 
    limit: string,
    offset: string,
    total: string,
    RaceTable: {
      season: string
      Races: Array<IRoundItem>;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormulaoneApiService {
  // instancia no construtor a função que permitirá a execução de chamadas HTTP
  constructor(private http: HttpClient) { }

  // método que irá buscar todas as seasons retornando um Observable
  getAllSeasons(): Observable<any> {
    // busca as seasons retornando um array do tipo ISeasonsResult
    return this.http.get<ISeasons>(withBaseUrl('seasons.json?limit=71'));
  }

  getRounds(season: string): Observable<any> {
    return this.http.get<IRounds>(withBaseUrl(`${season}.json`));
  }  
}
