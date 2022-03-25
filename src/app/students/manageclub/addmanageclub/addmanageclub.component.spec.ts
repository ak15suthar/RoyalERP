import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanageclubComponent } from './addmanageclub.component';

describe('AddmanageclubComponent', () => {
  let component: AddmanageclubComponent;
  let fixture: ComponentFixture<AddmanageclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanageclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanageclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
