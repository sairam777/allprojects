import {Component ,OnInit } from '@angular/core';
import {Iproduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {starComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component({
    selector:'pm-products',
    templateUrl:'./app/products/product-list.component.html',
    styleUrls:['./app/products/product-list.component.css'],

   
})
export class ProductListComponent implements OnInit{
    pageTitle:String='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    filterList:String;
  
        products:Iproduct[];
        constructor(private _productService: ProductService){

        }
toggleImage(): void{

    this.showImage = !this.showImage;
}

ngOnInit(): void{
this._productService.getProducts() ;


}
onRatingClicked(message:string):void{

    this.pageTitle='Product List: ' +message;
}
}