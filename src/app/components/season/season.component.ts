import { Component, OnInit, Input } from '@angular/core';
import { ISeasonItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  @Input() season: ISeasonItem;

  constructor() { }

  ngOnInit(): void {
  }

}
