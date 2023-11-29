import {
  Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, OnChanges, OnDestroy, ViewChild, ContentChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule, ChildComponent, MatButtonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

displayChild: boolean = false;
@ViewChild(ChildComponent, {static:false}) child?: ChildComponent;
@ContentChild(ChildComponent) contentChild?: ChildComponent;
  constructor() {
    console.log("Parent Component : Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("Parent Component : OnChanges");
  }

  ngOnInit() {
    console.log("Parent Component : OnInit");
  }

  ngDoCheck() {
    console.log("Parent Component : DoCheck");
  }
  ngAfterContentInit() {
    console.log("Parent Component : AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Parent Component : AfterContentChecked", this.contentChild);
  }

  ngAfterViewInit() {
    console.log("Parent Component : AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("Parent Component : AfterViewChecked", this.child);
  }

  ngOnDestroy() {
    console.log("Parent Component : OnDestroy");
  }
}
