import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTokenComponent } from './clear-token.component';

describe('ClearTokenComponent', () => {
  let component: ClearTokenComponent;
  let fixture: ComponentFixture<ClearTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
