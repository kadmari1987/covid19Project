import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiqueMarocComponent } from './belgique-maroc.component';

describe('BelgiqueMarocComponent', () => {
  let component: BelgiqueMarocComponent;
  let fixture: ComponentFixture<BelgiqueMarocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgiqueMarocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiqueMarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
