import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson003Component } from './lesson003.component';

describe('Lesson003Component', () => {
  let component: Lesson003Component;
  let fixture: ComponentFixture<Lesson003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
