import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculusComponent } from './main-calculus.component';

describe('MainCalculusComponent', () => {
  let component: MainCalculusComponent;
  let fixture: ComponentFixture<MainCalculusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCalculusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
