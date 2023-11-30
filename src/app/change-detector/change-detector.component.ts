import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ChangeDetectorChildComponent } from './change-detector-child/change-detector-child.component';
import { DataService } from '../Services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-change-detector',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ChangeDetectorChildComponent],
  templateUrl: './change-detector.component.html',
  styleUrl: './change-detector.component.scss'
})
export class ChangeDetectorComponent {
  fruits = ['Mango', 'Orange', 'Banana'];
  // fruits = new BehaviorSubject(['Bacon', 'Letuce', 'Tomatoes']);
  constructor(private dataService: DataService) { }
  
  addFruit(item: string) {
    this.fruits.push(item);
    //this.fruits = [...this.fruits, item];
    // this.dataService.setData(this.fruits);
  }  
}
