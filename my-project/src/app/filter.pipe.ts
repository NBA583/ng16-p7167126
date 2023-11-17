import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Employee[], minRange: number, maxRange: number): Employee[] {
    let output:Employee[] = [];
    // if(deptno == -1) {
    //   output = input;
    // }
    // else {
    //   output = input.filter(item=> item.deptno == deptno);
    // }
    output = input.filter(item=> item.salary >= minRange && item.salary <= maxRange);
    return output;
  }

}
