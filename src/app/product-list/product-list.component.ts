import { Component, OnInit } from '@angular/core';

import { IProduct } from '../model/product';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlistPageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImageFlag= false;
  listFilter: String;
  filterByLabel: number= 15;
  products: IProduct[];
  errorMessage: string;
  imgURL:String;

  // products: IProduct[] = [
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
    
  constructor(private _productService: ProductServiceService) { }

  ngOnInit() {
    console.log('In OnInit:product-list component' + '::::::::::' + this.products);
    // this.products=this._productService.getProducts();
    this._productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error);
  }

  showImage(): void {
    this.showImageFlag = !this.showImageFlag;
  }

  onRatingClicked(message:string): void {
    this.productlistPageTitle = 'Product List :'+ message;
  }

  popImage(event){
    console.log('POP IMAGE');
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(idAttr);
    console.log(value);
    console.log(target.src);
    this.imgURL=target.src;
   
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
   modal.style.display = "block";
   


  }
closeImage(){


    var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
   modal.style.display = "none";

}
}
