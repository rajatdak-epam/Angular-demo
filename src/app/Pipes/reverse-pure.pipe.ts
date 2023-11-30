import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
  pure: true
})
export class ReversePurePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const str = value.split("").reverse().join("");
    return str;
  }

}
