import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoundItem, IRounds, FormulaoneApiService } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-rounds-page',
  templateUrl: './rounds-page.component.html',
  styleUrls: ['./rounds-page.component.css']
})
export class RoundsPageComponent implements OnInit {
  seasonRounds: Array<IRoundItem>;
  season: any

  constructor(
    private route: ActivatedRoute,
    private formulaoneApiService: FormulaoneApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.formulaoneApiService.getRounds(params.season).
      subscribe((roundsList: IRounds) => {
        this.seasonRounds = roundsList.MRData.RaceTable.Races;
        this.season = roundsList.MRData.RaceTable.season;
      });
    });
  }

}
