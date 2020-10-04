import { Component, Input } from '@angular/core';
import { IRoundItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})

export class RoundsComponent {
  @Input() rounds: Array<IRoundItem>;

  constructor() { }
}
