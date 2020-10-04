import { Component, Input } from '@angular/core';
import { IConstructorItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: IConstructorItem;
  
  constructor() { }

}
