import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

export interface OverviewElement {
  name: string;
  value: number;
}

@Component({
  selector: 'app-daily-overview',
  standalone: false,
  templateUrl: './daily-overview.component.html',
  styleUrl: './daily-overview.component.scss'
})
export class DailyOverviewComponent implements OnInit {
  @Input() dailyCheckinForm!: FormGroup;
  @Input() wellbeingMetricsForm!: FormGroup;

  displayedCheckinColumns: string[] = ['factor', 'value'];
  displayedOutcomeColumns: string[] = ['outcome', 'value'];

  dailyCheckinSource: OverviewElement[] = [
    {name: 'sleepQuality', value: 0},
    {name: 'physicalActivity', value: 0},
    {name: 'socialInteraction', value: 0},
    {name: 'stressLevel', value: 0},
    {name: 'screenTime', value: 0},
    {name: 'workSatisfaction', value: 0},
    {name: 'caffaineIntake', value: 0},
    {name: 'sugarIntake', value: 0},
  ];

  dailyWellbeingSource: OverviewElement[] = [
    {name: 'mood', value: 0},
    {name: 'focus', value: 0},
    {name: 'emotionalStability', value: 0},
    {name: 'productivity', value: 0},
    {name: 'energyLevel', value: 0},
    {name: 'anxiety', value: 0},
  ];

  ngOnInit(): void {
    if (this.dailyCheckinForm) {
      this.dailyCheckinForm.valueChanges.subscribe(() => {
        this.transformFormToDataSource(this.dailyCheckinForm, this.dailyCheckinSource);
      });
      this.transformFormToDataSource(this.dailyCheckinForm, this.dailyCheckinSource);
    }

    if(this.wellbeingMetricsForm) {
      this.wellbeingMetricsForm.valueChanges.subscribe(() => {
        this.transformFormToDataSource(this.wellbeingMetricsForm, this.dailyWellbeingSource);
      });
    }
    this.transformFormToDataSource(this.wellbeingMetricsForm, this.dailyWellbeingSource);
  }

  private transformFormToDataSource(form: FormGroup, dataSource: OverviewElement[]): void {
    dataSource.forEach(element => {
      const inputValue = form.get(element.name)?.value;
      if(inputValue !== undefined || true) {
        element.value = inputValue;
      }
    })
  }
}
