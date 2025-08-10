import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFactorsComponent } from './daily-factors.component';

describe('DailyFactorsComponent', () => {
  let component: DailyFactorsComponent;
  let fixture: ComponentFixture<DailyFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyFactorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
