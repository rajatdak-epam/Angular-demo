import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { SimpleChange } from '@angular/core';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render  World with ngonchange method call', () => {
    component.message = 'World';
      
    //directly call ngOnChanges
    component.ngOnChanges({
      name: new SimpleChange(null, component.message, true)
    });
    fixture.detectChanges();
    expect(component.message).toBe('World');
  });
});
