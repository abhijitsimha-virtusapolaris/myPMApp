import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGaurdService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot): boolean{
      console.log("in PG");
      let id = +activatedRoute.url[1].path;
       console.log(+activatedRoute.url[1].path+"::::::::::id");
       console.log(isNaN(id));
       console.log(id <1);
      if( isNaN(id) || id <1){
        alert('Invalid Product ID');
        this._router.navigate(['/products']);
        return false;
      }
      return true;
  }
  
}
