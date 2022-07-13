import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: User [ ], sortParam: string): User [] {
    if (!value) return [];
    if (!sortParam) return value
    if (sortParam === 'ask') {
      return value.sort((a, b)=> {
        if (a.FirstNames < b.FirstNames) {
          return -1
        }
        if (a.FirstNames > b.FirstNames) {
          return 1
        }
        return 0
      } )
    }
    return value.sort((a, b)=> {
      if (a.FirstNames > b.FirstNames) {
        return -1
      }
      if (a.FirstNames < b.FirstNames) {
        return 1
      }
      return 0
    } )
  }

}
