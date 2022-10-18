import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PghomeComponent } from './pghome.component';

describe('PghomeComponent', () => {
  let component: PghomeComponent;
  let fixture: ComponentFixture<PghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
