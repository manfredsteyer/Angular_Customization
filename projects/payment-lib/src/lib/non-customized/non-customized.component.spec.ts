/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NonCustomizedComponent } from './non-customized.component';

describe('NonCustomizedComponent', () => {
  let component: NonCustomizedComponent;
  let fixture: ComponentFixture<NonCustomizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonCustomizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
