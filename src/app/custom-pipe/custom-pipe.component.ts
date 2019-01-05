import { Pipe,PipeTransform} from '@angular/core';


@Pipe({
  name:'exponential'
})
export class CustomPipeComponent implements PipeTransform{

  transform(value:number, exponent:string){
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}