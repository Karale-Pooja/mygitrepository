import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletextComponent } from './sampletext.component';

describe('SampletextComponent', () => {
  let component: SampletextComponent;
  let fixture: ComponentFixture<SampletextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampletextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampletextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
