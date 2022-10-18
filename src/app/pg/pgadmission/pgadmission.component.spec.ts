import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgadmissionComponent } from './pgadmission.component';

describe('PgadmissionComponent', () => {
  let component: PgadmissionComponent;
  let fixture: ComponentFixture<PgadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
