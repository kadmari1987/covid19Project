import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesuresDePrecautionComponent } from './mesures-de-precaution.component';

describe('MesuresDePrecautionComponent', () => {
  let component: MesuresDePrecautionComponent;
  let fixture: ComponentFixture<MesuresDePrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesuresDePrecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesuresDePrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
