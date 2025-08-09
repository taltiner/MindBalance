import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCheckinComponent } from './daily-checkin.component';

describe('DailyCheckinComponent', () => {
  let component: DailyCheckinComponent;
  let fixture: ComponentFixture<DailyCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyCheckinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
