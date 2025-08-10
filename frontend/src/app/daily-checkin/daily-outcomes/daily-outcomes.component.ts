import {Component, Input} from '@angular/core';
import {SliderConfig} from "../../models/slider-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-daily-outcomes',
  standalone: false,
  templateUrl: './daily-outcomes.component.html',
  styleUrl: '../daily-checkin.component.scss'
})
export class DailyOutcomesComponent {
  @Input() sliderConfig!: SliderConfig;
  @Input() wellbeingMetricsForm: FormGroup = new FormGroup({});

  getOutcomeValue(factor: string) {
    return this.wellbeingMetricsForm.get(factor)?.value;
  }

}
