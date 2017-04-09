import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform (value: number): string {
    const hours = Math.floor(value / 60);

    if (!value) {
      return '0 min';
    }

    return hours < 1 ? value + 'min' : hours + 'h ' + (value - hours * 60) + 'min';
  }
}