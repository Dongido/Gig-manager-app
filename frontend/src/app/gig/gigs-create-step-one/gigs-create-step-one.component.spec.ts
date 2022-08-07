import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsCreateStepOneComponent } from './gigs-create-step-one.component';

describe('GigsCreateStepOneComponent', () => {
  let component: GigsCreateStepOneComponent;
  let fixture: ComponentFixture<GigsCreateStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsCreateStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsCreateStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
