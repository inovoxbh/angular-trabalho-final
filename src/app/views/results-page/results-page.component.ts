import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResultItem, IResults, FormulaoneApiService } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  roundResult: Array<IResultItem>
  season: any
  round: any

  constructor(
    private route: ActivatedRoute,
    private formulaoneApiService: FormulaoneApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.formulaoneApiService.getResult(params.season,params.round).
      subscribe((resultsList: IResults) => {
        this.roundResult = resultsList.MRData.RaceTable.Races[0].Results;
        this.season = resultsList.MRData.RaceTable.season;
        this.round = resultsList.MRData.RaceTable.round;
      });
    });
  }
}
