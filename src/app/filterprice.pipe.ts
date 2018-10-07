import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(value: any, price: any): any {
    var temp=parseInt(price);
    console.log("pipe-price"+temp);
    return value.filter((dataprice)=>{return dataprice.price<temp});
  }

}
