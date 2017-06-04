import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../../model/product';

@Pipe({
  name: 'productID'
})
export class ProductIDPipe implements PipeTransform {

  transform(value: any, filterBy:number ): IProduct[] {

    filterBy = filterBy ? filterBy : null;

      return filterBy ? value.filter((product: IProduct) => product.productId === filterBy): value;
  }

}
