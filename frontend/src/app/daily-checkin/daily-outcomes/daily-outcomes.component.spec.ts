import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOutcomesComponent } from './daily-outcomes.component';

describe('DailyOutcomesComponent', () => {
  let component: DailyOutcomesComponent;
  let fixture: ComponentFixture<DailyOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyOutcomesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
