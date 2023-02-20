import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChoicesComponent } from './view-choices.component';

describe('ViewChoicesComponent', () => {
  let component: ViewChoicesComponent;
  let fixture: ComponentFixture<ViewChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
