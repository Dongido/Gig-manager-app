import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsCreateStepTwoComponent } from './gigs-create-step-two.component';

describe('GigsCreateStepTwoComponent', () => {
  let component: GigsCreateStepTwoComponent;
  let fixture: ComponentFixture<GigsCreateStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsCreateStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsCreateStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
