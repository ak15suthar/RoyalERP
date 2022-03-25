import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanagebatchComponent } from './addmanagebatch.component';

describe('AddmanagebatchComponent', () => {
  let component: AddmanagebatchComponent;
  let fixture: ComponentFixture<AddmanagebatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanagebatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanagebatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
