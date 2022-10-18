import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgstaffComponent } from './pgstaff.component';

describe('PgstaffComponent', () => {
  let component: PgstaffComponent;
  let fixture: ComponentFixture<PgstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgstaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
