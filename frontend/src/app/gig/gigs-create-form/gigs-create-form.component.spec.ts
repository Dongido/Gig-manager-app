import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsCreateFormComponent } from './gigs-create-form.component';

describe('GigsCreateFormComponent', () => {
  let component: GigsCreateFormComponent;
  let fixture: ComponentFixture<GigsCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
