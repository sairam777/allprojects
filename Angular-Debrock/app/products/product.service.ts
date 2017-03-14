import {Injectable} from '@angular/core';
import {Iproduct} from './product';

import{ Http,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProductService{
private _productUrl ='api/products/products.json';

constructor(private _http: Http) {}


    getProducts(): Observable<Iproduct[]>{
        return this._http.get(this._productUrl).map((response:Response)=><Iproduct[]>response.json())   
        .do(data =>console.log("All: " +JSON.stringify(data))).catch(this.handleError);
          
    }
private handleError(error :Response){
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
}
}