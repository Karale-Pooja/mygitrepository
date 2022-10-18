import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgstudentComponent } from './pgstudent.component';

describe('PgstudentComponent', () => {
  let component: PgstudentComponent;
  let fixture: ComponentFixture<PgstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
