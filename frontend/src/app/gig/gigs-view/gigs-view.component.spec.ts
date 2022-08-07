import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsViewComponent } from './gigs-view.component';

describe('GigsViewComponent', () => {
  let component: GigsViewComponent;
  let fixture: ComponentFixture<GigsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
