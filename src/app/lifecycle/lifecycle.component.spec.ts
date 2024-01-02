import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleComponent } from './lifecycle.component';

describe('LifecycleComponent', () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggle', () => {
    component.displayChild = false;
    component.toggle();
    expect(component.displayChild).toEqual(true);
  });
});
