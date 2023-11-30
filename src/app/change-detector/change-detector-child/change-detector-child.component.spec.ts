import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorChildComponent } from './change-detector-child.component';

describe('ChangeDetectorChildComponent', () => {
  let component: ChangeDetectorChildComponent;
  let fixture: ComponentFixture<ChangeDetectorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectorChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
