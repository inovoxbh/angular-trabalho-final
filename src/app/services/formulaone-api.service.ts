import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

const withBaseUrl = path => `https://ergast.com/api/f1/${path}`;

export interface ISeasonItem {
  season: string,
  url: string
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

export interface IResultItem {
  number: string,
  position: string,
  positionText: string,
  points: string,
  Driver: {
    driverId: string,
    permanentNumber: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string,
  },
  Constructor: {
    constructorId: string,
    url: string,
    name: string,
    nationality: string,
  },
  grid: string,
  laps: string,
  status: string,
  Time: {
    millis: string,
    time: string,
  },
  FastestLap: {
    rank: string,
    lap: string,
    Time: {
      time: string
    },
    AverageSpeed: {
      units: string,
      speed: string
    }
  }

}

export interface IResults {
  MRData: {
    xmlns: string,
    series: string, 
    url: string, 
    limit: string,
    offset: string,
    total: string,
    RaceTable: {
      season: string,
      round: string,
      Races: {
        Results: Array<IResultItem>
      };
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormulaoneApiService {
  constructor(private http: HttpClient) { }

  getAllSeasons(): Observable<any> {
    // busca as seasons retornando um array do tipo ISeasonsResult
    return this.http.get<ISeasons>(withBaseUrl('seasons.json?limit=71'));
  }

  getRounds(season: string): Observable<any> {
    return this.http.get<IRounds>(withBaseUrl(`${season}.json`));
  }

  getResult(season: string, round: string): Observable<any> {
    return this.http.get<IResults>(withBaseUrl(`${season}/${round}/results.json`));
  }  
}
