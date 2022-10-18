import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): unknown {
    var result:string="";
    for(var i = value.length-1;i>=0;i--){
      result = result + value[i];
    }
    return result;
  }
}
