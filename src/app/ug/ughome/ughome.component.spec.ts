import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UghomeComponent } from './ughome.component';

describe('UghomeComponent', () => {
  let component: UghomeComponent;
  let fixture: ComponentFixture<UghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
