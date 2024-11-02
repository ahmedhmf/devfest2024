import {Component, Input} from '@angular/core';
import {PowerModel} from "../../models/super-hero.model";

@Component({
  selector: 'app-power',
  standalone: true,
  imports: [],
  templateUrl: './power.component.html',
  styleUrl: './power.component.css'
})
export class PowerComponent {
  @Input({required: true}) heroPower: PowerModel | undefined;
}
