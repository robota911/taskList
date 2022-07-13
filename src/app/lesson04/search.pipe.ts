import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User [ ], search: string): User [] {
    if (!value) return [];
    if (!search) return value
    return value.filter(result => result.FirstNames.toLowerCase().includes(search.toLowerCase()))        
  }  
}
