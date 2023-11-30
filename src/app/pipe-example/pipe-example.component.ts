import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedImpurePipe } from '../Pipes/sorted-impure.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ReversePurePipe } from '../Pipes/reverse-pure.pipe';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [CommonModule, SortedImpurePipe, MatButtonModule, ReversePurePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent {
  numbers = [this.randomNumber(), this.randomNumber(), this.randomNumber()];
  name: string = "Rajat";
  
  generateNumber() {
    this.numbers.push(this.randomNumber());
  }

  randomNumber() {
    return Math.floor(100 * Math.random()) + 1;
  }
}
