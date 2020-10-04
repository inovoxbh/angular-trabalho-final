import { Component, OnInit } from '@angular/core';
import { ISeasonItem, IData, FormulaoneApiService } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons-page.component.html',
  styleUrls: ['./seasons-page.component.css']
})
export class SeasonsPageComponent implements OnInit {
  seasons: Array<ISeasonItem>;

  constructor(private formulaoneApiService: FormulaoneApiService) { }

  ngOnInit(): void {
    // faz a chamada do serviço de busca de Seasons
    this.formulaoneApiService.getAllSeasons()
      .subscribe((seasonsList: IData) => {
        this.seasons = seasonsList.MRData.SeasonTable.Seasons;
        console.log('resultado', seasonsList.MRData.SeasonTable.Seasons)
      });
  }

}
