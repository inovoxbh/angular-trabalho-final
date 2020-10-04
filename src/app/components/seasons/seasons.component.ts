import { Component, Input } from '@angular/core';
import { ISeasonItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent {
  @Input() seasons: Array<ISeasonItem>;

  constructor() { }

}
