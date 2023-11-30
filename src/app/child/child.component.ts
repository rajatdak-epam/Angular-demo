import {
  Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  DoCheck, OnChanges, OnDestroy, OnInit, Input, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message = '';

  constructor() {
    console.log("1. ChildCompoent:Constructor");
  }

  // Invoked every time there is a change in one of th input properties of the component.
  ngOnChanges(changes: SimpleChanges) {
    console.log("2. ChildComponent:OnChanges", changes);
    for (let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
  }

  //Invoked when given component has been initialized.
  ngOnInit() {
    console.log("3. ChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("4. ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("5. ChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("6. ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("7. ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("8. ChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("9. ChildComponent:OnDestroy");
  }

}
