import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItassignstatusComponent } from './itassignstatus.component';

describe('ItassignstatusComponent', () => {
  let component: ItassignstatusComponent;
  let fixture: ComponentFixture<ItassignstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItassignstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItassignstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
