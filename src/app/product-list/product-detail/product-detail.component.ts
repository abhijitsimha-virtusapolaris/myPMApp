import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from '../../model/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  productDetailPageTitle: String = 'Product Detail';
  currentProduct: IProduct;
  private sub: Subscription;
  errorMessage: String;
  routeParamID: number;
  allProducts: IProduct[];
  productFilterID: number;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _productService: ProductServiceService) { }

  ngOnInit() {

    console.log('In onInit of productDetailComponent');
    this.routeParamID = +this._activatedRoute.snapshot.params['id'];
    this.productDetailPageTitle += `: ${this.routeParamID}`;
    this.productFilterID = this.routeParamID;

    console.log(this.productFilterID);

    this._productService.getProducts().subscribe(
      products => this.allProducts = products,
      error => this.errorMessage = <any>error);

  }


  onBack(): void{
    this._router.navigate(['/products']);
  }

  onRatingClicked(message:string): void {
    this.productDetailPageTitle = 'Product Detail :' + this.productFilterID + ' ' + message;
  }

}
