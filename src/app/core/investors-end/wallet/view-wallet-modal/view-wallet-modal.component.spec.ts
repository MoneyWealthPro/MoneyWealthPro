import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWalletModalComponent } from './view-wallet-modal.component';

describe('ViewWalletModalComponent', () => {
  let component: ViewWalletModalComponent;
  let fixture: ComponentFixture<ViewWalletModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWalletModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
