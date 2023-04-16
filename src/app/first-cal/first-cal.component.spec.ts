import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCalComponent } from './first-cal.component';

describe('FirstCalComponent', () => {
  let component: FirstCalComponent;
  let fixture: ComponentFixture<FirstCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
