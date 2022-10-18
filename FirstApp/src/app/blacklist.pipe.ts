import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if(value == "stupid" || value == "idiot"){
      return "BlackListed Word!!";
    }
    else{
      return"Ok!";
    }
  }

}
