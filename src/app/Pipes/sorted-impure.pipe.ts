import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
  standalone: true,
  pure: false
})

export class SortedImpurePipe implements PipeTransform {
  transform(numbers: number[], ...args: unknown[]): number[] {
    return numbers.sort((a, b) => a - b);
  }

}
