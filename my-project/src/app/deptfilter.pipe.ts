import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'deptfilter'
})
export class DeptfilterPipe implements PipeTransform {

  transform(input: Employee[], deptno: number): Employee[] {
    let output:Employee[] = [];
    if(deptno == -1) {
      output = input;
    }
    else {
      output = input.filter(item=> item.deptno == deptno);
    }
    return output;
  }

}
