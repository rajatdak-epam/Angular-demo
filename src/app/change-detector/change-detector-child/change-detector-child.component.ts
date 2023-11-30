import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-change-detector-child',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './change-detector-child.component.html',
  styleUrl: './change-detector-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorChildComponent implements OnInit {
  @Input() data?: string[];

  constructor(private cd: ChangeDetectorRef, private dataService: DataService) { }

  ngOnInit() {
    console.log("OnInit");
    
    // Detaches the current component from the change detection
    // this.cd.detach();

    // this.dataService.data$.subscribe((newData: any) => {
    //   if (newData !== this.data) {
    //      this.data = newData;
    //     // to mark the components for change detection
    //     this.cd.markForCheck();
    //   }
    // });

  }

  updateData() {
    // Angular will run change detection when we call detectChanges method
    this.cd.detectChanges();
  }
}
