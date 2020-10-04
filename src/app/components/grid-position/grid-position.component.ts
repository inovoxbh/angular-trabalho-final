import { Component, Input } from '@angular/core';
import { IResultItem } from '../../services/formulaone-api.service'

@Component({
  selector: 'app-grid-position',
  templateUrl: './grid-position.component.html',
  styleUrls: ['./grid-position.component.css']
})
export class GridPositionComponent {
  @Input() position: IResultItem;
  
  constructor() { }
}
