import {Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SliderConfig} from "../models/slider-config.interface";
import {MatStepper} from "@angular/material/stepper";
import {DailyCheckin} from "../models/daily-checkin.interface";
import {AdapterService} from "../adapter/adapter.service";

@Component({
  selector: 'app-daily-checkin',
  templateUrl: './daily-checkin.component.html',
  styleUrl: './daily-checkin.component.scss'
})
export class DailyCheckinComponent {
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private router: Router,
              private adapter: AdapterService) {}

  sliderConfig: SliderConfig = {
    min: 0,
    max: 10,
    step: 1,
    discrete: false,
    showTickMarks: true,
    disabled: false,
    isLinear: false
  };

  isLinear: boolean = false;

  dailyFactorsForm: FormGroup = new FormGroup({
    'sleepQuality': new FormControl(0, Validators.required),
    'physicalActivity': new FormControl(0, Validators.required),
    'socialInteraction': new FormControl(0, Validators.required),
    'stressLevel': new FormControl(0, Validators.required),
    'screenTime': new FormControl(0, Validators.required),
    'workSatisfaction': new FormControl(0, Validators.required),
    'caffaineIntake': new FormControl(0, Validators.required),
    'sugarIntake': new FormControl(0, Validators.required),
  });

  wellbeingMetricsForm: FormGroup = new FormGroup({
    'mood': new FormControl('0', Validators.required),
    'focus': new FormControl('0', Validators.required),
    'emotionalStability': new FormControl('0', Validators.required),
    'productivity': new FormControl('0', Validators.required),
    'energyLevel': new FormControl('0', Validators.required),
    'anxiety': new FormControl('0', Validators.required),
  })

  onSubmit() {
    this.adapter.createDailyCheckin(this.transformData());
  }

  onResetAll() {
    this.dailyFactorsForm.reset();
    this.wellbeingMetricsForm.reset();
    this.stepper.reset();
  }

  onReturn() {
    this.router.navigate(['/dashboard']);
  }

  private transformData(): DailyCheckin {
    return {
      dailyFactors: {
        sleepQuality: this.dailyFactorsForm.get('sleepQuality')?.value,
        physicalActivity: this.dailyFactorsForm.get('physicalActivity')?.value,
        socialInteraction: this.dailyFactorsForm.get('socialInteraction')?.value,
        stressLevel: this.dailyFactorsForm.get('stressLevel')?.value,
        screenTime: this.dailyFactorsForm.get('screenTime')?.value,
        workSatisfaction: this.dailyFactorsForm.get('workSatisfaction')?.value,
        caffaineIntake: this.dailyFactorsForm.get('caffaineIntake')?.value,
        sugarIntake: this.dailyFactorsForm.get('sugarIntake')?.value
      },

      wellBeingMetrics: {
        mood: this.wellbeingMetricsForm.get('mood')?.value,
        focus: this.wellbeingMetricsForm.get('focus')?.value,
        emotionalStability: this.wellbeingMetricsForm.get('emotionalStability')?.value,
        productivity: this.wellbeingMetricsForm.get('productivity')?.value,
        energyLevel: this.wellbeingMetricsForm.get('energyLevel')?.value,
        anxiety: this.wellbeingMetricsForm.get('anxiety')?.value
      }
    }
  }
}
