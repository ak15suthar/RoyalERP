import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbatchComponent } from './studentbatch.component';

describe('StudentbatchComponent', () => {
  let component: StudentbatchComponent;
  let fixture: ComponentFixture<StudentbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
