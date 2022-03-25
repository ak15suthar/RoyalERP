import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageclubComponent } from './manageclub.component';

describe('ManageclubComponent', () => {
  let component: ManageclubComponent;
  let fixture: ComponentFixture<ManageclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
