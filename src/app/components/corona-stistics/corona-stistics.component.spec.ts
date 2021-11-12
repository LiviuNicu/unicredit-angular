import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaStisticsComponent } from './corona-stistics.component';

describe('CoronaStisticsComponent', () => {
  let component: CoronaStisticsComponent;
  let fixture: ComponentFixture<CoronaStisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaStisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaStisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
