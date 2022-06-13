import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStoryComponent } from './a-story.component';

describe('AStoryComponent', () => {
  let component: AStoryComponent;
  let fixture: ComponentFixture<AStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
