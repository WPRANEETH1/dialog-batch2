import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketersViewComponent } from './cricketers-view.component';

describe('CricketersViewComponent', () => {
  let component: CricketersViewComponent;
  let fixture: ComponentFixture<CricketersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
