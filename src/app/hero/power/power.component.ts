import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() onPowerClick = new EventEmitter<string>();

  powerClick(value: number | null | undefined) {
    this.onPowerClick.emit(value?.toString());
  }
}
