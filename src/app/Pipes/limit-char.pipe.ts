import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChar',
})
export class LimitCharPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) return;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
