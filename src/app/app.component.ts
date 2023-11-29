import {
  Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, OnChanges, OnDestroy, ViewChild, ContentChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  displayChild: boolean = false;
  @ViewChild(ChildComponent, {static:false}) child?: ChildComponent;
  @ContentChild(ChildComponent) contentChild?: ChildComponent;

  constructor() {
    console.log("AppComponent:Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent:OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
  ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked", this.contentChild);
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked", this.child);
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}