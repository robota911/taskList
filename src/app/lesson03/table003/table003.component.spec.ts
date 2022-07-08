import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table003Component } from './table003.component';

describe('Table003Component', () => {
  let component: Table003Component;
  let fixture: ComponentFixture<Table003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
