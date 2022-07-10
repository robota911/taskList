import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson02Component } from './lesson04.component';

describe('Lesson04Component', () => {
  let component: Lesson02Component;
  let fixture: ComponentFixture<Lesson02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
