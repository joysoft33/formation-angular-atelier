import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTranscludeComponent } from './app-transclude.component';

describe('AppTranscludeComponent', () => {
  let component: AppTranscludeComponent;
  let fixture: ComponentFixture<AppTranscludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTranscludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTranscludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
