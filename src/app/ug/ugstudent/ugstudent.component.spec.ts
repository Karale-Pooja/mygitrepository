import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgstudentComponent } from './ugstudent.component';

describe('UgstudentComponent', () => {
  let component: UgstudentComponent;
  let fixture: ComponentFixture<UgstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
