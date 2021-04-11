import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNewsletterComponent } from './previous-newsletter.component';

describe('PreviousNewsletterComponent', () => {
  let component: PreviousNewsletterComponent;
  let fixture: ComponentFixture<PreviousNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
