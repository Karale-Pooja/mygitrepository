import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcompComponent } from './gitcomp.component';

describe('GitcompComponent', () => {
  let component: GitcompComponent;
  let fixture: ComponentFixture<GitcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
