import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationDemo } from './interpolation-demo';

describe('InterpolationDemo', () => {
  let component: InterpolationDemo;
  let fixture: ComponentFixture<InterpolationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
