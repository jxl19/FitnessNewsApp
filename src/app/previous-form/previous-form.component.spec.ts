import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFormComponent } from './previous-form.component';

describe('PreviousFormComponent', () => {
  let component: PreviousFormComponent;
  let fixture: ComponentFixture<PreviousFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
