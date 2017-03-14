import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';


@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>              
               </div>
                <pm-products></pm-products> 
               ` ,
                 providers:[ProductService,HttpModule]        
    })
export class AppComponent{
    pageTitle:String = 'Acme Product Management';
}
