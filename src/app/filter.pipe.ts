import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term : any): any {
    if(term == '') return value;
    
    return value.filter(function(v){
      return v.first_name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
