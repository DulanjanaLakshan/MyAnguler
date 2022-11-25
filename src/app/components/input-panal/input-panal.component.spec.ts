import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPanalComponent } from './input-panal.component';

describe('InputPanalComponent', () => {
  let component: InputPanalComponent;
  let fixture: ComponentFixture<InputPanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
