import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IConstructorItem, IConstructors, FormulaoneApiService } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-constructors-page',
  templateUrl: './constructors-page.component.html',
  styleUrls: ['./constructors-page.component.css']
})
export class ConstructorsPageComponent implements OnInit {
  roundConstructors: Array<IConstructorItem>
  season: any
  round: any

  constructor(
    private route: ActivatedRoute,
    private formulaoneApiService: FormulaoneApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.formulaoneApiService.getConstructors(params.season,params.round).
      subscribe((constructorsList: IConstructors) => {
        this.roundConstructors = constructorsList.MRData.ConstructorTable.Constructors;
        this.season = constructorsList.MRData.ConstructorTable.season;
        this.round = constructorsList.MRData.ConstructorTable.round;
      });
    });
  }

}
