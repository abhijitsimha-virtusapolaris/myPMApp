import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../model/product';

@Pipe({
  name: 'productListFilter'
})
export class ProductListFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy:string ): IProduct[] {

    filterBy = filterBy ? filterBy : null;

    return filterBy ? value.filter((product:IProduct) =>
                                    product.productName.toLocaleLowerCase().indexOf(filterBy) != -1 ): value;
  }

}
