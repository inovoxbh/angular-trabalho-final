import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

const withBaseUrl = path => `https://ergast.com/api/f1/${path}`;

// define a sintaxe de uma season (suas respectivas propriedades) conforme características de retorno da API
export interface ISeasonItem {
  season: string,
  url: string
}

export interface IData {
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

@Injectable({
  providedIn: 'root'
})
export class FormulaoneApiService {
  // instancia no construtor a função que permitirá a execução de chamadas HTTP
  constructor(private http: HttpClient) { }

  // método que irá buscar todas as seasons retornando um Observable
  getAllSeasons(): Observable<any> {
    // busca as seasons retornando um array do tipo ISeasonsResult
    return this.http.get<IData>(withBaseUrl('seasons.json?limit=71'));
  }
}
