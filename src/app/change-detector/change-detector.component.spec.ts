import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorComponent } from './change-detector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChangeDetectorComponent', () => {
  let component: ChangeDetectorComponent;
  let fixture: ComponentFixture<ChangeDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectorComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.addFruit("Watermelon");
    expect(component.fruits.length).toEqual(4);
  });
  
});
