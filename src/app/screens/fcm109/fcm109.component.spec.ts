import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fcm109Component } from './fcm109.component';

describe('Fcm109Component', () => {
  let component: Fcm109Component;
  let fixture: ComponentFixture<Fcm109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Fcm109Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fcm109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
