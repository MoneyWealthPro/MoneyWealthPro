import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEndComponent } from './admin-end.component';

describe('AdminEndComponent', () => {
  let component: AdminEndComponent;
  let fixture: ComponentFixture<AdminEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
