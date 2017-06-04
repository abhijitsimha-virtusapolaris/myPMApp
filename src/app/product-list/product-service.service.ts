import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from '../model/product';

@Injectable()
export class ProductServiceService {

    private _productUrl = "/AppImages/products.json";

  constructor(private _http: Http) { }

  // getProducts(): IProduct [] {
  //   return [
  //      {
  //       'productId': 1,
  //       'productName': 'Leaf Rake',
  //       'productCode': 'GDN-0011',
  //       'releaseDate': 'March 19, 2016',
  //       'description': 'Leaf rake with 48-inch wooden handle.',
  //       'price': 19.95,
  //       'starRating': 3.2,
  //       'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
  //   },
  //   {
  //       'productId': 2,
  //       'productName': 'Garden Cart',
  //       'productCode': 'GDN-0023',
  //       'releaseDate': 'March 18, 2016',
  //       'description': '15 gallon capacity rolling garden cart',
  //       'price': 32.99,
  //       'starRating': 4.2,
  //       'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  //   }
  //       ];
  // }

   getProducts(): Observable<IProduct[]> {
     return this._http.get(this._productUrl)
     .map((response: Response) => <IProduct[]>response.json())
     .do(data => console.log('All Products:'+ JSON.stringify(data)))
     .catch(this.handleError);
   }

    getProduct(id: number): Observable<IProduct> {
      return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id ));
    }

private handleError(error: Error){
  console.log(error);
  return Observable.throw(new Error('Server error'));
}

}
