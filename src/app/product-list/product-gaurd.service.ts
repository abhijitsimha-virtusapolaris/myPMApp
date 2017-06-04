import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGaurdService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot): boolean{
      let id = +activatedRoute.url[1].path;
      if( isNaN(id) || id <1){
        alert('Invalid Product ID');
        this._router.navigate(['/products']);
        return false;
      }
      return true;
  }
  
}
