import {Component, Input} from '@angular/core';
import { FormGroup } from "@angular/forms";
import {SliderConfig} from "../../models/slider-config.interface";

@Component({
  selector: 'app-daily-factors',
  standalone: false,
  templateUrl: './daily-factors.component.html',
  styleUrl: '../daily-checkin.component.scss'
})
export class DailyFactorsComponent {
  @Input() sliderConfig!: SliderConfig;
  @Input() dailyCheckinForm: FormGroup = new FormGroup({});

  getFactorValue(factor: string) {
    return this.dailyCheckinForm.get(factor)?.value;
  }

}
