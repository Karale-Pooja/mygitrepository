import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcourseComponent } from './ugcourse.component';

describe('UgcourseComponent', () => {
  let component: UgcourseComponent;
  let fixture: ComponentFixture<UgcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
