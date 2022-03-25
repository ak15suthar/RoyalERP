import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageonetooneComponent } from './manageonetoone.component';

describe('ManageonetooneComponent', () => {
  let component: ManageonetooneComponent;
  let fixture: ComponentFixture<ManageonetooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageonetooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageonetooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
