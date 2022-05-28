import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsEndComponent } from './investors-end.component';

describe('InvestorsEndComponent', () => {
  let component: InvestorsEndComponent;
  let fixture: ComponentFixture<InvestorsEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
