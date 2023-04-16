import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCalComponent } from './second-cal.component';

describe('SecondCalComponent', () => {
  let component: SecondCalComponent;
  let fixture: ComponentFixture<SecondCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
