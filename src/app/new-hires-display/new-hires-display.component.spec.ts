import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHiresDisplayComponent } from './new-hires-display.component';

describe('NewHiresDisplayComponent', () => {
  let component: NewHiresDisplayComponent;
  let fixture: ComponentFixture<NewHiresDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHiresDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHiresDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
