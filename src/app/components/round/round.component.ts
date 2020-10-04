import { Component, Input } from '@angular/core';
import { IRoundItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent {
  @Input() round: IRoundItem;
  
  constructor() { }

}
