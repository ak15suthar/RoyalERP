import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanageonetooneComponent } from './addmanageonetoone.component';

describe('AddmanageonetooneComponent', () => {
  let component: AddmanageonetooneComponent;
  let fixture: ComponentFixture<AddmanageonetooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanageonetooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanageonetooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
