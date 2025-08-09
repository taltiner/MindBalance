import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdapterService} from "../adapter/adapter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-daily-checkin',
  templateUrl: './daily-checkin.component.html',
  styleUrl: './daily-checkin.component.scss'
})
export class DailyCheckinComponent {

  constructor(private router: Router) {}

  min: number = 0;
  max: number = 10;
  step: number = 1;
  discrete: boolean = false;
  showTickMarks: boolean = true;
  disabled: boolean = false;
  isLinear: boolean = false;

  dailyCheckinForm: FormGroup = new FormGroup({
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

  getFactorValue(factor: string) {
    return this.dailyCheckinForm.get(factor)?.value;
  }

  getOutcomeValue(factor: string) {
    return this.wellbeingMetricsForm.get(factor)?.value;
  }


  onSave() {
    console.log('form', this.dailyCheckinForm);
  }

  onReturn() {
    this.router.navigate(['/dashboard']);
  }
}
