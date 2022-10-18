import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgstaffComponent } from './ugstaff.component';

describe('UgstaffComponent', () => {
  let component: UgstaffComponent;
  let fixture: ComponentFixture<UgstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgstaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
