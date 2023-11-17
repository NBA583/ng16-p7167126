import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(input: string): string {
    let output:string = "";
    if(input.toLocaleLowerCase() == "m") output="male.png";
    if(input.toLocaleLowerCase() == "f") output="female.png";
    return output;
  }

}
